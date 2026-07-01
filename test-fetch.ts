async function test() {
  console.log("Fetching...");
  try {
    const res = await fetch("http://localhost:3000/api/symbols/marriage");
    console.log("Status:", res.status);
    const data = await res.text();
    console.log("Data length:", data.length);
    console.log(data.slice(0, 100));
  } catch (e) {
    console.error(e);
  }
}
test();
