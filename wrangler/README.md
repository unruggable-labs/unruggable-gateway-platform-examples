## Cloudflare

To use [Unruggable Gateways](https://github.com/unruggable-labs/unruggable-gateways) with Cloudflare Workers we utilise [Wrangler](https://developers.cloudflare.com/workers/wrangler/), their Developer Platform command-line interface (CLI).

### Run the example

- Install the dependencies using:

```
npm install
```

- Update configuration variables in `wrangler.toml`

- Run the server:

```
wrangler dev
```

An operational server will return debug output similar to the below when pinged on `http://localhost:3000` (`3000` being the default port).

```
{"gateway":"Gateway","rollup":"OPFaultRollup","chain1":"MAINNET","chain2":"OP","since":"2024-10-10T10:03:03.181Z","latestBlockTag":"finalized","L2ToL1MessagePasser":"0x4200000000000000000000000000000000000016","OptimismPortal":"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed","GameFinder":"0x475a86934805ef2c52ef61a8fed644d4c9ac91d8","gameTypeBitMask":0,"minAgeSec":0,"commit":"2858","proofs":0,"cached":0}
```