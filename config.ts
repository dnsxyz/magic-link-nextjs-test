export const MAGIC_PUBLIC_KEY = (() => {
  if (!process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY) {
    throw new Error(
      "NEXT_PUBLIC_MAGIC_PUBLIC_KEY env variable must be set to the pk_live value found on the Magic.link dashboard"
    );
  }
  return process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY;
})();
