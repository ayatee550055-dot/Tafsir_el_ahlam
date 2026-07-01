async function test() {
  console.log("Fetching related...");
  try {
    const res = await fetch("http://localhost:3000/api/symbols?category=%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA&limit=5");
    console.log("Status:", res.status);
    const data = await res.text();
    console.log("Data length:", data.length);
  } catch (e) {
    console.error(e);
  }
}
test();
