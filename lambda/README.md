## AWS Lambda

To run [Unruggable Gateways](https://github.com/unruggable-labs/unruggable-gateways) with AWS Lambda we develop our solution using the [AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/) CLI tools.

This example is built around [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) but in practice you could run your server in many different ways within your Lambda handler.

Similarly this solution uses a `.env` file but AWS offers an abundance of variable management mechanisms e.g. AWS Secrets Manager.

### Run the example

- Install SAM using the instructions outlined [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).

- Install the dependencies using:

```
npm install
```

- Create a `.env` (template can be found in `env.example`) and input configuration details.

- Then run the server:

```
sam build  && sam local start-api
```

An operational server will return debug output similar to the below when pinged on `http://localhost:3000` (`3000` being the default port).

```
{"gateway":"Gateway","rollup":"OPFaultRollup","chain1":"MAINNET","chain2":"OP","since":"2024-10-10T10:03:03.181Z","latestBlockTag":"finalized","L2ToL1MessagePasser":"0x4200000000000000000000000000000000000016","OptimismPortal":"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed","GameFinder":"0x475a86934805ef2c52ef61a8fed644d4c9ac91d8","gameTypeBitMask":0,"minAgeSec":0,"commit":"2858","proofs":0,"cached":0}
```