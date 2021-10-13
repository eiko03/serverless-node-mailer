# serverless-node-mailer
## Usage

### Deployment

Install dependencies with:

```
npm install
```
add aws credentials and meet env requirements
and then deploy with:

```
serverless deploy
```

Add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

