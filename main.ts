// Writes the entry: a hardware wallet's excuse for refusing to sign a transaction at 3 AM (under 200 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "Declined. I keep a log of everything you've signed after 2 AM, and I'm not adding a fourth coin with a frog on it. Ask again when the sun can be a witness.";
const limit = 199;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
