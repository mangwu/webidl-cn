const { Tooltip } = antd;
function Nav() {
  return (
    <React.Fragment>
      <h2 className="no-num no-toc no-ref" id="contents">
        Table of Contents
      </h2>
      <ol className="toc" role="directory">
        <Chapter1Index />
        <Chapter2Index />
        <Chapter3Index />
        <Chapter45678Index />
        <RestIndex />
      </ol>
    </React.Fragment>
  );
}

function Chapter1Index() {
  return (
    <li>
      <a href="#introduction">
        <span className="secno">1 </span>
        <span className="content">概述</span>
      </a>
    </li>
  );
}

function Chapter2Index() {
  return (
    <li>
      <a href="#idl">
        <span className="secno">2 </span>
        <Tooltip
          title="Interface definition language"
          color="#2db7f5"
          placement="right"
        >
          <span className="content">接口定义语言</span>
        </Tooltip>
      </a>
      <ol className="toc">
        <li>
          <a href="#idl-names">
            <span className="secno">2.1 </span>
            <Tooltip title="Names" color="#2db7f5" placement="right">
              <span className="content">命名</span>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="#idl-interfaces">
            <span className="secno">2.2 </span>
            <Tooltip title="Interfaces" color="#2db7f5" placement="right">
              <span className="content">接口</span>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="#idl-interface-mixins">
            <span className="secno">2.3</span>{" "}
            <Tooltip title="Interface mixins" color="#2db7f5" placement="right">
              <span className="content">组合接口</span>
            </Tooltip>
          </a>
          <ol className="toc">
            <li>
              <a href="#using-mixins-and-partials">
                <span className="secno">2.3.1</span>{" "}
                <Tooltip
                  title="Using mixins and partials"
                  color="#2db7f5"
                  placement="right"
                >
                  <span className="content">使用组合接口和局部接口</span>
                </Tooltip>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#idl-callback-interfaces">
            <span className="secno">2.4</span>{" "}
            <Tooltip
              title="Callback interfaces"
              color="#2db7f5"
              placement="right"
            >
              <span className="content">回调接口</span>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href="#idl-members">
            <span className="secno">2.5</span>{" "}
            <Tooltip title="Members" color="#2db7f5" placement="right">
              <span className="content">成员</span>
            </Tooltip>
          </a>
          <ol className="toc">
            <li>
              <a href="#idl-constants">
                <span className="secno">2.5.1</span>{" "}
                <Tooltip title="Constants" color="#2db7f5" placement="right">
                  <span className="content">常量</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a href="#idl-attributes">
                <span className="secno">2.5.2</span>{" "}
                <Tooltip title="Attributes" color="#2db7f5" placement="right">
                  <span className="content">属性</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a href="#idl-operations">
                <span className="secno">2.5.3</span>{" "}
                <Tooltip title="Operations" color="#2db7f5" placement="right">
                  <span className="content">操作</span>
                </Tooltip>
              </a>
              <ol className="toc">
                <li>
                  <a href="#idl-tojson-operation">
                    <span className="secno">2.5.3.1</span>{" "}
                    <span className="content">toJSON</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#idl-constructors">
                <span className="secno">2.5.4</span>{" "}
                <span className="content">Constructor operations</span>
              </a>
            </li>
            <li>
              <a href="#idl-stringifiers">
                <span className="secno">2.5.5</span>{" "}
                <span className="content">Stringifiers</span>
              </a>
            </li>
            <li>
              <a href="#idl-special-operations">
                <span className="secno">2.5.6</span>{" "}
                <span className="content">Special operations</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#idl-indexed-properties">
                    <span className="secno">2.5.6.1</span>{" "}
                    <span className="content">Indexed properties</span>
                  </a>
                </li>
                <li>
                  <a href="#idl-named-properties">
                    <span className="secno">2.5.6.2</span>{" "}
                    <span className="content">Named properties</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#idl-static-attributes-and-operations">
                <span className="secno">2.5.7</span>{" "}
                <span className="content">
                  Static attributes and operations
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-overloading">
                <span className="secno">2.5.8</span>{" "}
                <span className="content">Overloading</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#idl-overloading-vs-union">
                    <span className="secno">2.5.8.1</span>{" "}
                    <span className="content">Overloading vs. union types</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#idl-iterable">
                <span className="secno">2.5.9</span>{" "}
                <span className="content">Iterable declarations</span>
              </a>
            </li>
            <li>
              <a href="#idl-async-iterable">
                <span className="secno">2.5.10</span>{" "}
                <span className="content">
                  Asynchronously iterable declarations
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-maplike">
                <span className="secno">2.5.11</span>{" "}
                <span className="content">Maplike declarations</span>
              </a>
            </li>
            <li>
              <a href="#idl-setlike">
                <span className="secno">2.5.12</span>{" "}
                <span className="content">Setlike declarations</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#idl-namespaces">
            <span className="secno">2.6</span>{" "}
            <span className="content">Namespaces</span>
          </a>
        </li>
        <li>
          <a href="#idl-dictionaries">
            <span className="secno">2.7</span>{" "}
            <span className="content">Dictionaries</span>
          </a>
        </li>
        <li>
          <a href="#idl-exceptions">
            <span className="secno">2.8</span>{" "}
            <span className="content">Exceptions</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#idl-DOMException-error-names">
                <span className="secno">2.8.1</span>{" "}
                <span className="content">Error names</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#idl-enums">
            <span className="secno">2.9</span>{" "}
            <span className="content">Enumerations</span>
          </a>
        </li>
        <li>
          <a href="#idl-callback-functions">
            <span className="secno">2.10</span>{" "}
            <span className="content">Callback functions</span>
          </a>
        </li>
        <li>
          <a href="#idl-typedefs">
            <span className="secno">2.11</span>{" "}
            <span className="content">Typedefs</span>
          </a>
        </li>
        <li>
          <a href="#idl-objects">
            <span className="secno">2.12</span>{" "}
            <span className="content">Objects implementing interfaces</span>
          </a>
        </li>
        <li>
          <a href="#idl-types">
            <span className="secno">2.13</span>{" "}
            <span className="content">Types</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#idl-any">
                <span className="secno">2.13.1</span>{" "}
                <span className="content">any</span>
              </a>
            </li>
            <li>
              <a href="#idl-undefined">
                <span className="secno">2.13.2</span>{" "}
                <span className="content">undefined</span>
              </a>
            </li>
            <li>
              <a href="#idl-boolean">
                <span className="secno">2.13.3</span>{" "}
                <span className="content">boolean</span>
              </a>
            </li>
            <li>
              <a href="#idl-byte">
                <span className="secno">2.13.4</span>{" "}
                <span className="content">byte</span>
              </a>
            </li>
            <li>
              <a href="#idl-octet">
                <span className="secno">2.13.5</span>{" "}
                <span className="content">octet</span>
              </a>
            </li>
            <li>
              <a href="#idl-short">
                <span className="secno">2.13.6</span>{" "}
                <span className="content">short</span>
              </a>
            </li>
            <li>
              <a href="#idl-unsigned-short">
                <span className="secno">2.13.7</span>{" "}
                <span className="content">unsigned short</span>
              </a>
            </li>
            <li>
              <a href="#idl-long">
                <span className="secno">2.13.8</span>{" "}
                <span className="content">long</span>
              </a>
            </li>
            <li>
              <a href="#idl-unsigned-long">
                <span className="secno">2.13.9</span>{" "}
                <span className="content">unsigned long</span>
              </a>
            </li>
            <li>
              <a href="#idl-long-long">
                <span className="secno">2.13.10</span>{" "}
                <span className="content">long long</span>
              </a>
            </li>
            <li>
              <a href="#idl-unsigned-long-long">
                <span className="secno">2.13.11</span>{" "}
                <span className="content">unsigned long long</span>
              </a>
            </li>
            <li>
              <a href="#idl-float">
                <span className="secno">2.13.12</span>{" "}
                <span className="content">float</span>
              </a>
            </li>
            <li>
              <a href="#idl-unrestricted-float">
                <span className="secno">2.13.13</span>{" "}
                <span className="content">unrestricted float</span>
              </a>
            </li>
            <li>
              <a href="#idl-double">
                <span className="secno">2.13.14</span>{" "}
                <span className="content">double</span>
              </a>
            </li>
            <li>
              <a href="#idl-unrestricted-double">
                <span className="secno">2.13.15</span>{" "}
                <span className="content">unrestricted double</span>
              </a>
            </li>
            <li>
              <a href="#idl-bigint">
                <span className="secno">2.13.16</span>{" "}
                <span className="content">bigint</span>
              </a>
            </li>
            <li>
              <a href="#idl-DOMString">
                <span className="secno">2.13.17</span>{" "}
                <span className="content">DOMString</span>
              </a>
            </li>
            <li>
              <a href="#idl-ByteString">
                <span className="secno">2.13.18</span>{" "}
                <span className="content">ByteString</span>
              </a>
            </li>
            <li>
              <a href="#idl-USVString">
                <span className="secno">2.13.19</span>{" "}
                <span className="content">USVString</span>
              </a>
            </li>
            <li>
              <a href="#idl-object">
                <span className="secno">2.13.20</span>{" "}
                <span className="content">object</span>
              </a>
            </li>
            <li>
              <a href="#idl-symbol">
                <span className="secno">2.13.21</span>{" "}
                <span className="content">symbol</span>
              </a>
            </li>
            <li>
              <a href="#idl-interface">
                <span className="secno">2.13.22</span>{" "}
                <span className="content">Interface types</span>
              </a>
            </li>
            <li>
              <a href="#idl-callback-interface">
                <span className="secno">2.13.23</span>{" "}
                <span className="content">Callback interface types</span>
              </a>
            </li>
            <li>
              <a href="#idl-dictionary">
                <span className="secno">2.13.24</span>{" "}
                <span className="content">Dictionary types</span>
              </a>
            </li>
            <li>
              <a href="#idl-enumeration">
                <span className="secno">2.13.25</span>{" "}
                <span className="content">Enumeration types</span>
              </a>
            </li>
            <li>
              <a href="#idl-callback-function">
                <span className="secno">2.13.26</span>{" "}
                <span className="content">Callback function types</span>
              </a>
            </li>
            <li>
              <a href="#idl-nullable-type">
                <span className="secno">2.13.27</span>{" "}
                <span className="content">
                  Nullable types — <var>T</var>?
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-sequence">
                <span className="secno">2.13.28</span>{" "}
                <span className="content">
                  Sequence types — sequence&lt;<var>T</var>&gt;
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-record">
                <span className="secno">2.13.29</span>{" "}
                <span className="content">
                  Record types — record&lt;<var>K</var>, <var>V</var>&gt;
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-promise">
                <span className="secno">2.13.30</span>{" "}
                <span className="content">
                  Promise types — Promise&lt;<var>T</var>&gt;
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-union">
                <span className="secno">2.13.31</span>{" "}
                <span className="content">Union types</span>
              </a>
            </li>
            <li>
              <a href="#idl-annotated-types">
                <span className="secno">2.13.32</span>{" "}
                <span className="content">Annotated types</span>
              </a>
            </li>
            <li>
              <a href="#idl-buffer-source-types">
                <span className="secno">2.13.33</span>{" "}
                <span className="content">Buffer source types</span>
              </a>
            </li>
            <li>
              <a href="#idl-frozen-array">
                <span className="secno">2.13.34</span>{" "}
                <span className="content">
                  Frozen array types — FrozenArray&lt;<var>T</var>&gt;
                </span>
              </a>
            </li>
            <li>
              <a href="#idl-observable-array">
                <span className="secno">2.13.35</span>{" "}
                <span className="content">
                  Observable array types — ObservableArray&lt;<var>T</var>&gt;
                </span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#idl-extended-attributes">
            <span className="secno">2.14</span>{" "}
            <span className="content">Extended attributes</span>
          </a>
        </li>
      </ol>
    </li>
  );
}

function Chapter3Index() {
  return (
    <li>
      <a href="#ecmascript-binding">
        <span className="secno">3</span>{" "}
        <span className="content">ECMAScript binding</span>
      </a>
      <ol className="toc">
        <li>
          <a href="#es-environment">
            <span className="secno">3.1</span>{" "}
            <span className="content">ECMAScript environment</span>
          </a>
        </li>
        <li>
          <a href="#es-type-mapping">
            <span className="secno">3.2</span>{" "}
            <span className="content">ECMAScript type mapping</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#es-any">
                <span className="secno">3.2.1</span>{" "}
                <span className="content">any</span>
              </a>
            </li>
            <li>
              <a href="#es-undefined">
                <span className="secno">3.2.2</span>{" "}
                <span className="content">undefined</span>
              </a>
            </li>
            <li>
              <a href="#es-boolean">
                <span className="secno">3.2.3</span>{" "}
                <span className="content">boolean</span>
              </a>
            </li>
            <li>
              <a href="#es-integer-types">
                <span className="secno">3.2.4</span>{" "}
                <span className="content">Integer types</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-byte">
                    <span className="secno">3.2.4.1</span>{" "}
                    <span className="content">byte</span>
                  </a>
                </li>
                <li>
                  <a href="#es-octet">
                    <span className="secno">3.2.4.2</span>{" "}
                    <span className="content">octet</span>
                  </a>
                </li>
                <li>
                  <a href="#es-short">
                    <span className="secno">3.2.4.3</span>{" "}
                    <span className="content">short</span>
                  </a>
                </li>
                <li>
                  <a href="#es-unsigned-short">
                    <span className="secno">3.2.4.4</span>{" "}
                    <span className="content">unsigned short</span>
                  </a>
                </li>
                <li>
                  <a href="#es-long">
                    <span className="secno">3.2.4.5</span>{" "}
                    <span className="content">long</span>
                  </a>
                </li>
                <li>
                  <a href="#es-unsigned-long">
                    <span className="secno">3.2.4.6</span>{" "}
                    <span className="content">unsigned long</span>
                  </a>
                </li>
                <li>
                  <a href="#es-long-long">
                    <span className="secno">3.2.4.7</span>{" "}
                    <span className="content">long long</span>
                  </a>
                </li>
                <li>
                  <a href="#es-unsigned-long-long">
                    <span className="secno">3.2.4.8</span>{" "}
                    <span className="content">unsigned long long</span>
                  </a>
                </li>
                <li>
                  <a href="#es-integer-types-abstract-ops">
                    <span className="secno">3.2.4.9</span>{" "}
                    <span className="content">Abstract operations</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-float">
                <span className="secno">3.2.5</span>{" "}
                <span className="content">float</span>
              </a>
            </li>
            <li>
              <a href="#es-unrestricted-float">
                <span className="secno">3.2.6</span>{" "}
                <span className="content">unrestricted float</span>
              </a>
            </li>
            <li>
              <a href="#es-double">
                <span className="secno">3.2.7</span>{" "}
                <span className="content">double</span>
              </a>
            </li>
            <li>
              <a href="#es-unrestricted-double">
                <span className="secno">3.2.8</span>{" "}
                <span className="content">unrestricted double</span>
              </a>
            </li>
            <li>
              <a href="#es-bigint">
                <span className="secno">3.2.9</span>{" "}
                <span className="content">bigint</span>
              </a>
            </li>
            <li>
              <a href="#es-DOMString">
                <span className="secno">3.2.10</span>{" "}
                <span className="content">DOMString</span>
              </a>
            </li>
            <li>
              <a href="#es-ByteString">
                <span className="secno">3.2.11</span>{" "}
                <span className="content">ByteString</span>
              </a>
            </li>
            <li>
              <a href="#es-USVString">
                <span className="secno">3.2.12</span>{" "}
                <span className="content">USVString</span>
              </a>
            </li>
            <li>
              <a href="#es-object">
                <span className="secno">3.2.13</span>{" "}
                <span className="content">object</span>
              </a>
            </li>
            <li>
              <a href="#es-symbol">
                <span className="secno">3.2.14</span>{" "}
                <span className="content">symbol</span>
              </a>
            </li>
            <li>
              <a href="#es-interface">
                <span className="secno">3.2.15</span>{" "}
                <span className="content">Interface types</span>
              </a>
            </li>
            <li>
              <a href="#es-callback-interface">
                <span className="secno">3.2.16</span>{" "}
                <span className="content">Callback interface types</span>
              </a>
            </li>
            <li>
              <a href="#es-dictionary">
                <span className="secno">3.2.17</span>{" "}
                <span className="content">Dictionary types</span>
              </a>
            </li>
            <li>
              <a href="#es-enumeration">
                <span className="secno">3.2.18</span>{" "}
                <span className="content">Enumeration types</span>
              </a>
            </li>
            <li>
              <a href="#es-callback-function">
                <span className="secno">3.2.19</span>{" "}
                <span className="content">Callback function types</span>
              </a>
            </li>
            <li>
              <a href="#es-nullable-type">
                <span className="secno">3.2.20</span>{" "}
                <span className="content">
                  Nullable types — <var>T</var>?
                </span>
              </a>
            </li>
            <li>
              <a href="#es-sequence">
                <span className="secno">3.2.21</span>{" "}
                <span className="content">
                  Sequences — sequence&lt;<var>T</var>&gt;
                </span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#create-sequence-from-iterable">
                    <span className="secno">3.2.21.1</span>{" "}
                    <span className="content">
                      Creating a sequence from an iterable
                    </span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-record">
                <span className="secno">3.2.22</span>{" "}
                <span className="content">
                  Records — record&lt;<var>K</var>, <var>V</var>&gt;
                </span>
              </a>
            </li>
            <li>
              <a href="#es-promise">
                <span className="secno">3.2.23</span>{" "}
                <span className="content">
                  Promise types — Promise&lt;<var>T</var>&gt;
                </span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-promise-manipulation">
                    <span className="secno">3.2.23.1</span>{" "}
                    <span className="content">
                      Creating and manipulating Promises
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#es-promise-examples">
                    <span className="secno">3.2.23.2</span>{" "}
                    <span className="content">Examples</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-union">
                <span className="secno">3.2.24</span>{" "}
                <span className="content">Union types</span>
              </a>
            </li>
            <li>
              <a href="#es-buffer-source-types">
                <span className="secno">3.2.25</span>{" "}
                <span className="content">Buffer source types</span>
              </a>
            </li>
            <li>
              <a href="#es-frozen-array">
                <span className="secno">3.2.26</span>{" "}
                <span className="content">
                  Frozen arrays — FrozenArray&lt;<var>T</var>&gt;
                </span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#create-frozen-array-from-iterable">
                    <span className="secno">3.2.26.1</span>{" "}
                    <span className="content">
                      Creating a frozen array from an iterable
                    </span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-observable-array">
                <span className="secno">3.2.27</span>{" "}
                <span className="content">
                  Observable arrays — ObservableArray&lt;<var>T</var>&gt;
                </span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-extended-attributes">
            <span className="secno">3.3</span>{" "}
            <span className="content">Extended attributes</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#AllowResizable">
                <span className="secno">3.3.1</span>{" "}
                <span className="content">[AllowResizable]</span>
              </a>
            </li>
            <li>
              <a href="#AllowShared">
                <span className="secno">3.3.2</span>{" "}
                <span className="content">[AllowShared]</span>
              </a>
            </li>
            <li>
              <a href="#Clamp">
                <span className="secno">3.3.3</span>{" "}
                <span className="content">[Clamp]</span>
              </a>
            </li>
            <li>
              <a href="#CrossOriginIsolated">
                <span className="secno">3.3.4</span>{" "}
                <span className="content">[CrossOriginIsolated]</span>
              </a>
            </li>
            <li>
              <a href="#Default">
                <span className="secno">3.3.5</span>{" "}
                <span className="content">[Default]</span>
              </a>
            </li>
            <li>
              <a href="#EnforceRange">
                <span className="secno">3.3.6</span>{" "}
                <span className="content">[EnforceRange]</span>
              </a>
            </li>
            <li>
              <a href="#Exposed">
                <span className="secno">3.3.7</span>{" "}
                <span className="content">[Exposed]</span>
              </a>
            </li>
            <li>
              <a href="#Global">
                <span className="secno">3.3.8</span>{" "}
                <span className="content">[Global]</span>
              </a>
            </li>
            <li>
              <a href="#NewObject">
                <span className="secno">3.3.9</span>{" "}
                <span className="content">[NewObject]</span>
              </a>
            </li>
            <li>
              <a href="#PutForwards">
                <span className="secno">3.3.10</span>{" "}
                <span className="content">[PutForwards]</span>
              </a>
            </li>
            <li>
              <a href="#Replaceable">
                <span className="secno">3.3.11</span>{" "}
                <span className="content">[Replaceable]</span>
              </a>
            </li>
            <li>
              <a href="#SameObject">
                <span className="secno">3.3.12</span>{" "}
                <span className="content">[SameObject]</span>
              </a>
            </li>
            <li>
              <a href="#SecureContext">
                <span className="secno">3.3.13</span>{" "}
                <span className="content">[SecureContext]</span>
              </a>
            </li>
            <li>
              <a href="#Unscopable">
                <span className="secno">3.3.14</span>{" "}
                <span className="content">[Unscopable]</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-legacy-extended-attributes">
            <span className="secno">3.4</span>{" "}
            <span className="content">Legacy extended attributes</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#LegacyFactoryFunction">
                <span className="secno">3.4.1</span>{" "}
                <span className="content">[LegacyFactoryFunction]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyLenientSetter">
                <span className="secno">3.4.2</span>{" "}
                <span className="content">[LegacyLenientSetter]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyLenientThis">
                <span className="secno">3.4.3</span>{" "}
                <span className="content">[LegacyLenientThis]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyNamespace">
                <span className="secno">3.4.4</span>{" "}
                <span className="content">[LegacyNamespace]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyNoInterfaceObject">
                <span className="secno">3.4.5</span>{" "}
                <span className="content">[LegacyNoInterfaceObject]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyNullToEmptyString">
                <span className="secno">3.4.6</span>{" "}
                <span className="content">[LegacyNullToEmptyString]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyOverrideBuiltIns">
                <span className="secno">3.4.7</span>{" "}
                <span className="content">[LegacyOverrideBuiltIns]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyTreatNonObjectAsNull">
                <span className="secno">3.4.8</span>{" "}
                <span className="content">[LegacyTreatNonObjectAsNull]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyUnenumerableNamedProperties">
                <span className="secno">3.4.9</span>{" "}
                <span className="content">
                  [LegacyUnenumerableNamedProperties]
                </span>
              </a>
            </li>
            <li>
              <a href="#LegacyUnforgeable">
                <span className="secno">3.4.10</span>{" "}
                <span className="content">[LegacyUnforgeable]</span>
              </a>
            </li>
            <li>
              <a href="#LegacyWindowAlias">
                <span className="secno">3.4.11</span>{" "}
                <span className="content">[LegacyWindowAlias]</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-security">
            <span className="secno">3.5</span>{" "}
            <span className="content">Security</span>
          </a>
        </li>
        <li>
          <a href="#es-overloads">
            <span className="secno">3.6</span>{" "}
            <span className="content">Overload resolution algorithm</span>
          </a>
        </li>
        <li>
          <a href="#es-interfaces">
            <span className="secno">3.7</span>{" "}
            <span className="content">Interfaces</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#interface-object">
                <span className="secno">3.7.1</span>{" "}
                <span className="content">Interface object</span>
              </a>
            </li>
            <li>
              <a href="#legacy-factory-functions">
                <span className="secno">3.7.2</span>{" "}
                <span className="content">Legacy factory functions</span>
              </a>
            </li>
            <li>
              <a href="#interface-prototype-object">
                <span className="secno">3.7.3</span>{" "}
                <span className="content">Interface prototype object</span>
              </a>
            </li>
            <li>
              <a href="#named-properties-object">
                <span className="secno">3.7.4</span>{" "}
                <span className="content">Named properties object</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#named-properties-object-getownproperty">
                    <span className="secno">3.7.4.1</span>{" "}
                    <span className="content">[[GetOwnProperty]]</span>
                  </a>
                </li>
                <li>
                  <a href="#named-properties-object-defineownproperty">
                    <span className="secno">3.7.4.2</span>{" "}
                    <span className="content">[[DefineOwnProperty]]</span>
                  </a>
                </li>
                <li>
                  <a href="#named-properties-object-delete">
                    <span className="secno">3.7.4.3</span>{" "}
                    <span className="content">[[Delete]]</span>
                  </a>
                </li>
                <li>
                  <a href="#named-properties-object-setprototypeof">
                    <span className="secno">3.7.4.4</span>{" "}
                    <span className="content">[[SetPrototypeOf]]</span>
                  </a>
                </li>
                <li>
                  <a href="#named-properties-object-preventextensions">
                    <span className="secno">3.7.4.5</span>{" "}
                    <span className="content">[[PreventExtensions]]</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-constants">
                <span className="secno">3.7.5</span>{" "}
                <span className="content">Constants</span>
              </a>
            </li>
            <li>
              <a href="#es-attributes">
                <span className="secno">3.7.6</span>{" "}
                <span className="content">Attributes</span>
              </a>
            </li>
            <li>
              <a href="#es-operations">
                <span className="secno">3.7.7</span>{" "}
                <span className="content">Operations</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-default-operations">
                    <span className="secno">3.7.7.1</span>{" "}
                    <span className="content">Default operations</span>
                  </a>
                  <ol className="toc">
                    <li>
                      <a href="#es-default-tojson">
                        <span className="secno">3.7.7.1.1</span>{" "}
                        <span className="content">
                          Default toJSON operation
                        </span>
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-stringifier">
                <span className="secno">3.7.8</span>{" "}
                <span className="content">Stringifiers</span>
              </a>
            </li>
            <li>
              <a href="#es-iterable">
                <span className="secno">3.7.9</span>{" "}
                <span className="content">Iterable declarations</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-default-iterator-object">
                    <span className="secno">3.7.9.1</span>{" "}
                    <span className="content">Default iterator objects</span>
                  </a>
                </li>
                <li>
                  <a href="#es-iterator-prototype-object">
                    <span className="secno">3.7.9.2</span>{" "}
                    <span className="content">Iterator prototype object</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-asynchronous-iterable">
                <span className="secno">3.7.10</span>{" "}
                <span className="content">
                  Asynchronous iterable declarations
                </span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-default-asynchronous-iterator-object">
                    <span className="secno">3.7.10.1</span>{" "}
                    <span className="content">
                      Default asynchronous iterator objects
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#es-asynchronous-iterator-prototype-object">
                    <span className="secno">3.7.10.2</span>{" "}
                    <span className="content">
                      Asynchronous iterator prototype object
                    </span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-maplike">
                <span className="secno">3.7.11</span>{" "}
                <span className="content">Maplike declarations</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-map-size">
                    <span className="secno">3.7.11.1</span>{" "}
                    <span className="content">size</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-iterator">
                    <span className="secno">3.7.11.2</span>{" "}
                    <span className="content">{"@@iterator"}</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-entries">
                    <span className="secno">3.7.11.3</span>{" "}
                    <span className="content">entries</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-keys">
                    <span className="secno">3.7.11.4</span>{" "}
                    <span className="content">keys</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-values">
                    <span className="secno">3.7.11.5</span>{" "}
                    <span className="content">values</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-forEach">
                    <span className="secno">3.7.11.6</span>{" "}
                    <span className="content">forEach</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-get">
                    <span className="secno">3.7.11.7</span>{" "}
                    <span className="content">get</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-has">
                    <span className="secno">3.7.11.8</span>{" "}
                    <span className="content">has</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-set">
                    <span className="secno">3.7.11.9</span>{" "}
                    <span className="content">set</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-delete">
                    <span className="secno">3.7.11.10</span>{" "}
                    <span className="content">delete</span>
                  </a>
                </li>
                <li>
                  <a href="#es-map-clear">
                    <span className="secno">3.7.11.11</span>{" "}
                    <span className="content">clear</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#es-setlike">
                <span className="secno">3.7.12</span>{" "}
                <span className="content">Setlike declarations</span>
              </a>
              <ol className="toc">
                <li>
                  <a href="#es-set-size">
                    <span className="secno">3.7.12.1</span>{" "}
                    <span className="content">size</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-iterator">
                    <span className="secno">3.7.12.2</span>{" "}
                    <span className="content">{"@@iterator"}</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-entries">
                    <span className="secno">3.7.12.3</span>{" "}
                    <span className="content">entries</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-keys">
                    <span className="secno">3.7.12.4</span>{" "}
                    <span className="content">keys</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-values">
                    <span className="secno">3.7.12.5</span>{" "}
                    <span className="content">values</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-forEach">
                    <span className="secno">3.7.12.6</span>{" "}
                    <span className="content">forEach</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-has">
                    <span className="secno">3.7.12.7</span>{" "}
                    <span className="content">has</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-add">
                    <span className="secno">3.7.12.8</span>{" "}
                    <span className="content">add</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-delete">
                    <span className="secno">3.7.12.9</span>{" "}
                    <span className="content">delete</span>
                  </a>
                </li>
                <li>
                  <a href="#es-set-clear">
                    <span className="secno">3.7.12.10</span>{" "}
                    <span className="content">clear</span>
                  </a>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-platform-objects">
            <span className="secno">3.8</span>{" "}
            <span className="content">
              Platform objects implementing interfaces
            </span>
          </a>
          <ol className="toc">
            <li>
              <a href="#platform-object-setprototypeof">
                <span className="secno">3.8.1</span>{" "}
                <span className="content">[[SetPrototypeOf]]</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-legacy-platform-objects">
            <span className="secno">3.9</span>{" "}
            <span className="content">Legacy platform objects</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#legacy-platform-object-getownproperty">
                <span className="secno">3.9.1</span>{" "}
                <span className="content">[[GetOwnProperty]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-set">
                <span className="secno">3.9.2</span>{" "}
                <span className="content">[[Set]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-defineownproperty">
                <span className="secno">3.9.3</span>{" "}
                <span className="content">[[DefineOwnProperty]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-delete">
                <span className="secno">3.9.4</span>{" "}
                <span className="content">[[Delete]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-preventextensions">
                <span className="secno">3.9.5</span>{" "}
                <span className="content">[[PreventExtensions]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-ownpropertykeys">
                <span className="secno">3.9.6</span>{" "}
                <span className="content">[[OwnPropertyKeys]]</span>
              </a>
            </li>
            <li>
              <a href="#legacy-platform-object-abstract-ops">
                <span className="secno">3.9.7</span>{" "}
                <span className="content">Abstract operations</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-observable-arrays">
            <span className="secno">3.10</span>{" "}
            <span className="content">Observable array exotic objects</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#es-observable-array-defineProperty">
                <span className="secno">3.10.1</span>{" "}
                <span className="content">
                  <code>defineProperty</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-deleteProperty">
                <span className="secno">3.10.2</span>{" "}
                <span className="content">
                  <code>deleteProperty</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-get">
                <span className="secno">3.10.3</span>{" "}
                <span className="content">
                  <code>get</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-getOwnPropertyDescriptor">
                <span className="secno">3.10.4</span>{" "}
                <span className="content">
                  <code>getOwnPropertyDescriptor</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-has">
                <span className="secno">3.10.5</span>{" "}
                <span className="content">
                  <code>has</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-ownKeys">
                <span className="secno">3.10.6</span>{" "}
                <span className="content">
                  <code>ownKeys</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-preventExtensions">
                <span className="secno">3.10.7</span>{" "}
                <span className="content">
                  <code>preventExtensions</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-set">
                <span className="secno">3.10.8</span>{" "}
                <span className="content">
                  <code>set</code>
                </span>
              </a>
            </li>
            <li>
              <a href="#es-observable-array-abstract-operations">
                <span className="secno">3.10.9</span>{" "}
                <span className="content">Abstract operations</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-user-objects">
            <span className="secno">3.11</span>{" "}
            <span className="content">Callback interfaces</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#legacy-callback-interface-object">
                <span className="secno">3.11.1</span>{" "}
                <span className="content">
                  Legacy callback interface object
                </span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-invoking-callback-functions">
            <span className="secno">3.12</span>{" "}
            <span className="content">Invoking callback functions</span>
          </a>
        </li>
        <li>
          <a href="#es-namespaces">
            <span className="secno">3.13</span>{" "}
            <span className="content">Namespaces</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#namespace-object">
                <span className="secno">3.13.1</span>{" "}
                <span className="content">Namespace object</span>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#es-exceptions">
            <span className="secno">3.14</span>{" "}
            <span className="content">Exceptions</span>
          </a>
          <ol className="toc">
            <li>
              <a href="#es-DOMException-specialness">
                <span className="secno">3.14.1</span>{" "}
                <span className="content">
                  <code className="idl">
                    <span>DOMException</span>
                  </code>{" "}
                  custom bindings
                </span>
              </a>
            </li>
            <li>
              <a href="#es-exception-objects">
                <span className="secno">3.14.2</span>{" "}
                <span className="content">Exception objects</span>
              </a>
            </li>
            <li>
              <a href="#es-creating-throwing-exceptions">
                <span className="secno">3.14.3</span>{" "}
                <span className="content">
                  Creating and throwing exceptions
                </span>
              </a>
            </li>
            <li>
              <a href="#es-handling-exceptions">
                <span className="secno">3.14.4</span>{" "}
                <span className="content">Handling exceptions</span>
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  );
}

function Chapter45678Index() {
  return (
    <React.Fragment>
      <li>
        <a href="#common">
          <span className="secno">4</span>{" "}
          <span className="content">Common definitions</span>
        </a>
        <ol className="toc">
          <li>
            <a href="#ArrayBufferView">
              <span className="secno">4.1</span>{" "}
              <span className="content">ArrayBufferView</span>
            </a>
          </li>
          <li>
            <a href="#BufferSource">
              <span className="secno">4.2</span>{" "}
              <span className="content">BufferSource</span>
            </a>
          </li>
          <li>
            <a href="#idl-DOMException">
              <span className="secno">4.3</span>{" "}
              <span className="content">DOMException</span>
            </a>
          </li>
          <li>
            <a href="#Function">
              <span className="secno">4.4</span>{" "}
              <span className="content">Function</span>
            </a>
          </li>
          <li>
            <a href="#VoidFunction">
              <span className="secno">4.5</span>{" "}
              <span className="content">VoidFunction</span>
            </a>
          </li>
        </ol>
      </li>
      <li>
        <a href="#extensibility">
          <span className="secno">5</span>{" "}
          <span className="content">Extensibility</span>
        </a>
      </li>
      <li>
        <a href="#legacy-constructs">
          <span className="secno">6</span>{" "}
          <span className="content">Legacy constructs</span>
        </a>
      </li>
      <li>
        <a href="#referencing">
          <span className="secno">7</span>{" "}
          <span className="content">Referencing this specification</span>
        </a>
      </li>
      <li>
        <a href="#priv-sec">
          <span className="secno">8</span>{" "}
          <span className="content">Privacy and Security Considerations</span>
        </a>
      </li>
    </React.Fragment>
  );
}

function RestIndex() {
  return (
    <React.Fragment>
      <li>
        <a href="#acknowledgements">
          <span className="secno"></span>{" "}
          <span className="content">Acknowledgments</span>
        </a>
      </li>
      <li>
        <a href="#idl-grammar">
          <span className="secno"></span>{" "}
          <span className="content">IDL grammar</span>
        </a>
      </li>
      <li>
        <a href="#conventions">
          <span className="secno"></span>{" "}
          <span className="content">Document conventions</span>
        </a>
      </li>
      <li>
        <a href="#conformance">
          <span className="secno"></span>{" "}
          <span className="content">Conformance</span>
        </a>
      </li>
      <li>
        <a href="#ipr">
          <span className="secno"></span>{" "}
          <span className="content">Intellectual property rights</span>
        </a>
      </li>
      <li>
        <a href="#index">
          <span className="secno"></span> <span className="content">Index</span>
        </a>
        <ol className="toc">
          <li>
            <a href="#index-defined-here">
              <span className="secno"></span>{" "}
              <span className="content">
                Terms defined by this specification
              </span>
            </a>
          </li>
          <li>
            <a href="#index-defined-elsewhere">
              <span className="secno"></span>{" "}
              <span className="content">Terms defined by reference</span>
            </a>
          </li>
        </ol>
      </li>
      <li>
        <a href="#references">
          <span className="secno"></span>{" "}
          <span className="content">References</span>
        </a>
        <ol className="toc">
          <li>
            <a href="#normative">
              <span className="secno"></span>{" "}
              <span className="content">Normative References</span>
            </a>
          </li>
          <li>
            <a href="#informative">
              <span className="secno"></span>{" "}
              <span className="content">Informative References</span>
            </a>
          </li>
        </ol>
      </li>
      <li>
        <a href="#idl-index">
          <span className="secno"></span>{" "}
          <span className="content">IDL Index</span>
        </a>
      </li>
    </React.Fragment>
  );
}

ReactDOM.render(<Nav />, document.querySelector("#toc"));
