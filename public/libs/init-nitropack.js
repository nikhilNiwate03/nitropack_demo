import nitropack from "./nitropack/nitropack-sdk";

export const NITROPACK_HOME_URL = "https://nitropack-demo.vercel.app/";
export const NITROPACK_SITE_ID = "dlvPLkQcmuMxBLuEQuChWLFvVOBSVzww";
export const NITROPACK_SITE_SECRET =
  "mQZgYbIZ6sjCM7bFYsbFhbrkRlB6f7fr7a8yp82vTx93A4v70RXNFmGnLaZLUd98";

export function initializeNitropack() {
  nitropack.initialize({
    homeUrl: NITROPACK_HOME_URL,
    siteId: NITROPACK_SITE_ID,
    siteSecret: NITROPACK_SITE_SECRET,
  });
}
