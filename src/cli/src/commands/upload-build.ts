/**
 * Copyright (c) 2019 Paul Armstrong
 */
import { Argv } from 'yargs';
import { handler as createBuild } from './create-build';
import getConfig from '../modules/config';
import http from 'http';
import https from 'https';
import { URL } from 'url';

export const command = 'upload-build';

export const description = 'Upload a build for the current commit';

interface Args {
  config?: string;
  out: boolean;
  'skip-dirty-check': boolean;
}

const group = 'Create a build';

export const builder = (yargs): Argv<Args> =>
  yargs
    .usage(`Usage: $0 ${command}`)
    .option('config', {
      alias: 'c',
      description: 'Override path to the build-tracker CLI config file',
      group,
      normalize: true
    })
    .option('skip-dirty-check', {
      default: false,
      description: 'Skip the git work tree state check',
      group,
      type: 'boolean'
    });

export const handler = async (args: Args): Promise<void> => {
  const config = await getConfig(args.config);
  const build = await createBuild({ ...args, out: false });

  const url = new URL(`${config.applicationUrl}/api/builds`);
  const httpProtocol = url.protocol === 'https:' ? https : http;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    const req = httpProtocol.request(url, requestOptions, (res: http.IncomingMessage) => {
      res.setEncoding('utf8');
      res.on('error', error => {
        process.stderr.write(error.toString());
      });

      res.on('data', data => {
        process.stdout.write(data);
      });

      res.on('end', () => {
        resolve();
      });
    });

    req.on('error', error => {
      process.stderr.write(error.toString());
      reject(error);
      process.exit(1);
    });

    req.write(JSON.stringify(build));
    req.end();
  });
};