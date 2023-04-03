function Head() {
  return (
    <React.Fragment>
      <a class="logo" href="https://whatwg.org/">
        <img
          alt="WHATWG"
          crossorigin
          height="100"
          src="https://resources.whatwg.org/logo-webidl.svg"
        />
      </a>
      <hgroup>
        <h1 class="p-name no-ref" id="title">
          Web IDL（Web接口定义语言）
        </h1>
        <p id="subtitle">
          {"在线标准 — 上次更新 — "}
          <time class="dt-updated" datetime="2023-04-02">
            {"2023 年 4 月 2 号"}
          </time>
        </p>
      </hgroup>
      <div data-fill-with="spec-metadata">
        <dl>
          <dt>{"参与："}</dt>
          <dd>
            <a href="https://github.com/whatwg/webidl">GitHub whatwg/webidl </a>
            <a href="https://github.com/whatwg/webidl/issues/new">
              {"(new issue,"}
            </a>{" "}
            <a href="https://github.com/whatwg/webidl/issues">
              {"open issues)"}
            </a>
          </dd>
          <dd>
            <a href="https://whatwg.org/chat">Chat on Matrix</a>
          </dd>
          <dt>Commits:</dt>
          <dd>
            <a href="https://github.com/whatwg/webidl/commits">
              GitHub whatwg/webidl/commits
            </a>
          </dd>
          <dd>
            <a copy href="/commit-snapshots/LOCAL" id="commit-snapshot-link">
              Snapshot as of this commit
            </a>
          </dd>
          <dd>
            <a href="https://twitter.com/webidl">@webidl</a>
          </dd>
          <dt>Tests:</dt>
          <dd>
            <a href="https://github.com/web-platform-tests/wpt/tree/master/webidl">
              web-platform-tests webidl/
            </a>{" "}
            <a href="https://github.com/web-platform-tests/wpt/labels/webidl">
              {"(ongoing work)"}
            </a>
          </dd>
          <dt>
            Translations <small>(non-normative)</small>:
          </dt>
          <dd>
            <span title="Japanese">
              <a
                href="https://triple-underscore.github.io/WebIDL-ja.html"
                hreflang="ja"
                lang="ja"
                rel="alternate"
              >
                日本語
              </a>
            </span>
          </dd>
        </dl>
      </div>
      <div data-fill-with="warning"></div>
    </React.Fragment>
  );
}

ReactDOM.render(<Head />, document.querySelector(".head"));
