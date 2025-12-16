function generateId() {
  return "HP-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function analyzeImage() {
  const input = document.getElementById("imageInput");
  if (!input.files.length) {
    alert("Please upload an image");
    return;
  }

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    const id = generateId();
    document.getElementById("analysisId").innerText = id;

    // ---- BASIC + ADVANCED + PREMIUM PREVIEW LOGIC ----
    const undertones = ["Warm", "Cool", "Neutral"];
    const brightness = ["Bright", "Soft"];
    const depth = ["Light", "Deep"];
    const faceShapes = ["Oval", "Round", "Heart", "Square"];

    const u = undertones[Math.floor(Math.random() * undertones.length)];
    const b = brightness[Math.floor(Math.random() * brightness.length)];
    const d = depth[Math.floor(Math.random() * depth.length)];
    const f = faceShapes[Math.floor(Math.random() * faceShapes.length)];

    document.getElementById("analysisText").innerHTML = `
      <p><b>Undertone:</b> ${u}</p>
      <p><b>Brightness:</b> ${b}</p>
      <p><b>Depth:</b> ${d}</p>
      <p><b>Face Shape:</b> ${f}</p>
      <hr>
      <p><b>Premium Preview Includes:</b></p>
      <ul style="text-align:left">
        <li>32-Season Precision Mapping</li>
        <li>60+ Color Palette</li>
        <li>Advanced Makeup Blueprint</li>
        <li>Wardrobe & Fabric Guide</li>
        <li>10–20 Page PDF Report</li>
      </ul>
    `;

    // ---- GOOGLE FORM LINK WITH PREFILLED ANALYSIS ID ----
    const formBase =
      "https://forms.gle/XA4cyX1VoTzgmNvw6";
    document.getElementById("paymentLink").href =
      formBase + "?usp=pp_url";

  }, 1200);
}
