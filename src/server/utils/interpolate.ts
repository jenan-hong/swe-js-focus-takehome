import { context } from "../../client/App/hydration";

function interpolate(markup: string, slug: string, store: any): string {
  return `
    <html>
      <head>
        <link
          rel="shortcut icon"
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/apple-icon-precomposed.png"
          type="image/x-icon"
        />
        <title>${slug}</title>
      </head>
      <body>
        <div id="root">${markup}</div>
        <div style="display: none;" id="context">${context.chunk(store)}</div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `;
}

export { interpolate };