function Abstract() {
  return (
    <React.Fragment>
      <h2 className="no-num no-toc no-ref heading settled" id="abstract">
        <span className="content">摘要</span>
      </h2>
      <p>
        该标准定义了一种接口定义语言（interface definition laguage），Web
        IDL，该语言用于描述打算在Web浏览器中实现的接口。
      </p>
    </React.Fragment>
  );
}
ReactDOM.render(<Abstract />, document.querySelector(".p-summary"));
