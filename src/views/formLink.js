const formLink = `
  <form action="/findtermslink" method="post">
    <label for="url">Enter URL:</label>
    <input type="text" id="url" name="url" required>
    <button type="submit">Find Link</button>
  </form>
`;

module.exports = formLink;