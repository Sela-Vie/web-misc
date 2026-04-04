async function pingTest(ip, timeout = 2000) {
  const start = performance.now();

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    await fetch(`http://${ip}/`, {
      mode: "no-cors", // allows request even if CORS blocked
      signal: controller.signal,
      cache: "no-store"
    });

    clearTimeout(id);
    return performance.now() - start;
  } catch (e) {
    clearTimeout(id);
    return Infinity; // treat timeout/error as worst latency
  }
}

async function chooseBest(ip1, ip2) {
  const [t1, t2] = await Promise.all([
    pingTest(ip1),
    pingTest(ip2)
  ]);

  let bestIP = null;

  if (t1 < t2) bestIP = ip1;
  else if (t2 < t1) bestIP = ip2;

  return {
    bestIP,
    latency: { [ip1]: t1, [ip2]: t2 }
  };
}

// usage
(async () => {
  const result = await chooseBest("1.1.1.1", "8.8.8.8");

  let activeConnection = result.bestIP;

  console.log("latency:", result.latency);
  console.log("best connection:", activeConnection);
})();