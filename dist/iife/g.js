"use strict";
var g = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/@xmldom/xmldom/lib/conventions.js
  var require_conventions = __commonJS({
    "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
      "use strict";
      function find(list, predicate, ac) {
        if (ac === void 0) {
          ac = Array.prototype;
        }
        if (list && typeof ac.find === "function") {
          return ac.find.call(list, predicate);
        }
        for (var i = 0; i < list.length; i++) {
          if (Object.prototype.hasOwnProperty.call(list, i)) {
            var item = list[i];
            if (predicate.call(void 0, item, i, list)) {
              return item;
            }
          }
        }
      }
      function freeze(object, oc) {
        if (oc === void 0) {
          oc = Object;
        }
        return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
      }
      function assign(target, source) {
        if (target === null || typeof target !== "object") {
          throw new TypeError("target is not an object");
        }
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var MIME_TYPE = freeze({
        /**
         * `text/html`, the only mime type that triggers treating an XML document as HTML.
         *
         * @see DOMParser.SupportedType.isHTML
         * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/HTML Wikipedia
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
         * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
         */
        HTML: "text/html",
        /**
         * Helper method to check a mime type if it indicates an HTML document
         *
         * @param {string} [value]
         * @returns {boolean}
         *
         * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/HTML Wikipedia
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
         * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
        isHTML: function(value) {
          return value === MIME_TYPE.HTML;
        },
        /**
         * `application/xml`, the standard mime type for XML documents.
         *
         * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
         * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_APPLICATION: "application/xml",
        /**
         * `text/html`, an alias for `application/xml`.
         *
         * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
         * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_TEXT: "text/xml",
        /**
         * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
         * but is parsed as an XML document.
         *
         * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
         * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
         */
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        /**
         * `image/svg+xml`,
         *
         * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
         * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
         * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
         */
        XML_SVG_IMAGE: "image/svg+xml"
      });
      var NAMESPACE = freeze({
        /**
         * The XHTML namespace.
         *
         * @see http://www.w3.org/1999/xhtml
         */
        HTML: "http://www.w3.org/1999/xhtml",
        /**
         * Checks if `uri` equals `NAMESPACE.HTML`.
         *
         * @param {string} [uri]
         *
         * @see NAMESPACE.HTML
         */
        isHTML: function(uri) {
          return uri === NAMESPACE.HTML;
        },
        /**
         * The SVG namespace.
         *
         * @see http://www.w3.org/2000/svg
         */
        SVG: "http://www.w3.org/2000/svg",
        /**
         * The `xml:` namespace.
         *
         * @see http://www.w3.org/XML/1998/namespace
         */
        XML: "http://www.w3.org/XML/1998/namespace",
        /**
         * The `xmlns:` namespace
         *
         * @see https://www.w3.org/2000/xmlns/
         */
        XMLNS: "http://www.w3.org/2000/xmlns/"
      });
      exports.assign = assign;
      exports.find = find;
      exports.freeze = freeze;
      exports.MIME_TYPE = MIME_TYPE;
      exports.NAMESPACE = NAMESPACE;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom.js
  var require_dom = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
      var conventions = require_conventions();
      var find = conventions.find;
      var NAMESPACE = conventions.NAMESPACE;
      function notEmptyString(input) {
        return input !== "";
      }
      function splitOnASCIIWhitespace(input) {
        return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
      }
      function orderedSetReducer(current, element) {
        if (!current.hasOwnProperty(element)) {
          current[element] = true;
        }
        return current;
      }
      function toOrderedSet(input) {
        if (!input)
          return [];
        var list = splitOnASCIIWhitespace(input);
        return Object.keys(list.reduce(orderedSetReducer, {}));
      }
      function arrayIncludes(list) {
        return function(element) {
          return list && list.indexOf(element) !== -1;
        };
      }
      function copy3(src, dest) {
        for (var p in src) {
          if (Object.prototype.hasOwnProperty.call(src, p)) {
            dest[p] = src[p];
          }
        }
      }
      function _extends(Class, Super) {
        var pt = Class.prototype;
        if (!(pt instanceof Super)) {
          let t2 = function() {
          };
          var t = t2;
          ;
          t2.prototype = Super.prototype;
          t2 = new t2();
          copy3(pt, t2);
          Class.prototype = pt = t2;
        }
        if (pt.constructor != Class) {
          if (typeof Class != "function") {
            console.error("unknown Class:" + Class);
          }
          pt.constructor = Class;
        }
      }
      var NodeType = {};
      var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
      var TEXT_NODE = NodeType.TEXT_NODE = 3;
      var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
      var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
      var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
      var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
      var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
      var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
      var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
      var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
      var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
      var ExceptionCode = {};
      var ExceptionMessage = {};
      var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
      var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
      var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
      var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
      var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
      var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
      var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
      var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
      var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
      var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
      var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
      var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
      var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
      var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
      var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
      function DOMException(code, message) {
        if (message instanceof Error) {
          var error = message;
        } else {
          error = this;
          Error.call(this, ExceptionMessage[code]);
          this.message = ExceptionMessage[code];
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, DOMException);
        }
        error.code = code;
        if (message)
          this.message = this.message + ": " + message;
        return error;
      }
      DOMException.prototype = Error.prototype;
      copy3(ExceptionCode, DOMException);
      function NodeList() {
      }
      NodeList.prototype = {
        /**
         * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
         * @standard level1
         */
        length: 0,
        /**
         * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
         * @standard level1
         * @param index  unsigned long
         *   Index into the collection.
         * @return Node
         * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
         */
        item: function(index2) {
          return this[index2] || null;
        },
        toString: function(isHTML, nodeFilter) {
          for (var buf = [], i = 0; i < this.length; i++) {
            serializeToString(this[i], buf, isHTML, nodeFilter);
          }
          return buf.join("");
        },
        /**
         * @private
         * @param {function (Node):boolean} predicate
         * @returns {Node[]}
         */
        filter: function(predicate) {
          return Array.prototype.filter.call(this, predicate);
        },
        /**
         * @private
         * @param {Node} item
         * @returns {number}
         */
        indexOf: function(item) {
          return Array.prototype.indexOf.call(this, item);
        }
      };
      function LiveNodeList(node, refresh) {
        this._node = node;
        this._refresh = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc = list._node._inc || list._node.ownerDocument._inc;
        if (list._inc != inc) {
          var ls = list._refresh(list._node);
          __set__(list, "length", ls.length);
          copy3(ls, list);
          list._inc = inc;
        }
      }
      LiveNodeList.prototype.item = function(i) {
        _updateLiveList(this);
        return this[i];
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {
      }
      function _findNodeIndex(list, node) {
        var i = list.length;
        while (i--) {
          if (list[i] === node) {
            return i;
          }
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list.length++] = newAttr;
        }
        if (el) {
          newAttr.ownerElement = el;
          var doc = el.ownerDocument;
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list.length - 1;
          while (i < lastIndex) {
            list[i] = list[++i];
          }
          list.length = lastIndex;
          if (el) {
            var doc = el.ownerDocument;
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
              attr.ownerElement = null;
            }
          }
        } else {
          throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
        }
      }
      NamedNodeMap.prototype = {
        length: 0,
        item: NodeList.prototype.item,
        getNamedItem: function(key) {
          var i = this.length;
          while (i--) {
            var attr = this[i];
            if (attr.nodeName == key) {
              return attr;
            }
          }
        },
        setNamedItem: function(attr) {
          var el = attr.ownerElement;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this.getNamedItem(attr.nodeName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        /* returns Node */
        setNamedItemNS: function(attr) {
          var el = attr.ownerElement, oldAttr;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        /* returns Node */
        removeNamedItem: function(key) {
          var attr = this.getNamedItem(key);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
        //for level2
        removeNamedItemNS: function(namespaceURI, localName) {
          var attr = this.getNamedItemNS(namespaceURI, localName);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        getNamedItemNS: function(namespaceURI, localName) {
          var i = this.length;
          while (i--) {
            var node = this[i];
            if (node.localName == localName && node.namespaceURI == namespaceURI) {
              return node;
            }
          }
          return null;
        }
      };
      function DOMImplementation() {
      }
      DOMImplementation.prototype = {
        /**
         * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
         * The different implementations fairly diverged in what kind of features were reported.
         * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
         *
         * @deprecated It is deprecated and modern browsers return true in all cases.
         *
         * @param {string} feature
         * @param {string} [version]
         * @returns {boolean} always true
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
         * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
         */
        hasFeature: function(feature, version) {
          return true;
        },
        /**
         * Creates an XML Document object of the specified type with its document element.
         *
         * __It behaves slightly different from the description in the living standard__:
         * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
         * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
         * - this implementation is not validating names or qualified names
         *   (when parsing XML strings, the SAX parser takes care of that)
         *
         * @param {string|null} namespaceURI
         * @param {string} qualifiedName
         * @param {DocumentType=null} doctype
         * @returns {Document}
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
         *
         * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
         * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
         * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
         */
        createDocument: function(namespaceURI, qualifiedName, doctype) {
          var doc = new Document();
          doc.implementation = this;
          doc.childNodes = new NodeList();
          doc.doctype = doctype || null;
          if (doctype) {
            doc.appendChild(doctype);
          }
          if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
          }
          return doc;
        },
        /**
         * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
         *
         * __This behavior is slightly different from the in the specs__:
         * - this implementation is not validating names or qualified names
         *   (when parsing XML strings, the SAX parser takes care of that)
         *
         * @param {string} qualifiedName
         * @param {string} [publicId]
         * @param {string} [systemId]
         * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
         * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
         *
         * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
         * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
         * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
         */
        createDocumentType: function(qualifiedName, publicId, systemId) {
          var node = new DocumentType();
          node.name = qualifiedName;
          node.nodeName = qualifiedName;
          node.publicId = publicId || "";
          node.systemId = systemId || "";
          return node;
        }
      };
      function Node() {
      }
      Node.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        // Modified in DOM Level 2:
        insertBefore: function(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          if (oldChild) {
            this.removeChild(oldChild);
          }
        },
        removeChild: function(oldChild) {
          return _removeChild(this, oldChild);
        },
        appendChild: function(newChild) {
          return this.insertBefore(newChild, null);
        },
        hasChildNodes: function() {
          return this.firstChild != null;
        },
        cloneNode: function(deep) {
          return cloneNode(this.ownerDocument || this, this, deep);
        },
        // Modified in DOM Level 2:
        normalize: function() {
          var child = this.firstChild;
          while (child) {
            var next = child.nextSibling;
            if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
              this.removeChild(next);
              child.appendData(next.data);
            } else {
              child.normalize();
              child = next;
            }
          }
        },
        // Introduced in DOM Level 2:
        isSupported: function(feature, version) {
          return this.ownerDocument.implementation.hasFeature(feature, version);
        },
        // Introduced in DOM Level 2:
        hasAttributes: function() {
          return this.attributes.length > 0;
        },
        /**
         * Look up the prefix associated to the given namespace URI, starting from this node.
         * **The default namespace declarations are ignored by this method.**
         * See Namespace Prefix Lookup for details on the algorithm used by this method.
         *
         * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
         *
         * @param {string | null} namespaceURI
         * @returns {string | null}
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
         * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
         * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
         * @see https://github.com/xmldom/xmldom/issues/322
         */
        lookupPrefix: function(namespaceURI) {
          var el = this;
          while (el) {
            var map2 = el._nsMap;
            if (map2) {
              for (var n in map2) {
                if (Object.prototype.hasOwnProperty.call(map2, n) && map2[n] === namespaceURI) {
                  return n;
                }
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        // Introduced in DOM Level 3:
        lookupNamespaceURI: function(prefix) {
          var el = this;
          while (el) {
            var map2 = el._nsMap;
            if (map2) {
              if (Object.prototype.hasOwnProperty.call(map2, prefix)) {
                return map2[prefix];
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        // Introduced in DOM Level 3:
        isDefaultNamespace: function(namespaceURI) {
          var prefix = this.lookupPrefix(namespaceURI);
          return prefix == null;
        }
      };
      function _xmlEncoder(c) {
        return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
      }
      copy3(NodeType, Node);
      copy3(NodeType, Node.prototype);
      function _visitNode(node, callback) {
        if (callback(node)) {
          return true;
        }
        if (node = node.firstChild) {
          do {
            if (_visitNode(node, callback)) {
              return true;
            }
          } while (node = node.nextSibling);
        }
      }
      function Document() {
        this.ownerDocument = this;
      }
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
        }
      }
      function _onUpdateChild(doc, el, newChild) {
        if (doc && doc._inc) {
          doc._inc++;
          var cs = el.childNodes;
          if (newChild) {
            cs[cs.length++] = newChild;
          } else {
            var child = el.firstChild;
            var i = 0;
            while (child) {
              cs[i++] = child;
              child = child.nextSibling;
            }
            cs.length = i;
            delete cs[cs.length];
          }
        }
      }
      function _removeChild(parentNode, child) {
        var previous = child.previousSibling;
        var next = child.nextSibling;
        if (previous) {
          previous.nextSibling = next;
        } else {
          parentNode.firstChild = next;
        }
        if (next) {
          next.previousSibling = previous;
        } else {
          parentNode.lastChild = previous;
        }
        child.parentNode = null;
        child.previousSibling = null;
        child.nextSibling = null;
        _onUpdateChild(parentNode.ownerDocument, parentNode);
        return child;
      }
      function hasValidParentNodeType(node) {
        return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
      }
      function hasInsertableNodeType(node) {
        return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
      }
      function isDocTypeNode(node) {
        return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
      }
      function isElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE;
      }
      function isTextNode(node) {
        return node && node.nodeType === Node.TEXT_NODE;
      }
      function isElementInsertionPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function isElementReplacementPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        function hasElementChildThatIsNotChild(node) {
          return isElementNode(node) && node !== child;
        }
        if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function assertPreInsertionValidity1to5(parent2, node, child) {
        if (!hasValidParentNodeType(parent2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent2.nodeType);
        }
        if (child && child.parentNode !== parent2) {
          throw new DOMException(NOT_FOUND_ERR, "child not in parent");
        }
        if (
          // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
          !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
          // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
          // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
          // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
          isDocTypeNode(node) && parent2.nodeType !== Node.DOCUMENT_NODE
        ) {
          throw new DOMException(
            HIERARCHY_REQUEST_ERR,
            "Unexpected node type " + node.nodeType + " for parent node type " + parent2.nodeType
          );
        }
      }
      function assertPreInsertionValidityInDocument(parent2, node, child) {
        var parentChildNodes = parent2.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent2, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementInsertionPossible(parent2, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          if (find(parentChildNodes, isDocTypeNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
          if (!child && parentElementChild) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
          }
        }
      }
      function assertPreReplacementValidityInDocument(parent2, node, child) {
        var parentChildNodes = parent2.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent2, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementReplacementPossible(parent2, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          let hasDoctypeChildThatIsNotChild2 = function(node2) {
            return isDocTypeNode(node2) && node2 !== child;
          };
          var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
          if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
        }
      }
      function _insertBefore(parent2, node, child, _inDocumentAssertion) {
        assertPreInsertionValidity1to5(parent2, node, child);
        if (parent2.nodeType === Node.DOCUMENT_NODE) {
          (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent2, node, child);
        }
        var cp = node.parentNode;
        if (cp) {
          cp.removeChild(node);
        }
        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = node.firstChild;
          if (newFirst == null) {
            return node;
          }
          var newLast = node.lastChild;
        } else {
          newFirst = newLast = node;
        }
        var pre = child ? child.previousSibling : parent2.lastChild;
        newFirst.previousSibling = pre;
        newLast.nextSibling = child;
        if (pre) {
          pre.nextSibling = newFirst;
        } else {
          parent2.firstChild = newFirst;
        }
        if (child == null) {
          parent2.lastChild = newLast;
        } else {
          child.previousSibling = newLast;
        }
        do {
          newFirst.parentNode = parent2;
        } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
        _onUpdateChild(parent2.ownerDocument || parent2, parent2);
        if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
          node.firstChild = node.lastChild = null;
        }
        return node;
      }
      function _appendSingleChild(parentNode, newChild) {
        if (newChild.parentNode) {
          newChild.parentNode.removeChild(newChild);
        }
        newChild.parentNode = parentNode;
        newChild.previousSibling = parentNode.lastChild;
        newChild.nextSibling = null;
        if (newChild.previousSibling) {
          newChild.previousSibling.nextSibling = newChild;
        } else {
          parentNode.firstChild = newChild;
        }
        parentNode.lastChild = newChild;
        _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
        return newChild;
      }
      Document.prototype = {
        //implementation : null,
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        /**
         * The DocumentType node of the document.
         *
         * @readonly
         * @type DocumentType
         */
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(newChild, refChild) {
          if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
            var child = newChild.firstChild;
            while (child) {
              var next = child.nextSibling;
              this.insertBefore(child, refChild);
              child = next;
            }
            return newChild;
          }
          _insertBefore(this, newChild, refChild);
          newChild.ownerDocument = this;
          if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
            this.documentElement = newChild;
          }
          return newChild;
        },
        removeChild: function(oldChild) {
          if (this.documentElement == oldChild) {
            this.documentElement = null;
          }
          return _removeChild(this, oldChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          newChild.ownerDocument = this;
          if (oldChild) {
            this.removeChild(oldChild);
          }
          if (isElementNode(newChild)) {
            this.documentElement = newChild;
          }
        },
        // Introduced in DOM Level 2:
        importNode: function(importedNode, deep) {
          return importNode(this, importedNode, deep);
        },
        // Introduced in DOM Level 2:
        getElementById: function(id) {
          var rtv = null;
          _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
              if (node.getAttribute("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        /**
         * The `getElementsByClassName` method of `Document` interface returns an array-like object
         * of all child elements which have **all** of the given class name(s).
         *
         * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
         *
         *
         * Warning: This is a live LiveNodeList.
         * Changes in the DOM will reflect in the array as the changes occur.
         * If an element selected by this array no longer qualifies for the selector,
         * it will automatically be removed. Be aware of this for iteration purposes.
         *
         * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
         * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
         */
        getElementsByClassName: function(classNames) {
          var classNamesSet = toOrderedSet(classNames);
          return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) {
              _visitNode(base.documentElement, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                  var nodeClassNames = node.getAttribute("class");
                  if (nodeClassNames) {
                    var matches = classNames === nodeClassNames;
                    if (!matches) {
                      var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                      matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                    }
                    if (matches) {
                      ls.push(node);
                    }
                  }
                }
              });
            }
            return ls;
          });
        },
        //document factory method:
        createElement: function(tagName) {
          var node = new Element();
          node.ownerDocument = this;
          node.nodeName = tagName;
          node.tagName = tagName;
          node.localName = tagName;
          node.childNodes = new NodeList();
          var attrs = node.attributes = new NamedNodeMap();
          attrs._ownerElement = node;
          return node;
        },
        createDocumentFragment: function() {
          var node = new DocumentFragment();
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          return node;
        },
        createTextNode: function(data) {
          var node = new Text2();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createComment: function(data) {
          var node = new Comment();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createCDATASection: function(data) {
          var node = new CDATASection();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createProcessingInstruction: function(target, data) {
          var node = new ProcessingInstruction();
          node.ownerDocument = this;
          node.tagName = node.target = target;
          node.nodeValue = node.data = data;
          return node;
        },
        createAttribute: function(name) {
          var node = new Attr();
          node.ownerDocument = this;
          node.name = name;
          node.nodeName = name;
          node.localName = name;
          node.specified = true;
          return node;
        },
        createEntityReference: function(name) {
          var node = new EntityReference();
          node.ownerDocument = this;
          node.nodeName = name;
          return node;
        },
        // Introduced in DOM Level 2:
        createElementNS: function(namespaceURI, qualifiedName) {
          var node = new Element();
          var pl = qualifiedName.split(":");
          var attrs = node.attributes = new NamedNodeMap();
          node.childNodes = new NodeList();
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.tagName = qualifiedName;
          node.namespaceURI = namespaceURI;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          attrs._ownerElement = node;
          return node;
        },
        // Introduced in DOM Level 2:
        createAttributeNS: function(namespaceURI, qualifiedName) {
          var node = new Attr();
          var pl = qualifiedName.split(":");
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.name = qualifiedName;
          node.namespaceURI = namespaceURI;
          node.specified = true;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          return node;
        }
      };
      _extends(Document, Node);
      function Element() {
        this._nsMap = {};
      }
      Element.prototype = {
        nodeType: ELEMENT_NODE,
        hasAttribute: function(name) {
          return this.getAttributeNode(name) != null;
        },
        getAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          return attr && attr.value || "";
        },
        getAttributeNode: function(name) {
          return this.attributes.getNamedItem(name);
        },
        setAttribute: function(name, value) {
          var attr = this.ownerDocument.createAttribute(name);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        removeAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          attr && this.removeAttributeNode(attr);
        },
        //four real opeartion method
        appendChild: function(newChild) {
          if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
            return this.insertBefore(newChild, null);
          } else {
            return _appendSingleChild(this, newChild);
          }
        },
        setAttributeNode: function(newAttr) {
          return this.attributes.setNamedItem(newAttr);
        },
        setAttributeNodeNS: function(newAttr) {
          return this.attributes.setNamedItemNS(newAttr);
        },
        removeAttributeNode: function(oldAttr) {
          return this.attributes.removeNamedItem(oldAttr.nodeName);
        },
        //get real attribute name,and remove it by removeAttributeNode
        removeAttributeNS: function(namespaceURI, localName) {
          var old = this.getAttributeNodeNS(namespaceURI, localName);
          old && this.removeAttributeNode(old);
        },
        hasAttributeNS: function(namespaceURI, localName) {
          return this.getAttributeNodeNS(namespaceURI, localName) != null;
        },
        getAttributeNS: function(namespaceURI, localName) {
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          return attr && attr.value || "";
        },
        setAttributeNS: function(namespaceURI, qualifiedName, value) {
          var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        getAttributeNodeNS: function(namespaceURI, localName) {
          return this.attributes.getNamedItemNS(namespaceURI, localName);
        },
        getElementsByTagName: function(tagName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function(namespaceURI, localName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        }
      };
      Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
      Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
      _extends(Element, Node);
      function Attr() {
      }
      Attr.prototype.nodeType = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData() {
      }
      CharacterData.prototype = {
        data: "",
        substringData: function(offset, count2) {
          return this.data.substring(offset, offset + count2);
        },
        appendData: function(text2) {
          text2 = this.data + text2;
          this.nodeValue = this.data = text2;
          this.length = text2.length;
        },
        insertData: function(offset, text2) {
          this.replaceData(offset, 0, text2);
        },
        appendChild: function(newChild) {
          throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
        },
        deleteData: function(offset, count2) {
          this.replaceData(offset, count2, "");
        },
        replaceData: function(offset, count2, text2) {
          var start = this.data.substring(0, offset);
          var end = this.data.substring(offset + count2);
          text2 = start + text2 + end;
          this.nodeValue = this.data = text2;
          this.length = text2.length;
        }
      };
      _extends(CharacterData, Node);
      function Text2() {
      }
      Text2.prototype = {
        nodeName: "#text",
        nodeType: TEXT_NODE,
        splitText: function(offset) {
          var text2 = this.data;
          var newText = text2.substring(offset);
          text2 = text2.substring(0, offset);
          this.data = this.nodeValue = text2;
          this.length = text2.length;
          var newNode = this.ownerDocument.createTextNode(newText);
          if (this.parentNode) {
            this.parentNode.insertBefore(newNode, this.nextSibling);
          }
          return newNode;
        }
      };
      _extends(Text2, CharacterData);
      function Comment() {
      }
      Comment.prototype = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE
      };
      _extends(Comment, CharacterData);
      function CDATASection() {
      }
      CDATASection.prototype = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE
      };
      _extends(CDATASection, CharacterData);
      function DocumentType() {
      }
      DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation() {
      }
      Notation.prototype.nodeType = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity() {
      }
      Entity.prototype.nodeType = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference() {
      }
      EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment() {
      }
      DocumentFragment.prototype.nodeName = "#document-fragment";
      DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction() {
      }
      ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, Node);
      function XMLSerializer() {
      }
      XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
        return nodeSerializeToString.call(node, isHtml, nodeFilter);
      };
      Node.prototype.toString = nodeSerializeToString;
      function nodeSerializeToString(isHtml, nodeFilter) {
        var buf = [];
        var refNode = this.nodeType == 9 && this.documentElement || this;
        var prefix = refNode.prefix;
        var uri = refNode.namespaceURI;
        if (uri && prefix == null) {
          var prefix = refNode.lookupPrefix(uri);
          if (prefix == null) {
            var visibleNamespaces = [
              { namespace: uri, prefix: null }
              //{namespace:uri,prefix:''}
            ];
          }
        }
        serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
        return buf.join("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node.prefix || "";
        var uri = node.namespaceURI;
        if (!uri) {
          return false;
        }
        if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
          return false;
        }
        var i = visibleNamespaces.length;
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns.prefix === prefix) {
            return ns.namespace !== uri;
          }
        }
        return true;
      }
      function addSerializedAttribute(buf, qualifiedName, value) {
        buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
      }
      function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
        if (!visibleNamespaces) {
          visibleNamespaces = [];
        }
        if (nodeFilter) {
          node = nodeFilter(node);
          if (node) {
            if (typeof node == "string") {
              buf.push(node);
              return;
            }
          } else {
            return;
          }
        }
        switch (node.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var len = attrs.length;
            var child = node.firstChild;
            var nodeName = node.tagName;
            isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
            var prefixedNodeName = nodeName;
            if (!isHTML && !node.prefix && node.namespaceURI) {
              var defaultNS;
              for (var ai = 0; ai < attrs.length; ai++) {
                if (attrs.item(ai).name === "xmlns") {
                  defaultNS = attrs.item(ai).value;
                  break;
                }
              }
              if (!defaultNS) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                    defaultNS = namespace.namespace;
                    break;
                  }
                }
              }
              if (defaultNS !== node.namespaceURI) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.namespace === node.namespaceURI) {
                    if (namespace.prefix) {
                      prefixedNodeName = namespace.prefix + ":" + nodeName;
                    }
                    break;
                  }
                }
              }
            }
            buf.push("<", prefixedNodeName);
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (attr.prefix == "xmlns") {
                visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
              } else if (attr.nodeName == "xmlns") {
                visibleNamespaces.push({ prefix: "", namespace: attr.value });
              }
            }
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
                var prefix = attr.prefix || "";
                var uri = attr.namespaceURI;
                addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
                visibleNamespaces.push({ prefix, namespace: uri });
              }
              serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
              var prefix = node.prefix || "";
              var uri = node.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
              buf.push(">");
              if (isHTML && /^script$/i.test(nodeName)) {
                while (child) {
                  if (child.data) {
                    buf.push(child.data);
                  } else {
                    serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  }
                  child = child.nextSibling;
                }
              } else {
                while (child) {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  child = child.nextSibling;
                }
              }
              buf.push("</", prefixedNodeName, ">");
            } else {
              buf.push("/>");
            }
            return;
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            var child = node.firstChild;
            while (child) {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
              child = child.nextSibling;
            }
            return;
          case ATTRIBUTE_NODE:
            return addSerializedAttribute(buf, node.name, node.value);
          case TEXT_NODE:
            return buf.push(
              node.data.replace(/[<&>]/g, _xmlEncoder)
            );
          case CDATA_SECTION_NODE:
            return buf.push("<![CDATA[", node.data, "]]>");
          case COMMENT_NODE:
            return buf.push("<!--", node.data, "-->");
          case DOCUMENT_TYPE_NODE:
            var pubid = node.publicId;
            var sysid = node.systemId;
            buf.push("<!DOCTYPE ", node.name);
            if (pubid) {
              buf.push(" PUBLIC ", pubid);
              if (sysid && sysid != ".") {
                buf.push(" ", sysid);
              }
              buf.push(">");
            } else if (sysid && sysid != ".") {
              buf.push(" SYSTEM ", sysid, ">");
            } else {
              var sub = node.internalSubset;
              if (sub) {
                buf.push(" [", sub, "]");
              }
              buf.push(">");
            }
            return;
          case PROCESSING_INSTRUCTION_NODE:
            return buf.push("<?", node.target, " ", node.data, "?>");
          case ENTITY_REFERENCE_NODE:
            return buf.push("&", node.nodeName, ";");
          default:
            buf.push("??", node.nodeName);
        }
      }
      function importNode(doc, node, deep) {
        var node2;
        switch (node.nodeType) {
          case ELEMENT_NODE:
            node2 = node.cloneNode(false);
            node2.ownerDocument = doc;
          case DOCUMENT_FRAGMENT_NODE:
            break;
          case ATTRIBUTE_NODE:
            deep = true;
            break;
        }
        if (!node2) {
          node2 = node.cloneNode(false);
        }
        node2.ownerDocument = doc;
        node2.parentNode = null;
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(importNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function cloneNode(doc, node, deep) {
        var node2 = new node.constructor();
        for (var n in node) {
          if (Object.prototype.hasOwnProperty.call(node, n)) {
            var v = node[n];
            if (typeof v != "object") {
              if (v != node2[n]) {
                node2[n] = v;
              }
            }
          }
        }
        if (node.childNodes) {
          node2.childNodes = new NodeList();
        }
        node2.ownerDocument = doc;
        switch (node2.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var attrs2 = node2.attributes = new NamedNodeMap();
            var len = attrs.length;
            attrs2._ownerElement = node2;
            for (var i = 0; i < len; i++) {
              node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
            }
            break;
            ;
          case ATTRIBUTE_NODE:
            deep = true;
        }
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(cloneNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      try {
        if (Object.defineProperty) {
          let getTextContent2 = function(node) {
            switch (node.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                var buf = [];
                node = node.firstChild;
                while (node) {
                  if (node.nodeType !== 7 && node.nodeType !== 8) {
                    buf.push(getTextContent2(node));
                  }
                  node = node.nextSibling;
                }
                return buf.join("");
              default:
                return node.nodeValue;
            }
          };
          getTextContent = getTextContent2;
          Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
              _updateLiveList(this);
              return this.$$length;
            }
          });
          Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
              return getTextContent2(this);
            },
            set: function(data) {
              switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this.firstChild) {
                    this.removeChild(this.firstChild);
                  }
                  if (data || String(data)) {
                    this.appendChild(this.ownerDocument.createTextNode(data));
                  }
                  break;
                default:
                  this.data = data;
                  this.value = data;
                  this.nodeValue = data;
              }
            }
          });
          __set__ = function(object, key, value) {
            object["$$" + key] = value;
          };
        }
      } catch (e2) {
      }
      var getTextContent;
      exports.DocumentType = DocumentType;
      exports.DOMException = DOMException;
      exports.DOMImplementation = DOMImplementation;
      exports.Element = Element;
      exports.Node = Node;
      exports.NodeList = NodeList;
      exports.XMLSerializer = XMLSerializer;
    }
  });

  // node_modules/@xmldom/xmldom/lib/entities.js
  var require_entities = __commonJS({
    "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
      var freeze = require_conventions().freeze;
      exports.XML_ENTITIES = freeze({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
      exports.HTML_ENTITIES = freeze({
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "\xC0",
        Aacute: "\xC1",
        Acirc: "\xC2",
        Atilde: "\xC3",
        Auml: "\xC4",
        Aring: "\xC5",
        AElig: "\xC6",
        Ccedil: "\xC7",
        Egrave: "\xC8",
        Eacute: "\xC9",
        Ecirc: "\xCA",
        Euml: "\xCB",
        Igrave: "\xCC",
        Iacute: "\xCD",
        Icirc: "\xCE",
        Iuml: "\xCF",
        ETH: "\xD0",
        Ntilde: "\xD1",
        Ograve: "\xD2",
        Oacute: "\xD3",
        Ocirc: "\xD4",
        Otilde: "\xD5",
        Ouml: "\xD6",
        Oslash: "\xD8",
        Ugrave: "\xD9",
        Uacute: "\xDA",
        Ucirc: "\xDB",
        Uuml: "\xDC",
        Yacute: "\xDD",
        THORN: "\xDE",
        szlig: "\xDF",
        agrave: "\xE0",
        aacute: "\xE1",
        acirc: "\xE2",
        atilde: "\xE3",
        auml: "\xE4",
        aring: "\xE5",
        aelig: "\xE6",
        ccedil: "\xE7",
        egrave: "\xE8",
        eacute: "\xE9",
        ecirc: "\xEA",
        euml: "\xEB",
        igrave: "\xEC",
        iacute: "\xED",
        icirc: "\xEE",
        iuml: "\xEF",
        eth: "\xF0",
        ntilde: "\xF1",
        ograve: "\xF2",
        oacute: "\xF3",
        ocirc: "\xF4",
        otilde: "\xF5",
        ouml: "\xF6",
        oslash: "\xF8",
        ugrave: "\xF9",
        uacute: "\xFA",
        ucirc: "\xFB",
        uuml: "\xFC",
        yacute: "\xFD",
        thorn: "\xFE",
        yuml: "\xFF",
        nbsp: "\xA0",
        iexcl: "\xA1",
        cent: "\xA2",
        pound: "\xA3",
        curren: "\xA4",
        yen: "\xA5",
        brvbar: "\xA6",
        sect: "\xA7",
        uml: "\xA8",
        copy: "\xA9",
        ordf: "\xAA",
        laquo: "\xAB",
        not: "\xAC",
        shy: "\xAD\xAD",
        reg: "\xAE",
        macr: "\xAF",
        deg: "\xB0",
        plusmn: "\xB1",
        sup2: "\xB2",
        sup3: "\xB3",
        acute: "\xB4",
        micro: "\xB5",
        para: "\xB6",
        middot: "\xB7",
        cedil: "\xB8",
        sup1: "\xB9",
        ordm: "\xBA",
        raquo: "\xBB",
        frac14: "\xBC",
        frac12: "\xBD",
        frac34: "\xBE",
        iquest: "\xBF",
        times: "\xD7",
        divide: "\xF7",
        forall: "\u2200",
        part: "\u2202",
        exist: "\u2203",
        empty: "\u2205",
        nabla: "\u2207",
        isin: "\u2208",
        notin: "\u2209",
        ni: "\u220B",
        prod: "\u220F",
        sum: "\u2211",
        minus: "\u2212",
        lowast: "\u2217",
        radic: "\u221A",
        prop: "\u221D",
        infin: "\u221E",
        ang: "\u2220",
        and: "\u2227",
        or: "\u2228",
        cap: "\u2229",
        cup: "\u222A",
        "int": "\u222B",
        there4: "\u2234",
        sim: "\u223C",
        cong: "\u2245",
        asymp: "\u2248",
        ne: "\u2260",
        equiv: "\u2261",
        le: "\u2264",
        ge: "\u2265",
        sub: "\u2282",
        sup: "\u2283",
        nsub: "\u2284",
        sube: "\u2286",
        supe: "\u2287",
        oplus: "\u2295",
        otimes: "\u2297",
        perp: "\u22A5",
        sdot: "\u22C5",
        Alpha: "\u0391",
        Beta: "\u0392",
        Gamma: "\u0393",
        Delta: "\u0394",
        Epsilon: "\u0395",
        Zeta: "\u0396",
        Eta: "\u0397",
        Theta: "\u0398",
        Iota: "\u0399",
        Kappa: "\u039A",
        Lambda: "\u039B",
        Mu: "\u039C",
        Nu: "\u039D",
        Xi: "\u039E",
        Omicron: "\u039F",
        Pi: "\u03A0",
        Rho: "\u03A1",
        Sigma: "\u03A3",
        Tau: "\u03A4",
        Upsilon: "\u03A5",
        Phi: "\u03A6",
        Chi: "\u03A7",
        Psi: "\u03A8",
        Omega: "\u03A9",
        alpha: "\u03B1",
        beta: "\u03B2",
        gamma: "\u03B3",
        delta: "\u03B4",
        epsilon: "\u03B5",
        zeta: "\u03B6",
        eta: "\u03B7",
        theta: "\u03B8",
        iota: "\u03B9",
        kappa: "\u03BA",
        lambda: "\u03BB",
        mu: "\u03BC",
        nu: "\u03BD",
        xi: "\u03BE",
        omicron: "\u03BF",
        pi: "\u03C0",
        rho: "\u03C1",
        sigmaf: "\u03C2",
        sigma: "\u03C3",
        tau: "\u03C4",
        upsilon: "\u03C5",
        phi: "\u03C6",
        chi: "\u03C7",
        psi: "\u03C8",
        omega: "\u03C9",
        thetasym: "\u03D1",
        upsih: "\u03D2",
        piv: "\u03D6",
        OElig: "\u0152",
        oelig: "\u0153",
        Scaron: "\u0160",
        scaron: "\u0161",
        Yuml: "\u0178",
        fnof: "\u0192",
        circ: "\u02C6",
        tilde: "\u02DC",
        ensp: "\u2002",
        emsp: "\u2003",
        thinsp: "\u2009",
        zwnj: "\u200C",
        zwj: "\u200D",
        lrm: "\u200E",
        rlm: "\u200F",
        ndash: "\u2013",
        mdash: "\u2014",
        lsquo: "\u2018",
        rsquo: "\u2019",
        sbquo: "\u201A",
        ldquo: "\u201C",
        rdquo: "\u201D",
        bdquo: "\u201E",
        dagger: "\u2020",
        Dagger: "\u2021",
        bull: "\u2022",
        hellip: "\u2026",
        permil: "\u2030",
        prime: "\u2032",
        Prime: "\u2033",
        lsaquo: "\u2039",
        rsaquo: "\u203A",
        oline: "\u203E",
        euro: "\u20AC",
        trade: "\u2122",
        larr: "\u2190",
        uarr: "\u2191",
        rarr: "\u2192",
        darr: "\u2193",
        harr: "\u2194",
        crarr: "\u21B5",
        lceil: "\u2308",
        rceil: "\u2309",
        lfloor: "\u230A",
        rfloor: "\u230B",
        loz: "\u25CA",
        spades: "\u2660",
        clubs: "\u2663",
        hearts: "\u2665",
        diams: "\u2666"
      });
      exports.entityMap = exports.HTML_ENTITIES;
    }
  });

  // node_modules/@xmldom/xmldom/lib/sax.js
  var require_sax = __commonJS({
    "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
      var NAMESPACE = require_conventions().NAMESPACE;
      var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
      var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function ParseError(message, locator) {
        this.message = message;
        this.locator = locator;
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, ParseError);
      }
      ParseError.prototype = new Error();
      ParseError.prototype.name = ParseError.name;
      function XMLReader() {
      }
      XMLReader.prototype = {
        parse: function(source, defaultNSMap, entityMap) {
          var domBuilder = this.domBuilder;
          domBuilder.startDocument();
          _copy(defaultNSMap, defaultNSMap = {});
          parse(
            source,
            defaultNSMap,
            entityMap,
            domBuilder,
            this.errorHandler
          );
          domBuilder.endDocument();
        }
      };
      function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
          } else {
            return String.fromCharCode(code);
          }
        }
        function entityReplacer(a2) {
          var k = a2.slice(1, -1);
          if (Object.hasOwnProperty.call(entityMap, k)) {
            return entityMap[k];
          } else if (k.charAt(0) === "#") {
            return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
          } else {
            errorHandler.error("entity not found:" + a2);
            return a2;
          }
        }
        function appendText(end2) {
          if (end2 > start) {
            var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end2 - start);
            start = end2;
          }
        }
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern.exec(source))) {
            lineStart = m.index;
            lineEnd = lineStart + m[0].length;
            locator.lineNumber++;
          }
          locator.columnNumber = p - lineStart + 1;
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /.*(?:\r\n?|\n)|.*$/g;
        var locator = domBuilder.locator;
        var parseStack = [{ currentNSMap: defaultNSMapCopy }];
        var closeMap = {};
        var start = 0;
        while (true) {
          try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
              if (!source.substr(start).match(/^\s*$/)) {
                var doc = domBuilder.doc;
                var text2 = doc.createTextNode(source.substr(start));
                doc.appendChild(text2);
                domBuilder.currentElement = text2;
              }
              return;
            }
            if (tagStart > start) {
              appendText(tagStart);
            }
            switch (source.charAt(tagStart + 1)) {
              case "/":
                var end = source.indexOf(">", tagStart + 3);
                var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
                var config = parseStack.pop();
                if (end < 0) {
                  tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                  end = tagStart + 1 + tagName.length;
                } else if (tagName.match(/\s</)) {
                  tagName = tagName.replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " maybe not complete");
                  end = tagStart + 1 + tagName.length;
                }
                var localNSMap = config.localNSMap;
                var endMatch = config.tagName == tagName;
                var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
                if (endIgnoreCaseMach) {
                  domBuilder.endElement(config.uri, config.localName, tagName);
                  if (localNSMap) {
                    for (var prefix in localNSMap) {
                      if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                        domBuilder.endPrefixMapping(prefix);
                      }
                    }
                  }
                  if (!endMatch) {
                    errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                  }
                } else {
                  parseStack.push(config);
                }
                end++;
                break;
              case "?":
                locator && position(tagStart);
                end = parseInstruction(source, tagStart, domBuilder);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDCC(source, tagStart, domBuilder, errorHandler);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
                var len = el.length;
                if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                  el.closed = true;
                  if (!entityMap.nbsp) {
                    errorHandler.warning("unclosed xml attribute");
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a.offset);
                    a.locator = copyLocator(locator, {});
                  }
                  domBuilder.locator = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                  domBuilder.locator = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                }
                if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                  end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                } else {
                  end++;
                }
            }
          } catch (e2) {
            if (e2 instanceof ParseError) {
              throw e2;
            }
            errorHandler.error("element parse error: " + e2);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math.max(tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t.lineNumber = f.lineNumber;
        t.columnNumber = f.columnNumber;
        return t;
      }
      function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
        function addAttribute(qname, value2, startIndex) {
          if (el.attributeNames.hasOwnProperty(qname)) {
            errorHandler.fatalError("Attribute " + qname + " redefined");
          }
          el.addValue(
            qname,
            // @see https://www.w3.org/TR/xml/#AVNormalize
            // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
            // - recursive replacement of (DTD) entity references
            // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
            value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
            startIndex
          );
        }
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source.charAt(p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source.slice(start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler.warning('attribute value must after "="');
                  attrName = source.slice(start, p);
                }
                start = p + 1;
                p = source.indexOf(c, start);
                if (p > 0) {
                  value = source.slice(start, p);
                  addAttribute(attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start);
                errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el.closed = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  break;
                case S_ATTR_SPACE:
                  el.closed = true;
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler.error("unexpected end of input");
              if (s == S_TAG) {
                el.setTagName(source.slice(start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  value = source.slice(start, p);
                  if (value.slice(-1) === "/") {
                    el.closed = true;
                    value = value.slice(0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler.warning('attribute "' + value + '" missed quot(")!');
                    addAttribute(attrName, value, start);
                  } else {
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                    }
                    addAttribute(value, value, start);
                  }
                  break;
                case S_EQ:
                  throw new Error("attribute value missed!!");
              }
              return p;
            case "\x80":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el.setTagName(source.slice(start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source.slice(start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source.slice(start, p);
                    errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                    addAttribute(attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  case S_ATTR_SPACE:
                    var tagName = el.tagName;
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                    }
                    addAttribute(attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler.warning('attribute space is required"' + attrName + '"!!');
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el.tagName;
        var localNSMap = null;
        var i = el.length;
        while (i--) {
          var a = el[i];
          var qName = a.qName;
          var value = a.value;
          var nsp = qName.indexOf(":");
          if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a.localName = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = {};
              _copy(currentNSMap, currentNSMap = {});
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
          }
        }
        var i = el.length;
        while (i--) {
          a = el[i];
          var prefix = a.prefix;
          if (prefix) {
            if (prefix === "xml") {
              a.uri = NAMESPACE.XML;
            }
            if (prefix !== "xmlns") {
              a.uri = currentNSMap[prefix || ""];
            }
          }
        }
        var nsp = tagName.indexOf(":");
        if (nsp > 0) {
          prefix = el.prefix = tagName.slice(0, nsp);
          localName = el.localName = tagName.slice(nsp + 1);
        } else {
          prefix = null;
          localName = el.localName = tagName;
        }
        var ns = el.uri = currentNSMap[prefix || ""];
        domBuilder.startElement(ns, localName, tagName, el);
        if (el.closed) {
          domBuilder.endElement(ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
        } else {
          el.currentNSMap = currentNSMap;
          el.localNSMap = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
        if (/^(?:script|textarea)$/i.test(tagName)) {
          var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
          var text2 = source.substring(elStartEnd + 1, elEndStart);
          if (/[&<]/.test(text2)) {
            if (/^script$/i.test(tagName)) {
              domBuilder.characters(text2, 0, text2.length);
              return elEndStart;
            }
            text2 = text2.replace(/&#?\w+;/g, entityReplacer);
            domBuilder.characters(text2, 0, text2.length);
            return elEndStart;
          }
        }
        return elStartEnd + 1;
      }
      function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
        var pos = closeMap[tagName];
        if (pos == null) {
          pos = source.lastIndexOf("</" + tagName + ">");
          if (pos < elStartEnd) {
            pos = source.lastIndexOf("</" + tagName);
          }
          closeMap[tagName] = pos;
        }
        return pos < elStartEnd;
      }
      function _copy(source, target) {
        for (var n in source) {
          if (Object.prototype.hasOwnProperty.call(source, n)) {
            target[n] = source[n];
          }
        }
      }
      function parseDCC(source, start, domBuilder, errorHandler) {
        var next = source.charAt(start + 2);
        switch (next) {
          case "-":
            if (source.charAt(start + 3) === "-") {
              var end = source.indexOf("-->", start + 4);
              if (end > start) {
                domBuilder.comment(source, start + 4, end - start - 4);
                return end + 3;
              } else {
                errorHandler.error("Unclosed comment");
                return -1;
              }
            } else {
              return -1;
            }
          default:
            if (source.substr(start + 3, 6) == "CDATA[") {
              var end = source.indexOf("]]>", start + 9);
              domBuilder.startCDATA();
              domBuilder.characters(source, start + 9, end - start - 9);
              domBuilder.endCDATA();
              return end + 3;
            }
            var matchs = split(source, start);
            var len = matchs.length;
            if (len > 1 && /!doctype/i.test(matchs[0][0])) {
              var name = matchs[1][0];
              var pubid = false;
              var sysid = false;
              if (len > 3) {
                if (/^public$/i.test(matchs[2][0])) {
                  pubid = matchs[3][0];
                  sysid = len > 4 && matchs[4][0];
                } else if (/^system$/i.test(matchs[2][0])) {
                  sysid = matchs[3][0];
                }
              }
              var lastMatch = matchs[len - 1];
              domBuilder.startDTD(name, pubid, sysid);
              domBuilder.endDTD();
              return lastMatch.index + lastMatch[0].length;
            }
        }
        return -1;
      }
      function parseInstruction(source, start, domBuilder) {
        var end = source.indexOf("?>", start);
        if (end) {
          var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (match) {
            var len = match[0].length;
            domBuilder.processingInstruction(match[1], match[2]);
            return end + 2;
          } else {
            return -1;
          }
        }
        return -1;
      }
      function ElementAttributes() {
        this.attributeNames = {};
      }
      ElementAttributes.prototype = {
        setTagName: function(tagName) {
          if (!tagNamePattern.test(tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this.tagName = tagName;
        },
        addValue: function(qName, value, offset) {
          if (!tagNamePattern.test(qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this.attributeNames[qName] = this.length;
          this[this.length++] = { qName, value, offset };
        },
        length: 0,
        getLocalName: function(i) {
          return this[i].localName;
        },
        getLocator: function(i) {
          return this[i].locator;
        },
        getQName: function(i) {
          return this[i].qName;
        },
        getURI: function(i) {
          return this[i].uri;
        },
        getValue: function(i) {
          return this[i].value;
        }
        //	,getIndex:function(uri, localName)){
        //		if(localName){
        //
        //		}else{
        //			var qName = uri
        //		}
        //	},
        //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
        //	getType:function(uri,localName){}
        //	getType:function(i){},
      };
      function split(source, start) {
        var match;
        var buf = [];
        var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        reg.lastIndex = start;
        reg.exec(source);
        while (match = reg.exec(source)) {
          buf.push(match);
          if (match[1])
            return buf;
        }
      }
      exports.XMLReader = XMLReader;
      exports.ParseError = ParseError;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom-parser.js
  var require_dom_parser = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
      var conventions = require_conventions();
      var dom = require_dom();
      var entities = require_entities();
      var sax = require_sax();
      var DOMImplementation = dom.DOMImplementation;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = sax.ParseError;
      var XMLReader = sax.XMLReader;
      function normalizeLineEndings(input) {
        return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
      }
      function DOMParser2(options) {
        this.options = options || { locator: {} };
      }
      DOMParser2.prototype.parseFromString = function(source, mimeType) {
        var options = this.options;
        var sax2 = new XMLReader();
        var domBuilder = options.domBuilder || new DOMHandler();
        var errorHandler = options.errorHandler;
        var locator = options.locator;
        var defaultNSMap = options.xmlns || {};
        var isHTML = /\/x?html?$/.test(mimeType);
        var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
        if (locator) {
          domBuilder.setDocumentLocator(locator);
        }
        sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
        sax2.domBuilder = options.domBuilder || domBuilder;
        if (isHTML) {
          defaultNSMap[""] = NAMESPACE.HTML;
        }
        defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
        var normalize = options.normalizeLineEndings || normalizeLineEndings;
        if (source && typeof source === "string") {
          sax2.parse(
            normalize(source),
            defaultNSMap,
            entityMap
          );
        } else {
          sax2.errorHandler.error("invalid doc source");
        }
        return domBuilder.doc;
      };
      function buildErrorHandler(errorImpl, domBuilder, locator) {
        if (!errorImpl) {
          if (domBuilder instanceof DOMHandler) {
            return domBuilder;
          }
          errorImpl = domBuilder;
        }
        var errorHandler = {};
        var isCallback = errorImpl instanceof Function;
        locator = locator || {};
        function build(key) {
          var fn = errorImpl[key];
          if (!fn && isCallback) {
            fn = errorImpl.length == 2 ? function(msg) {
              errorImpl(key, msg);
            } : errorImpl;
          }
          errorHandler[key] = fn && function(msg) {
            fn("[xmldom " + key + "]	" + msg + _locator(locator));
          } || function() {
          };
        }
        build("warning");
        build("error");
        build("fatalError");
        return errorHandler;
      }
      function DOMHandler() {
        this.cdata = false;
      }
      function position(locator, node) {
        node.lineNumber = locator.lineNumber;
        node.columnNumber = locator.columnNumber;
      }
      DOMHandler.prototype = {
        startDocument: function() {
          this.doc = new DOMImplementation().createDocument(null, null, null);
          if (this.locator) {
            this.doc.documentURI = this.locator.systemId;
          }
        },
        startElement: function(namespaceURI, localName, qName, attrs) {
          var doc = this.doc;
          var el = doc.createElementNS(namespaceURI, qName || localName);
          var len = attrs.length;
          appendElement(this, el);
          this.currentElement = el;
          this.locator && position(this.locator, el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
          }
        },
        endElement: function(namespaceURI, localName, qName) {
          var current = this.currentElement;
          var tagName = current.tagName;
          this.currentElement = current.parentNode;
        },
        startPrefixMapping: function(prefix, uri) {
        },
        endPrefixMapping: function(prefix) {
        },
        processingInstruction: function(target, data) {
          var ins = this.doc.createProcessingInstruction(target, data);
          this.locator && position(this.locator, ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function(ch, start, length2) {
        },
        characters: function(chars, start, length2) {
          chars = _toString.apply(this, arguments);
          if (chars) {
            if (this.cdata) {
              var charNode = this.doc.createCDATASection(chars);
            } else {
              var charNode = this.doc.createTextNode(chars);
            }
            if (this.currentElement) {
              this.currentElement.appendChild(charNode);
            } else if (/^\s*$/.test(chars)) {
              this.doc.appendChild(charNode);
            }
            this.locator && position(this.locator, charNode);
          }
        },
        skippedEntity: function(name) {
        },
        endDocument: function() {
          this.doc.normalize();
        },
        setDocumentLocator: function(locator) {
          if (this.locator = locator) {
            locator.lineNumber = 0;
          }
        },
        //LexicalHandler
        comment: function(chars, start, length2) {
          chars = _toString.apply(this, arguments);
          var comm = this.doc.createComment(chars);
          this.locator && position(this.locator, comm);
          appendElement(this, comm);
        },
        startCDATA: function() {
          this.cdata = true;
        },
        endCDATA: function() {
          this.cdata = false;
        },
        startDTD: function(name, publicId, systemId) {
          var impl = this.doc.implementation;
          if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name, publicId, systemId);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
          }
        },
        /**
         * @see org.xml.sax.ErrorHandler
         * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
         */
        warning: function(error) {
          console.warn("[xmldom warning]	" + error, _locator(this.locator));
        },
        error: function(error) {
          console.error("[xmldom error]	" + error, _locator(this.locator));
        },
        fatalError: function(error) {
          throw new ParseError(error, this.locator);
        }
      };
      function _locator(l) {
        if (l) {
          return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
        }
      }
      function _toString(chars, start, length2) {
        if (typeof chars == "string") {
          return chars.substr(start, length2);
        } else {
          if (chars.length >= start + length2 || start) {
            return new java.lang.String(chars, start, length2) + "";
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
        DOMHandler.prototype[key] = function() {
          return null;
        };
      });
      function appendElement(hander, node) {
        if (!hander.currentElement) {
          hander.doc.appendChild(node);
        } else {
          hander.currentElement.appendChild(node);
        }
      }
      exports.__DOMHandler = DOMHandler;
      exports.normalizeLineEndings = normalizeLineEndings;
      exports.DOMParser = DOMParser2;
    }
  });

  // node_modules/@xmldom/xmldom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
      var dom = require_dom();
      exports.DOMImplementation = dom.DOMImplementation;
      exports.XMLSerializer = dom.XMLSerializer;
      exports.DOMParser = require_dom_parser().DOMParser;
    }
  });

  // node_modules/js-clipper/clipper.js
  var require_clipper = __commonJS({
    "node_modules/js-clipper/clipper.js"(exports, module) {
      "use strict";
      var use_int32 = false;
      var use_xyz = false;
      var use_lines = true;
      var use_deprecated = false;
      var ClipperLib2 = {};
      var isNode = false;
      if (typeof module !== "undefined" && module.exports) {
        module.exports = ClipperLib2;
        isNode = true;
      } else {
        if (typeof document !== "undefined")
          window.ClipperLib = ClipperLib2;
        else
          self["ClipperLib"] = ClipperLib2;
      }
      var navigator_appName;
      if (!isNode) {
        nav = navigator.userAgent.toString().toLowerCase();
        navigator_appName = navigator.appName;
      } else {
        nav = "chrome";
        navigator_appName = "Netscape";
      }
      var nav;
      var browser = {};
      if (nav.indexOf("chrome") != -1 && nav.indexOf("chromium") == -1)
        browser.chrome = 1;
      else
        browser.chrome = 0;
      if (nav.indexOf("chromium") != -1)
        browser.chromium = 1;
      else
        browser.chromium = 0;
      if (nav.indexOf("safari") != -1 && nav.indexOf("chrome") == -1 && nav.indexOf("chromium") == -1)
        browser.safari = 1;
      else
        browser.safari = 0;
      if (nav.indexOf("firefox") != -1)
        browser.firefox = 1;
      else
        browser.firefox = 0;
      if (nav.indexOf("firefox/17") != -1)
        browser.firefox17 = 1;
      else
        browser.firefox17 = 0;
      if (nav.indexOf("firefox/15") != -1)
        browser.firefox15 = 1;
      else
        browser.firefox15 = 0;
      if (nav.indexOf("firefox/3") != -1)
        browser.firefox3 = 1;
      else
        browser.firefox3 = 0;
      if (nav.indexOf("opera") != -1)
        browser.opera = 1;
      else
        browser.opera = 0;
      if (nav.indexOf("msie 10") != -1)
        browser.msie10 = 1;
      else
        browser.msie10 = 0;
      if (nav.indexOf("msie 9") != -1)
        browser.msie9 = 1;
      else
        browser.msie9 = 0;
      if (nav.indexOf("msie 8") != -1)
        browser.msie8 = 1;
      else
        browser.msie8 = 0;
      if (nav.indexOf("msie 7") != -1)
        browser.msie7 = 1;
      else
        browser.msie7 = 0;
      if (nav.indexOf("msie ") != -1)
        browser.msie = 1;
      else
        browser.msie = 0;
      ClipperLib2.biginteger_used = null;
      var dbits;
      var canary = 244837814094590;
      var j_lm = (canary & 16777215) == 15715070;
      function BigInteger(a, b, c) {
        ClipperLib2.biginteger_used = 1;
        if (a != null)
          if ("number" == typeof a && "undefined" == typeof b)
            this.fromInt(a);
          else if ("number" == typeof a)
            this.fromNumber(a, b, c);
          else if (b == null && "string" != typeof a)
            this.fromString(a, 256);
          else
            this.fromString(a, b);
      }
      function nbi() {
        return new BigInteger(null);
      }
      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 67108864);
          w[j++] = v & 67108863;
        }
        return c;
      }
      function am2(i, x, w, j, c, n) {
        var xl = x & 32767, xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 32767;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 1073741823;
        }
        return c;
      }
      function am3(i, x, w, j, c, n) {
        var xl = x & 16383, xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 16383;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 16383) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 268435455;
        }
        return c;
      }
      if (j_lm && navigator_appName == "Microsoft Internet Explorer") {
        BigInteger.prototype.am = am2;
        dbits = 30;
      } else if (j_lm && navigator_appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26;
      } else {
        BigInteger.prototype.am = am3;
        dbits = 28;
      }
      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      BigInteger.prototype.DV = 1 << dbits;
      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;
      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr;
      var vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv)
        BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      function int2char(n) {
        return BI_RM.charAt(n);
      }
      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }
      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i)
          r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }
      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0)
          this[0] = x;
        else if (x < -1)
          this[0] = x + this.DV;
        else
          this.t = 0;
      }
      function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r;
      }
      function bnpFromString(s, b) {
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 256)
          k = 8;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else {
          this.fromRadix(s, b);
          return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length, mi = false, sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 255 : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-")
              mi = true;
            continue;
          }
          mi = false;
          if (sh == 0)
            this[this.t++] = x;
          else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
          } else
            this[this.t - 1] |= x << sh;
          sh += k;
          if (sh >= this.DB)
            sh -= this.DB;
        }
        if (k == 8 && (s[0] & 128) != 0) {
          this.s = -1;
          if (sh > 0)
            this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
        this.clamp();
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c)
          --this.t;
      }
      function bnToString(b) {
        if (this.s < 0)
          return "-" + this.negate().toString(b);
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else
          return this.toRadix(b);
        var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
        var p = this.DB - i * this.DB % k;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (this[i] & (1 << p) - 1) << k - p;
              d |= this[--i] >> (p += this.DB - k);
            } else {
              d = this[i] >> (p -= k) & km;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if (d > 0)
              m = true;
            if (m)
              r += int2char(d);
          }
        }
        return m ? r : "0";
      }
      function bnNegate() {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }
      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0)
          return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0)
          return this.s < 0 ? -r : r;
        while (--i >= 0)
          if ((r = this[i] - a[i]) != 0)
            return r;
        return 0;
      }
      function nbits(x) {
        var r = 1, t;
        if ((t = x >>> 16) != 0) {
          x = t;
          r += 16;
        }
        if ((t = x >> 8) != 0) {
          x = t;
          r += 8;
        }
        if ((t = x >> 4) != 0) {
          x = t;
          r += 4;
        }
        if ((t = x >> 2) != 0) {
          x = t;
          r += 2;
        }
        if ((t = x >> 1) != 0) {
          x = t;
          r += 1;
        }
        return r;
      }
      function bnBitLength() {
        if (this.t <= 0)
          return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }
      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
          r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i)
          r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }
      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i)
          r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }
      function bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
        for (i = this.t - 1; i >= 0; --i) {
          r[i + ds + 1] = this[i] >> cbs | c;
          c = (this[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i)
          r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
      }
      function bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
          r.t = 0;
          return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
          r[i - ds - 1] |= (this[i] & bm) << cbs;
          r[i - ds] = this[i] >> bs;
        }
        if (bs > 0)
          r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.clamp();
      }
      function bnpSubTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] - a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c -= a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1)
          r[i++] = this.DV + c;
        else if (c > 0)
          r[i++] = c;
        r.t = i;
        r.clamp();
      }
      function bnpMultiplyTo(a, r) {
        var x = this.abs(), y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < y.t; ++i)
          r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0)
          r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }
      function bnpDivRemTo(m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0)
          return;
        var pt = this.abs();
        if (pt.t < pm.t) {
          if (q != null)
            q.fromInt(0);
          if (r != null)
            this.copyTo(r);
          return;
        }
        if (r == null)
          r = nbi();
        var y = nbi(), ts = this.s, ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0)
          return;
        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e2 = 1 << this.F2;
        var i = r.t, j = i - ys, t = q == null ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
          r[r.t++] = 1;
          r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y);
        while (y.t < ys)
          y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e2) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd)
              r.subTo(t, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms)
            BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0)
          r.rShiftTo(nsh, r);
        if (ts < 0)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnMod(a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          a.subTo(r, r);
        return r;
      }
      function Classic(m) {
        this.m = m;
      }
      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0)
          return x.mod(this.m);
        else
          return x;
      }
      function cRevert(x) {
        return x;
      }
      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }
      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;
      function bnpInvDigit() {
        if (this.t < 1)
          return 0;
        var x = this[0];
        if ((x & 1) == 0)
          return 0;
        var y = x & 3;
        y = y * (2 - (x & 15) * y) & 15;
        y = y * (2 - (x & 255) * y) & 255;
        y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }
      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }
      function montConvert(x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          this.m.subTo(r, r);
        return r;
      }
      function montRevert(x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
      function montReduce(x) {
        while (x.t <= this.mt2)
          x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 32767;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;
      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }
      function bnpExp(e2, z) {
        if (e2 > 4294967295 || e2 < 1)
          return BigInteger.ONE;
        var r = nbi(), r2 = nbi(), g2 = z.convert(this), i = nbits(e2) - 1;
        g2.copyTo(r);
        while (--i >= 0) {
          z.sqrTo(r, r2);
          if ((e2 & 1 << i) > 0)
            z.mulTo(r2, g2, r);
          else {
            var t = r;
            r = r2;
            r2 = t;
          }
        }
        return z.revert(r);
      }
      function bnModPowInt(e2, m) {
        var z;
        if (e2 < 256 || m.isEven())
          z = new Classic(m);
        else
          z = new Montgomery(m);
        return this.exp(e2, z);
      }
      BigInteger.prototype.copyTo = bnpCopyTo;
      BigInteger.prototype.fromInt = bnpFromInt;
      BigInteger.prototype.fromString = bnpFromString;
      BigInteger.prototype.clamp = bnpClamp;
      BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
      BigInteger.prototype.drShiftTo = bnpDRShiftTo;
      BigInteger.prototype.lShiftTo = bnpLShiftTo;
      BigInteger.prototype.rShiftTo = bnpRShiftTo;
      BigInteger.prototype.subTo = bnpSubTo;
      BigInteger.prototype.multiplyTo = bnpMultiplyTo;
      BigInteger.prototype.squareTo = bnpSquareTo;
      BigInteger.prototype.divRemTo = bnpDivRemTo;
      BigInteger.prototype.invDigit = bnpInvDigit;
      BigInteger.prototype.isEven = bnpIsEven;
      BigInteger.prototype.exp = bnpExp;
      BigInteger.prototype.toString = bnToString;
      BigInteger.prototype.negate = bnNegate;
      BigInteger.prototype.abs = bnAbs;
      BigInteger.prototype.compareTo = bnCompareTo;
      BigInteger.prototype.bitLength = bnBitLength;
      BigInteger.prototype.mod = bnMod;
      BigInteger.prototype.modPowInt = bnModPowInt;
      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      function bnClone() {
        var r = nbi();
        this.copyTo(r);
        return r;
      }
      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1)
            return this[0] - this.DV;
          else if (this.t == 0)
            return -1;
        } else if (this.t == 1)
          return this[0];
        else if (this.t == 0)
          return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }
      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }
      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }
      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }
      function bnSigNum() {
        if (this.s < 0)
          return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
          return 0;
        else
          return 1;
      }
      function bnpToRadix(b) {
        if (b == null)
          b = 10;
        if (this.signum() == 0 || b < 2 || b > 36)
          return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a), y = nbi(), z = nbi(), r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
          r = (a + z.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
      }
      function bnpFromRadix(s, b) {
        this.fromInt(0);
        if (b == null)
          b = 10;
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0)
              mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          this.dMultiply(Math.pow(b, j));
          this.dAddOffset(w, 0);
        }
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpFromNumber(a, b, c) {
        if ("number" == typeof b) {
          if (a < 2)
            this.fromInt(1);
          else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1))
              this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven())
              this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
              this.dAddOffset(2, 0);
              if (this.bitLength() > a)
                this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
          }
        } else {
          var x = new Array(), t = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t > 0)
            x[0] &= (1 << t) - 1;
          else
            x[0] = 0;
          this.fromString(x, 256);
        }
      }
      function bnToByteArray() {
        var i = this.t, r = new Array();
        r[0] = this.s;
        var p = this.DB - i * this.DB % 8, d, k = 0;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
            r[k++] = d | this.s << this.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (this[i] & (1 << p) - 1) << 8 - p;
              d |= this[--i] >> (p += this.DB - 8);
            } else {
              d = this[i] >> (p -= 8) & 255;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if ((d & 128) != 0)
              d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128))
              ++k;
            if (k > 0 || d != this.s)
              r[k++] = d;
          }
        }
        return r;
      }
      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }
      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }
      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }
      function bnpBitwiseTo(a, op, r) {
        var i, f, m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i)
          r[i] = op(this[i], a[i]);
        if (a.t < this.t) {
          f = a.s & this.DM;
          for (i = m; i < this.t; ++i)
            r[i] = op(this[i], f);
          r.t = this.t;
        } else {
          f = this.s & this.DM;
          for (i = m; i < a.t; ++i)
            r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(this.s, a.s);
        r.clamp();
      }
      function op_and(x, y) {
        return x & y;
      }
      function bnAnd(a) {
        var r = nbi();
        this.bitwiseTo(a, op_and, r);
        return r;
      }
      function op_or(x, y) {
        return x | y;
      }
      function bnOr(a) {
        var r = nbi();
        this.bitwiseTo(a, op_or, r);
        return r;
      }
      function op_xor(x, y) {
        return x ^ y;
      }
      function bnXor(a) {
        var r = nbi();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }
      function op_andnot(x, y) {
        return x & ~y;
      }
      function bnAndNot(a) {
        var r = nbi();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }
      function bnNot() {
        var r = nbi();
        for (var i = 0; i < this.t; ++i)
          r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }
      function bnShiftLeft(n) {
        var r = nbi();
        if (n < 0)
          this.rShiftTo(-n, r);
        else
          this.lShiftTo(n, r);
        return r;
      }
      function bnShiftRight(n) {
        var r = nbi();
        if (n < 0)
          this.lShiftTo(-n, r);
        else
          this.rShiftTo(n, r);
        return r;
      }
      function lbit(x) {
        if (x == 0)
          return -1;
        var r = 0;
        if ((x & 65535) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 255) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 15) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0)
          ++r;
        return r;
      }
      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
          if (this[i] != 0)
            return i * this.DB + lbit(this[i]);
        if (this.s < 0)
          return this.t * this.DB;
        return -1;
      }
      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }
      function bnBitCount() {
        var r = 0, x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i)
          r += cbit(this[i] ^ x);
        return r;
      }
      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t)
          return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }
      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }
      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }
      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }
      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }
      function bnpAddTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] + a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c += a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0)
          r[i++] = c;
        else if (c < -1)
          r[i++] = this.DV + c;
        r.t = i;
        r.clamp();
      }
      function bnAdd(a) {
        var r = nbi();
        this.addTo(a, r);
        return r;
      }
      function bnSubtract(a) {
        var r = nbi();
        this.subTo(a, r);
        return r;
      }
      function bnMultiply(a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r;
      }
      function bnSquare() {
        var r = nbi();
        this.squareTo(r);
        return r;
      }
      function bnDivide(a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r;
      }
      function bnRemainder(a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r;
      }
      function bnDivideAndRemainder(a) {
        var q = nbi(), r = nbi();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }
      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }
      function bnpDAddOffset(n, w) {
        if (n == 0)
          return;
        while (this.t <= w)
          this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t)
            this[this.t++] = 0;
          ++this[w];
        }
      }
      function NullExp() {
      }
      function nNop(x) {
        return x;
      }
      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }
      function nSqrTo(x, r) {
        x.squareTo(r);
      }
      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;
      function bnPow(e2) {
        return this.exp(e2, new NullExp());
      }
      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0)
          r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i)
          r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i)
          this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }
      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0)
          r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i)
          r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }
      function Barrett(m) {
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }
      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t)
          return x.mod(this.m);
        else if (x.compareTo(this.m) < 0)
          return x;
        else {
          var r = nbi();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }
      function barrettRevert(x) {
        return x;
      }
      function barrettReduce(x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
          x.t = this.m.t + 1;
          x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0)
          x.dAddOffset(1, this.m.t + 1);
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;
      function bnModPow(e2, m) {
        var i = e2.bitLength(), k, r = nbv(1), z;
        if (i <= 0)
          return r;
        else if (i < 18)
          k = 1;
        else if (i < 48)
          k = 3;
        else if (i < 144)
          k = 4;
        else if (i < 768)
          k = 5;
        else
          k = 6;
        if (i < 8)
          z = new Classic(m);
        else if (m.isEven())
          z = new Barrett(m);
        else
          z = new Montgomery(m);
        var g2 = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
        g2[1] = z.convert(this);
        if (k > 1) {
          var g22 = nbi();
          z.sqrTo(g2[1], g22);
          while (n <= km) {
            g2[n] = nbi();
            z.mulTo(g22, g2[n - 2], g2[n]);
            n += 2;
          }
        }
        var j = e2.t - 1, w, is1 = true, r2 = nbi(), t;
        i = nbits(e2[j]) - 1;
        while (j >= 0) {
          if (i >= k1)
            w = e2[j] >> i - k1 & km;
          else {
            w = (e2[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0)
              w |= e2[j - 1] >> this.DB + i - k1;
          }
          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g2[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z.sqrTo(r, r2);
              z.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0)
              z.sqrTo(r, r2);
            else {
              t = r;
              r = r2;
              r2 = t;
            }
            z.mulTo(r2, g2[w], r);
          }
          while (j >= 0 && (e2[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z.revert(r);
      }
      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t = x;
          x = y;
          y = t;
        }
        var i = x.getLowestSetBit(), g2 = y.getLowestSetBit();
        if (g2 < 0)
          return x;
        if (i < g2)
          g2 = i;
        if (g2 > 0) {
          x.rShiftTo(g2, x);
          y.rShiftTo(g2, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0)
            x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0)
            y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g2 > 0)
          y.lShiftTo(g2, y);
        return y;
      }
      function bnpModInt(n) {
        if (n <= 0)
          return 0;
        var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0)
          if (d == 0)
            r = this[0] % n;
          else
            for (var i = this.t - 1; i >= 0; --i)
              r = (d * r + this[i]) % n;
        return r;
      }
      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.isEven() && ac || m.signum() == 0)
          return BigInteger.ZERO;
        var u = m.clone(), v = this.clone();
        var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven())
              b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven())
              d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac)
              a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac)
              c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0)
          return BigInteger.ZERO;
        if (d.compareTo(m) >= 0)
          return d.subtract(m);
        if (d.signum() < 0)
          d.addTo(m, d);
        else
          return d;
        if (d.signum() < 0)
          return d.add(m);
        else
          return d;
      }
      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
      function bnIsProbablePrime(t) {
        var i, x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i)
            if (x[0] == lowprimes[i])
              return true;
          return false;
        }
        if (x.isEven())
          return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i], j = i + 1;
          while (j < lowprimes.length && m < lplim)
            m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j)
            if (m % lowprimes[i++] == 0)
              return false;
        }
        return x.millerRabin(t);
      }
      function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0)
          return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length)
          t = lowprimes.length;
        var a = nbi();
        for (var i = 0; i < t; ++i) {
          a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0)
                return false;
            }
            if (y.compareTo(n1) != 0)
              return false;
          }
        }
        return true;
      }
      BigInteger.prototype.chunkSize = bnpChunkSize;
      BigInteger.prototype.toRadix = bnpToRadix;
      BigInteger.prototype.fromRadix = bnpFromRadix;
      BigInteger.prototype.fromNumber = bnpFromNumber;
      BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
      BigInteger.prototype.changeBit = bnpChangeBit;
      BigInteger.prototype.addTo = bnpAddTo;
      BigInteger.prototype.dMultiply = bnpDMultiply;
      BigInteger.prototype.dAddOffset = bnpDAddOffset;
      BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
      BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
      BigInteger.prototype.modInt = bnpModInt;
      BigInteger.prototype.millerRabin = bnpMillerRabin;
      BigInteger.prototype.clone = bnClone;
      BigInteger.prototype.intValue = bnIntValue;
      BigInteger.prototype.byteValue = bnByteValue;
      BigInteger.prototype.shortValue = bnShortValue;
      BigInteger.prototype.signum = bnSigNum;
      BigInteger.prototype.toByteArray = bnToByteArray;
      BigInteger.prototype.equals = bnEquals;
      BigInteger.prototype.min = bnMin;
      BigInteger.prototype.max = bnMax;
      BigInteger.prototype.and = bnAnd;
      BigInteger.prototype.or = bnOr;
      BigInteger.prototype.xor = bnXor;
      BigInteger.prototype.andNot = bnAndNot;
      BigInteger.prototype.not = bnNot;
      BigInteger.prototype.shiftLeft = bnShiftLeft;
      BigInteger.prototype.shiftRight = bnShiftRight;
      BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
      BigInteger.prototype.bitCount = bnBitCount;
      BigInteger.prototype.testBit = bnTestBit;
      BigInteger.prototype.setBit = bnSetBit;
      BigInteger.prototype.clearBit = bnClearBit;
      BigInteger.prototype.flipBit = bnFlipBit;
      BigInteger.prototype.add = bnAdd;
      BigInteger.prototype.subtract = bnSubtract;
      BigInteger.prototype.multiply = bnMultiply;
      BigInteger.prototype.divide = bnDivide;
      BigInteger.prototype.remainder = bnRemainder;
      BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
      BigInteger.prototype.modPow = bnModPow;
      BigInteger.prototype.modInverse = bnModInverse;
      BigInteger.prototype.pow = bnPow;
      BigInteger.prototype.gcd = bnGCD;
      BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
      BigInteger.prototype.square = bnSquare;
      var Int128 = BigInteger;
      Int128.prototype.IsNegative = function() {
        if (this.compareTo(Int128.ZERO) == -1)
          return true;
        else
          return false;
      };
      Int128.op_Equality = function(val1, val2) {
        if (val1.compareTo(val2) == 0)
          return true;
        else
          return false;
      };
      Int128.op_Inequality = function(val1, val2) {
        if (val1.compareTo(val2) != 0)
          return true;
        else
          return false;
      };
      Int128.op_GreaterThan = function(val1, val2) {
        if (val1.compareTo(val2) > 0)
          return true;
        else
          return false;
      };
      Int128.op_LessThan = function(val1, val2) {
        if (val1.compareTo(val2) < 0)
          return true;
        else
          return false;
      };
      Int128.op_Addition = function(lhs, rhs) {
        return new Int128(lhs).add(new Int128(rhs));
      };
      Int128.op_Subtraction = function(lhs, rhs) {
        return new Int128(lhs).subtract(new Int128(rhs));
      };
      Int128.Int128Mul = function(lhs, rhs) {
        return new Int128(lhs).multiply(new Int128(rhs));
      };
      Int128.op_Division = function(lhs, rhs) {
        return lhs.divide(rhs);
      };
      Int128.prototype.ToDouble = function() {
        return parseFloat(this.toString());
      };
      if (typeof Inherit == "undefined") {
        Inherit = function(ce, ce2) {
          var p;
          if (typeof Object.getOwnPropertyNames == "undefined") {
            for (p in ce2.prototype)
              if (typeof ce.prototype[p] == "undefined" || ce.prototype[p] == Object.prototype[p])
                ce.prototype[p] = ce2.prototype[p];
            for (p in ce2)
              if (typeof ce[p] == "undefined")
                ce[p] = ce2[p];
            ce.$baseCtor = ce2;
          } else {
            var props = Object.getOwnPropertyNames(ce2.prototype);
            for (var i = 0; i < props.length; i++)
              if (typeof Object.getOwnPropertyDescriptor(ce.prototype, props[i]) == "undefined")
                Object.defineProperty(ce.prototype, props[i], Object.getOwnPropertyDescriptor(ce2.prototype, props[i]));
            for (p in ce2)
              if (typeof ce[p] == "undefined")
                ce[p] = ce2[p];
            ce.$baseCtor = ce2;
          }
        };
      }
      var Inherit;
      ClipperLib2.Path = function() {
        return [];
      };
      ClipperLib2.Paths = function() {
        return [];
      };
      ClipperLib2.DoublePoint = function() {
        var a = arguments;
        this.X = 0;
        this.Y = 0;
        if (a.length == 1) {
          this.X = a[0].X;
          this.Y = a[0].Y;
        } else if (a.length == 2) {
          this.X = a[0];
          this.Y = a[1];
        }
      };
      ClipperLib2.DoublePoint0 = function() {
        this.X = 0;
        this.Y = 0;
      };
      ClipperLib2.DoublePoint1 = function(dp) {
        this.X = dp.X;
        this.Y = dp.Y;
      };
      ClipperLib2.DoublePoint2 = function(x, y) {
        this.X = x;
        this.Y = y;
      };
      ClipperLib2.PolyNode = function() {
        this.m_Parent = null;
        this.m_polygon = new ClipperLib2.Path();
        this.m_Index = 0;
        this.m_jointype = 0;
        this.m_endtype = 0;
        this.m_Childs = [];
        this.IsOpen = false;
      };
      ClipperLib2.PolyNode.prototype.IsHoleNode = function() {
        var result = true;
        var node = this.m_Parent;
        while (node !== null) {
          result = !result;
          node = node.m_Parent;
        }
        return result;
      };
      ClipperLib2.PolyNode.prototype.ChildCount = function() {
        return this.m_Childs.length;
      };
      ClipperLib2.PolyNode.prototype.Contour = function() {
        return this.m_polygon;
      };
      ClipperLib2.PolyNode.prototype.AddChild = function(Child) {
        var cnt = this.m_Childs.length;
        this.m_Childs.push(Child);
        Child.m_Parent = this;
        Child.m_Index = cnt;
      };
      ClipperLib2.PolyNode.prototype.GetNext = function() {
        if (this.m_Childs.length > 0)
          return this.m_Childs[0];
        else
          return this.GetNextSiblingUp();
      };
      ClipperLib2.PolyNode.prototype.GetNextSiblingUp = function() {
        if (this.m_Parent === null)
          return null;
        else if (this.m_Index == this.m_Parent.m_Childs.length - 1)
          return this.m_Parent.GetNextSiblingUp();
        else
          return this.m_Parent.m_Childs[this.m_Index + 1];
      };
      ClipperLib2.PolyNode.prototype.Childs = function() {
        return this.m_Childs;
      };
      ClipperLib2.PolyNode.prototype.Parent = function() {
        return this.m_Parent;
      };
      ClipperLib2.PolyNode.prototype.IsHole = function() {
        return this.IsHoleNode();
      };
      ClipperLib2.PolyTree = function() {
        this.m_AllPolys = [];
        ClipperLib2.PolyNode.call(this);
      };
      ClipperLib2.PolyTree.prototype.Clear = function() {
        for (var i = 0, ilen = this.m_AllPolys.length; i < ilen; i++)
          this.m_AllPolys[i] = null;
        this.m_AllPolys.length = 0;
        this.m_Childs.length = 0;
      };
      ClipperLib2.PolyTree.prototype.GetFirst = function() {
        if (this.m_Childs.length > 0)
          return this.m_Childs[0];
        else
          return null;
      };
      ClipperLib2.PolyTree.prototype.Total = function() {
        return this.m_AllPolys.length;
      };
      Inherit(ClipperLib2.PolyTree, ClipperLib2.PolyNode);
      ClipperLib2.Math_Abs_Int64 = ClipperLib2.Math_Abs_Int32 = ClipperLib2.Math_Abs_Double = function(a) {
        return Math.abs(a);
      };
      ClipperLib2.Math_Max_Int32_Int32 = function(a, b) {
        return Math.max(a, b);
      };
      if (browser.msie || browser.opera || browser.safari)
        ClipperLib2.Cast_Int32 = function(a) {
          return a | 0;
        };
      else
        ClipperLib2.Cast_Int32 = function(a) {
          return ~~a;
        };
      if (browser.chrome)
        ClipperLib2.Cast_Int64 = function(a) {
          if (a < -2147483648 || a > 2147483647)
            return a < 0 ? Math.ceil(a) : Math.floor(a);
          else
            return ~~a;
        };
      else if (browser.firefox && typeof Number.toInteger == "function")
        ClipperLib2.Cast_Int64 = function(a) {
          return Number.toInteger(a);
        };
      else if (browser.msie7 || browser.msie8)
        ClipperLib2.Cast_Int64 = function(a) {
          return parseInt(a, 10);
        };
      else if (browser.msie)
        ClipperLib2.Cast_Int64 = function(a) {
          if (a < -2147483648 || a > 2147483647)
            return a < 0 ? Math.ceil(a) : Math.floor(a);
          return a | 0;
        };
      else
        ClipperLib2.Cast_Int64 = function(a) {
          return a < 0 ? Math.ceil(a) : Math.floor(a);
        };
      ClipperLib2.Clear = function(a) {
        a.length = 0;
      };
      ClipperLib2.PI = 3.141592653589793;
      ClipperLib2.PI2 = 2 * 3.141592653589793;
      ClipperLib2.IntPoint = function() {
        var a = arguments, alen = a.length;
        this.X = 0;
        this.Y = 0;
        if (use_xyz) {
          this.Z = 0;
          if (alen == 3) {
            this.X = a[0];
            this.Y = a[1];
            this.Z = a[2];
          } else if (alen == 2) {
            this.X = a[0];
            this.Y = a[1];
            this.Z = 0;
          } else if (alen == 1) {
            if (a[0] instanceof ClipperLib2.DoublePoint) {
              var dp = a[0];
              this.X = ClipperLib2.Clipper.Round(dp.X);
              this.Y = ClipperLib2.Clipper.Round(dp.Y);
              this.Z = 0;
            } else {
              var pt = a[0];
              if (typeof pt.Z == "undefined")
                pt.Z = 0;
              this.X = pt.X;
              this.Y = pt.Y;
              this.Z = pt.Z;
            }
          } else {
            this.X = 0;
            this.Y = 0;
            this.Z = 0;
          }
        } else {
          if (alen == 2) {
            this.X = a[0];
            this.Y = a[1];
          } else if (alen == 1) {
            if (a[0] instanceof ClipperLib2.DoublePoint) {
              var dp = a[0];
              this.X = ClipperLib2.Clipper.Round(dp.X);
              this.Y = ClipperLib2.Clipper.Round(dp.Y);
            } else {
              var pt = a[0];
              this.X = pt.X;
              this.Y = pt.Y;
            }
          } else {
            this.X = 0;
            this.Y = 0;
          }
        }
      };
      ClipperLib2.IntPoint.op_Equality = function(a, b) {
        return a.X == b.X && a.Y == b.Y;
      };
      ClipperLib2.IntPoint.op_Inequality = function(a, b) {
        return a.X != b.X || a.Y != b.Y;
      };
      if (use_xyz) {
        ClipperLib2.IntPoint0 = function() {
          this.X = 0;
          this.Y = 0;
          this.Z = 0;
        };
        ClipperLib2.IntPoint1 = function(pt) {
          this.X = pt.X;
          this.Y = pt.Y;
          this.Z = pt.Z;
        };
        ClipperLib2.IntPoint1dp = function(dp) {
          this.X = ClipperLib2.Clipper.Round(dp.X);
          this.Y = ClipperLib2.Clipper.Round(dp.Y);
          this.Z = 0;
        };
        ClipperLib2.IntPoint2 = function(x, y) {
          this.X = x;
          this.Y = y;
          this.Z = 0;
        };
        ClipperLib2.IntPoint3 = function(x, y, z) {
          this.X = x;
          this.Y = y;
          this.Z = z;
        };
      } else {
        ClipperLib2.IntPoint0 = function() {
          this.X = 0;
          this.Y = 0;
        };
        ClipperLib2.IntPoint1 = function(pt) {
          this.X = pt.X;
          this.Y = pt.Y;
        };
        ClipperLib2.IntPoint1dp = function(dp) {
          this.X = ClipperLib2.Clipper.Round(dp.X);
          this.Y = ClipperLib2.Clipper.Round(dp.Y);
        };
        ClipperLib2.IntPoint2 = function(x, y) {
          this.X = x;
          this.Y = y;
        };
      }
      ClipperLib2.IntRect = function() {
        var a = arguments, alen = a.length;
        if (alen == 4) {
          this.left = a[0];
          this.top = a[1];
          this.right = a[2];
          this.bottom = a[3];
        } else if (alen == 1) {
          this.left = ir.left;
          this.top = ir.top;
          this.right = ir.right;
          this.bottom = ir.bottom;
        } else {
          this.left = 0;
          this.top = 0;
          this.right = 0;
          this.bottom = 0;
        }
      };
      ClipperLib2.IntRect0 = function() {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
      };
      ClipperLib2.IntRect1 = function(ir2) {
        this.left = ir2.left;
        this.top = ir2.top;
        this.right = ir2.right;
        this.bottom = ir2.bottom;
      };
      ClipperLib2.IntRect4 = function(l, t, r, b) {
        this.left = l;
        this.top = t;
        this.right = r;
        this.bottom = b;
      };
      ClipperLib2.ClipType = {
        ctIntersection: 0,
        ctUnion: 1,
        ctDifference: 2,
        ctXor: 3
      };
      ClipperLib2.PolyType = {
        ptSubject: 0,
        ptClip: 1
      };
      ClipperLib2.PolyFillType = {
        pftEvenOdd: 0,
        pftNonZero: 1,
        pftPositive: 2,
        pftNegative: 3
      };
      ClipperLib2.JoinType = {
        jtSquare: 0,
        jtRound: 1,
        jtMiter: 2
      };
      ClipperLib2.EndType = {
        etOpenSquare: 0,
        etOpenRound: 1,
        etOpenButt: 2,
        etClosedLine: 3,
        etClosedPolygon: 4
      };
      if (use_deprecated)
        ClipperLib2.EndType_ = {
          etSquare: 0,
          etRound: 1,
          etButt: 2,
          etClosed: 3
        };
      ClipperLib2.EdgeSide = {
        esLeft: 0,
        esRight: 1
      };
      ClipperLib2.Direction = {
        dRightToLeft: 0,
        dLeftToRight: 1
      };
      ClipperLib2.TEdge = function() {
        this.Bot = new ClipperLib2.IntPoint();
        this.Curr = new ClipperLib2.IntPoint();
        this.Top = new ClipperLib2.IntPoint();
        this.Delta = new ClipperLib2.IntPoint();
        this.Dx = 0;
        this.PolyTyp = ClipperLib2.PolyType.ptSubject;
        this.Side = ClipperLib2.EdgeSide.esLeft;
        this.WindDelta = 0;
        this.WindCnt = 0;
        this.WindCnt2 = 0;
        this.OutIdx = 0;
        this.Next = null;
        this.Prev = null;
        this.NextInLML = null;
        this.NextInAEL = null;
        this.PrevInAEL = null;
        this.NextInSEL = null;
        this.PrevInSEL = null;
      };
      ClipperLib2.IntersectNode = function() {
        this.Edge1 = null;
        this.Edge2 = null;
        this.Pt = new ClipperLib2.IntPoint();
      };
      ClipperLib2.MyIntersectNodeSort = function() {
      };
      ClipperLib2.MyIntersectNodeSort.Compare = function(node1, node2) {
        return node2.Pt.Y - node1.Pt.Y;
      };
      ClipperLib2.LocalMinima = function() {
        this.Y = 0;
        this.LeftBound = null;
        this.RightBound = null;
        this.Next = null;
      };
      ClipperLib2.Scanbeam = function() {
        this.Y = 0;
        this.Next = null;
      };
      ClipperLib2.OutRec = function() {
        this.Idx = 0;
        this.IsHole = false;
        this.IsOpen = false;
        this.FirstLeft = null;
        this.Pts = null;
        this.BottomPt = null;
        this.PolyNode = null;
      };
      ClipperLib2.OutPt = function() {
        this.Idx = 0;
        this.Pt = new ClipperLib2.IntPoint();
        this.Next = null;
        this.Prev = null;
      };
      ClipperLib2.Join = function() {
        this.OutPt1 = null;
        this.OutPt2 = null;
        this.OffPt = new ClipperLib2.IntPoint();
      };
      ClipperLib2.ClipperBase = function() {
        this.m_MinimaList = null;
        this.m_CurrentLM = null;
        this.m_edges = new Array();
        this.m_UseFullRange = false;
        this.m_HasOpenPaths = false;
        this.PreserveCollinear = false;
        this.m_MinimaList = null;
        this.m_CurrentLM = null;
        this.m_UseFullRange = false;
        this.m_HasOpenPaths = false;
      };
      ClipperLib2.ClipperBase.horizontal = -9007199254740992;
      ClipperLib2.ClipperBase.Skip = -2;
      ClipperLib2.ClipperBase.Unassigned = -1;
      ClipperLib2.ClipperBase.tolerance = 1e-20;
      if (use_int32) {
        ClipperLib2.ClipperBase.loRange = 46340;
        ClipperLib2.ClipperBase.hiRange = 46340;
      } else {
        ClipperLib2.ClipperBase.loRange = 47453132;
        ClipperLib2.ClipperBase.hiRange = 4503599627370495;
      }
      ClipperLib2.ClipperBase.near_zero = function(val) {
        return val > -ClipperLib2.ClipperBase.tolerance && val < ClipperLib2.ClipperBase.tolerance;
      };
      ClipperLib2.ClipperBase.IsHorizontal = function(e2) {
        return e2.Delta.Y === 0;
      };
      ClipperLib2.ClipperBase.prototype.PointIsVertex = function(pt, pp) {
        var pp2 = pp;
        do {
          if (ClipperLib2.IntPoint.op_Equality(pp2.Pt, pt))
            return true;
          pp2 = pp2.Next;
        } while (pp2 != pp);
        return false;
      };
      ClipperLib2.ClipperBase.prototype.PointOnLineSegment = function(pt, linePt1, linePt2, UseFullRange) {
        if (UseFullRange)
          return pt.X == linePt1.X && pt.Y == linePt1.Y || pt.X == linePt2.X && pt.Y == linePt2.Y || pt.X > linePt1.X == pt.X < linePt2.X && pt.Y > linePt1.Y == pt.Y < linePt2.Y && Int128.op_Equality(
            Int128.Int128Mul(pt.X - linePt1.X, linePt2.Y - linePt1.Y),
            Int128.Int128Mul(linePt2.X - linePt1.X, pt.Y - linePt1.Y)
          );
        else
          return pt.X == linePt1.X && pt.Y == linePt1.Y || pt.X == linePt2.X && pt.Y == linePt2.Y || pt.X > linePt1.X == pt.X < linePt2.X && pt.Y > linePt1.Y == pt.Y < linePt2.Y && (pt.X - linePt1.X) * (linePt2.Y - linePt1.Y) == (linePt2.X - linePt1.X) * (pt.Y - linePt1.Y);
      };
      ClipperLib2.ClipperBase.prototype.PointOnPolygon = function(pt, pp, UseFullRange) {
        var pp2 = pp;
        while (true) {
          if (this.PointOnLineSegment(pt, pp2.Pt, pp2.Next.Pt, UseFullRange))
            return true;
          pp2 = pp2.Next;
          if (pp2 == pp)
            break;
        }
        return false;
      };
      ClipperLib2.ClipperBase.prototype.SlopesEqual = ClipperLib2.ClipperBase.SlopesEqual = function() {
        var a = arguments, alen = a.length;
        var e1, e2, pt1, pt2, pt3, pt4, UseFullRange;
        if (alen == 3) {
          e1 = a[0];
          e2 = a[1];
          UseFullRange = a[2];
          if (UseFullRange)
            return Int128.op_Equality(Int128.Int128Mul(e1.Delta.Y, e2.Delta.X), Int128.Int128Mul(e1.Delta.X, e2.Delta.Y));
          else
            return ClipperLib2.Cast_Int64(e1.Delta.Y * e2.Delta.X) == ClipperLib2.Cast_Int64(e1.Delta.X * e2.Delta.Y);
        } else if (alen == 4) {
          pt1 = a[0];
          pt2 = a[1];
          pt3 = a[2];
          UseFullRange = a[3];
          if (UseFullRange)
            return Int128.op_Equality(Int128.Int128Mul(pt1.Y - pt2.Y, pt2.X - pt3.X), Int128.Int128Mul(pt1.X - pt2.X, pt2.Y - pt3.Y));
          else
            return ClipperLib2.Cast_Int64((pt1.Y - pt2.Y) * (pt2.X - pt3.X)) - ClipperLib2.Cast_Int64((pt1.X - pt2.X) * (pt2.Y - pt3.Y)) === 0;
        } else {
          pt1 = a[0];
          pt2 = a[1];
          pt3 = a[2];
          pt4 = a[3];
          UseFullRange = a[4];
          if (UseFullRange)
            return Int128.op_Equality(Int128.Int128Mul(pt1.Y - pt2.Y, pt3.X - pt4.X), Int128.Int128Mul(pt1.X - pt2.X, pt3.Y - pt4.Y));
          else
            return ClipperLib2.Cast_Int64((pt1.Y - pt2.Y) * (pt3.X - pt4.X)) - ClipperLib2.Cast_Int64((pt1.X - pt2.X) * (pt3.Y - pt4.Y)) === 0;
        }
      };
      ClipperLib2.ClipperBase.SlopesEqual3 = function(e1, e2, UseFullRange) {
        if (UseFullRange)
          return Int128.op_Equality(Int128.Int128Mul(e1.Delta.Y, e2.Delta.X), Int128.Int128Mul(e1.Delta.X, e2.Delta.Y));
        else
          return ClipperLib2.Cast_Int64(e1.Delta.Y * e2.Delta.X) == ClipperLib2.Cast_Int64(e1.Delta.X * e2.Delta.Y);
      };
      ClipperLib2.ClipperBase.SlopesEqual4 = function(pt1, pt2, pt3, UseFullRange) {
        if (UseFullRange)
          return Int128.op_Equality(Int128.Int128Mul(pt1.Y - pt2.Y, pt2.X - pt3.X), Int128.Int128Mul(pt1.X - pt2.X, pt2.Y - pt3.Y));
        else
          return ClipperLib2.Cast_Int64((pt1.Y - pt2.Y) * (pt2.X - pt3.X)) - ClipperLib2.Cast_Int64((pt1.X - pt2.X) * (pt2.Y - pt3.Y)) === 0;
      };
      ClipperLib2.ClipperBase.SlopesEqual5 = function(pt1, pt2, pt3, pt4, UseFullRange) {
        if (UseFullRange)
          return Int128.op_Equality(Int128.Int128Mul(pt1.Y - pt2.Y, pt3.X - pt4.X), Int128.Int128Mul(pt1.X - pt2.X, pt3.Y - pt4.Y));
        else
          return ClipperLib2.Cast_Int64((pt1.Y - pt2.Y) * (pt3.X - pt4.X)) - ClipperLib2.Cast_Int64((pt1.X - pt2.X) * (pt3.Y - pt4.Y)) === 0;
      };
      ClipperLib2.ClipperBase.prototype.Clear = function() {
        this.DisposeLocalMinimaList();
        for (var i = 0, ilen = this.m_edges.length; i < ilen; ++i) {
          for (var j = 0, jlen = this.m_edges[i].length; j < jlen; ++j)
            this.m_edges[i][j] = null;
          ClipperLib2.Clear(this.m_edges[i]);
        }
        ClipperLib2.Clear(this.m_edges);
        this.m_UseFullRange = false;
        this.m_HasOpenPaths = false;
      };
      ClipperLib2.ClipperBase.prototype.DisposeLocalMinimaList = function() {
        while (this.m_MinimaList !== null) {
          var tmpLm = this.m_MinimaList.Next;
          this.m_MinimaList = null;
          this.m_MinimaList = tmpLm;
        }
        this.m_CurrentLM = null;
      };
      ClipperLib2.ClipperBase.prototype.RangeTest = function(Pt, useFullRange) {
        if (useFullRange.Value) {
          if (Pt.X > ClipperLib2.ClipperBase.hiRange || Pt.Y > ClipperLib2.ClipperBase.hiRange || -Pt.X > ClipperLib2.ClipperBase.hiRange || -Pt.Y > ClipperLib2.ClipperBase.hiRange)
            ClipperLib2.Error("Coordinate outside allowed range in RangeTest().");
        } else if (Pt.X > ClipperLib2.ClipperBase.loRange || Pt.Y > ClipperLib2.ClipperBase.loRange || -Pt.X > ClipperLib2.ClipperBase.loRange || -Pt.Y > ClipperLib2.ClipperBase.loRange) {
          useFullRange.Value = true;
          this.RangeTest(Pt, useFullRange);
        }
      };
      ClipperLib2.ClipperBase.prototype.InitEdge = function(e2, eNext, ePrev, pt) {
        e2.Next = eNext;
        e2.Prev = ePrev;
        e2.Curr.X = pt.X;
        e2.Curr.Y = pt.Y;
        e2.OutIdx = -1;
      };
      ClipperLib2.ClipperBase.prototype.InitEdge2 = function(e2, polyType) {
        if (e2.Curr.Y >= e2.Next.Curr.Y) {
          e2.Bot.X = e2.Curr.X;
          e2.Bot.Y = e2.Curr.Y;
          e2.Top.X = e2.Next.Curr.X;
          e2.Top.Y = e2.Next.Curr.Y;
        } else {
          e2.Top.X = e2.Curr.X;
          e2.Top.Y = e2.Curr.Y;
          e2.Bot.X = e2.Next.Curr.X;
          e2.Bot.Y = e2.Next.Curr.Y;
        }
        this.SetDx(e2);
        e2.PolyTyp = polyType;
      };
      ClipperLib2.ClipperBase.prototype.FindNextLocMin = function(E) {
        var E2;
        for (; ; ) {
          while (ClipperLib2.IntPoint.op_Inequality(E.Bot, E.Prev.Bot) || ClipperLib2.IntPoint.op_Equality(E.Curr, E.Top))
            E = E.Next;
          if (E.Dx != ClipperLib2.ClipperBase.horizontal && E.Prev.Dx != ClipperLib2.ClipperBase.horizontal)
            break;
          while (E.Prev.Dx == ClipperLib2.ClipperBase.horizontal)
            E = E.Prev;
          E2 = E;
          while (E.Dx == ClipperLib2.ClipperBase.horizontal)
            E = E.Next;
          if (E.Top.Y == E.Prev.Bot.Y)
            continue;
          if (E2.Prev.Bot.X < E.Bot.X)
            E = E2;
          break;
        }
        return E;
      };
      ClipperLib2.ClipperBase.prototype.ProcessBound = function(E, IsClockwise) {
        var EStart = E, Result = E;
        var Horz;
        var StartX;
        if (E.Dx == ClipperLib2.ClipperBase.horizontal) {
          if (IsClockwise)
            StartX = E.Prev.Bot.X;
          else
            StartX = E.Next.Bot.X;
          if (E.Bot.X != StartX)
            this.ReverseHorizontal(E);
        }
        if (Result.OutIdx != ClipperLib2.ClipperBase.Skip) {
          if (IsClockwise) {
            while (Result.Top.Y == Result.Next.Bot.Y && Result.Next.OutIdx != ClipperLib2.ClipperBase.Skip)
              Result = Result.Next;
            if (Result.Dx == ClipperLib2.ClipperBase.horizontal && Result.Next.OutIdx != ClipperLib2.ClipperBase.Skip) {
              Horz = Result;
              while (Horz.Prev.Dx == ClipperLib2.ClipperBase.horizontal)
                Horz = Horz.Prev;
              if (Horz.Prev.Top.X == Result.Next.Top.X) {
                if (!IsClockwise)
                  Result = Horz.Prev;
              } else if (Horz.Prev.Top.X > Result.Next.Top.X)
                Result = Horz.Prev;
            }
            while (E != Result) {
              E.NextInLML = E.Next;
              if (E.Dx == ClipperLib2.ClipperBase.horizontal && E != EStart && E.Bot.X != E.Prev.Top.X)
                this.ReverseHorizontal(E);
              E = E.Next;
            }
            if (E.Dx == ClipperLib2.ClipperBase.horizontal && E != EStart && E.Bot.X != E.Prev.Top.X)
              this.ReverseHorizontal(E);
            Result = Result.Next;
          } else {
            while (Result.Top.Y == Result.Prev.Bot.Y && Result.Prev.OutIdx != ClipperLib2.ClipperBase.Skip)
              Result = Result.Prev;
            if (Result.Dx == ClipperLib2.ClipperBase.horizontal && Result.Prev.OutIdx != ClipperLib2.ClipperBase.Skip) {
              Horz = Result;
              while (Horz.Next.Dx == ClipperLib2.ClipperBase.horizontal)
                Horz = Horz.Next;
              if (Horz.Next.Top.X == Result.Prev.Top.X) {
                if (!IsClockwise)
                  Result = Horz.Next;
              } else if (Horz.Next.Top.X > Result.Prev.Top.X)
                Result = Horz.Next;
            }
            while (E != Result) {
              E.NextInLML = E.Prev;
              if (E.Dx == ClipperLib2.ClipperBase.horizontal && E != EStart && E.Bot.X != E.Next.Top.X)
                this.ReverseHorizontal(E);
              E = E.Prev;
            }
            if (E.Dx == ClipperLib2.ClipperBase.horizontal && E != EStart && E.Bot.X != E.Next.Top.X)
              this.ReverseHorizontal(E);
            Result = Result.Prev;
          }
        }
        if (Result.OutIdx == ClipperLib2.ClipperBase.Skip) {
          E = Result;
          if (IsClockwise) {
            while (E.Top.Y == E.Next.Bot.Y)
              E = E.Next;
            while (E != Result && E.Dx == ClipperLib2.ClipperBase.horizontal)
              E = E.Prev;
          } else {
            while (E.Top.Y == E.Prev.Bot.Y)
              E = E.Prev;
            while (E != Result && E.Dx == ClipperLib2.ClipperBase.horizontal)
              E = E.Next;
          }
          if (E == Result) {
            if (IsClockwise)
              Result = E.Next;
            else
              Result = E.Prev;
          } else {
            if (IsClockwise)
              E = Result.Next;
            else
              E = Result.Prev;
            var locMin = new ClipperLib2.LocalMinima();
            locMin.Next = null;
            locMin.Y = E.Bot.Y;
            locMin.LeftBound = null;
            locMin.RightBound = E;
            locMin.RightBound.WindDelta = 0;
            Result = this.ProcessBound(locMin.RightBound, IsClockwise);
            this.InsertLocalMinima(locMin);
          }
        }
        return Result;
      };
      ClipperLib2.ClipperBase.prototype.AddPath = function(pg, polyType, Closed) {
        if (use_lines) {
          if (!Closed && polyType == ClipperLib2.PolyType.ptClip)
            ClipperLib2.Error("AddPath: Open paths must be subject.");
        } else {
          if (!Closed)
            ClipperLib2.Error("AddPath: Open paths have been disabled.");
        }
        var highI = pg.length - 1;
        if (Closed)
          while (highI > 0 && ClipperLib2.IntPoint.op_Equality(pg[highI], pg[0]))
            --highI;
        while (highI > 0 && ClipperLib2.IntPoint.op_Equality(pg[highI], pg[highI - 1]))
          --highI;
        if (Closed && highI < 2 || !Closed && highI < 1)
          return false;
        var edges = new Array();
        for (var i = 0; i <= highI; i++)
          edges.push(new ClipperLib2.TEdge());
        var IsFlat = true;
        edges[1].Curr.X = pg[1].X;
        edges[1].Curr.Y = pg[1].Y;
        var $1 = { Value: this.m_UseFullRange };
        this.RangeTest(pg[0], $1);
        this.m_UseFullRange = $1.Value;
        $1.Value = this.m_UseFullRange;
        this.RangeTest(pg[highI], $1);
        this.m_UseFullRange = $1.Value;
        this.InitEdge(edges[0], edges[1], edges[highI], pg[0]);
        this.InitEdge(edges[highI], edges[0], edges[highI - 1], pg[highI]);
        for (var i = highI - 1; i >= 1; --i) {
          $1.Value = this.m_UseFullRange;
          this.RangeTest(pg[i], $1);
          this.m_UseFullRange = $1.Value;
          this.InitEdge(edges[i], edges[i + 1], edges[i - 1], pg[i]);
        }
        var eStart = edges[0];
        var E = eStart, eLoopStop = eStart;
        for (; ; ) {
          if (ClipperLib2.IntPoint.op_Equality(E.Curr, E.Next.Curr)) {
            if (E == E.Next)
              break;
            if (E == eStart)
              eStart = E.Next;
            E = this.RemoveEdge(E);
            eLoopStop = E;
            continue;
          }
          if (E.Prev == E.Next)
            break;
          else if (Closed && ClipperLib2.ClipperBase.SlopesEqual(E.Prev.Curr, E.Curr, E.Next.Curr, this.m_UseFullRange) && (!this.PreserveCollinear || !this.Pt2IsBetweenPt1AndPt3(E.Prev.Curr, E.Curr, E.Next.Curr))) {
            if (E == eStart)
              eStart = E.Next;
            E = this.RemoveEdge(E);
            E = E.Prev;
            eLoopStop = E;
            continue;
          }
          E = E.Next;
          if (E == eLoopStop)
            break;
        }
        if (!Closed && E == E.Next || Closed && E.Prev == E.Next)
          return false;
        if (!Closed) {
          this.m_HasOpenPaths = true;
          eStart.Prev.OutIdx = ClipperLib2.ClipperBase.Skip;
        }
        var eHighest = eStart;
        E = eStart;
        do {
          this.InitEdge2(E, polyType);
          E = E.Next;
          if (IsFlat && E.Curr.Y != eStart.Curr.Y)
            IsFlat = false;
        } while (E != eStart);
        if (IsFlat) {
          if (Closed)
            return false;
          E.Prev.OutIdx = ClipperLib2.ClipperBase.Skip;
          if (E.Prev.Bot.X < E.Prev.Top.X)
            this.ReverseHorizontal(E.Prev);
          var locMin = new ClipperLib2.LocalMinima();
          locMin.Next = null;
          locMin.Y = E.Bot.Y;
          locMin.LeftBound = null;
          locMin.RightBound = E;
          locMin.RightBound.Side = ClipperLib2.EdgeSide.esRight;
          locMin.RightBound.WindDelta = 0;
          while (E.Next.OutIdx != ClipperLib2.ClipperBase.Skip) {
            E.NextInLML = E.Next;
            if (E.Bot.X != E.Prev.Top.X)
              this.ReverseHorizontal(E);
            E = E.Next;
          }
          this.InsertLocalMinima(locMin);
          this.m_edges.push(edges);
          return true;
        }
        this.m_edges.push(edges);
        var clockwise;
        var EMin = null;
        for (; ; ) {
          E = this.FindNextLocMin(E);
          if (E == EMin)
            break;
          else if (EMin == null)
            EMin = E;
          var locMin = new ClipperLib2.LocalMinima();
          locMin.Next = null;
          locMin.Y = E.Bot.Y;
          if (E.Dx < E.Prev.Dx) {
            locMin.LeftBound = E.Prev;
            locMin.RightBound = E;
            clockwise = false;
          } else {
            locMin.LeftBound = E;
            locMin.RightBound = E.Prev;
            clockwise = true;
          }
          locMin.LeftBound.Side = ClipperLib2.EdgeSide.esLeft;
          locMin.RightBound.Side = ClipperLib2.EdgeSide.esRight;
          if (!Closed)
            locMin.LeftBound.WindDelta = 0;
          else if (locMin.LeftBound.Next == locMin.RightBound)
            locMin.LeftBound.WindDelta = -1;
          else
            locMin.LeftBound.WindDelta = 1;
          locMin.RightBound.WindDelta = -locMin.LeftBound.WindDelta;
          E = this.ProcessBound(locMin.LeftBound, clockwise);
          var E2 = this.ProcessBound(locMin.RightBound, !clockwise);
          if (locMin.LeftBound.OutIdx == ClipperLib2.ClipperBase.Skip)
            locMin.LeftBound = null;
          else if (locMin.RightBound.OutIdx == ClipperLib2.ClipperBase.Skip)
            locMin.RightBound = null;
          this.InsertLocalMinima(locMin);
          if (!clockwise)
            E = E2;
        }
        return true;
      };
      ClipperLib2.ClipperBase.prototype.AddPaths = function(ppg, polyType, closed) {
        var result = false;
        for (var i = 0, ilen = ppg.length; i < ilen; ++i)
          if (this.AddPath(ppg[i], polyType, closed))
            result = true;
        return result;
      };
      ClipperLib2.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function(pt1, pt2, pt3) {
        if (ClipperLib2.IntPoint.op_Equality(pt1, pt3) || ClipperLib2.IntPoint.op_Equality(pt1, pt2) || ClipperLib2.IntPoint.op_Equality(pt3, pt2))
          return false;
        else if (pt1.X != pt3.X)
          return pt2.X > pt1.X == pt2.X < pt3.X;
        else
          return pt2.Y > pt1.Y == pt2.Y < pt3.Y;
      };
      ClipperLib2.ClipperBase.prototype.RemoveEdge = function(e2) {
        e2.Prev.Next = e2.Next;
        e2.Next.Prev = e2.Prev;
        var result = e2.Next;
        e2.Prev = null;
        return result;
      };
      ClipperLib2.ClipperBase.prototype.SetDx = function(e2) {
        e2.Delta.X = e2.Top.X - e2.Bot.X;
        e2.Delta.Y = e2.Top.Y - e2.Bot.Y;
        if (e2.Delta.Y === 0)
          e2.Dx = ClipperLib2.ClipperBase.horizontal;
        else
          e2.Dx = e2.Delta.X / e2.Delta.Y;
      };
      ClipperLib2.ClipperBase.prototype.InsertLocalMinima = function(newLm) {
        if (this.m_MinimaList === null) {
          this.m_MinimaList = newLm;
        } else if (newLm.Y >= this.m_MinimaList.Y) {
          newLm.Next = this.m_MinimaList;
          this.m_MinimaList = newLm;
        } else {
          var tmpLm = this.m_MinimaList;
          while (tmpLm.Next !== null && newLm.Y < tmpLm.Next.Y)
            tmpLm = tmpLm.Next;
          newLm.Next = tmpLm.Next;
          tmpLm.Next = newLm;
        }
      };
      ClipperLib2.ClipperBase.prototype.PopLocalMinima = function() {
        if (this.m_CurrentLM === null)
          return;
        this.m_CurrentLM = this.m_CurrentLM.Next;
      };
      ClipperLib2.ClipperBase.prototype.ReverseHorizontal = function(e2) {
        var tmp = e2.Top.X;
        e2.Top.X = e2.Bot.X;
        e2.Bot.X = tmp;
        if (use_xyz) {
          tmp = e2.Top.Z;
          e2.Top.Z = e2.Bot.Z;
          e2.Bot.Z = tmp;
        }
      };
      ClipperLib2.ClipperBase.prototype.Reset = function() {
        this.m_CurrentLM = this.m_MinimaList;
        if (this.m_CurrentLM == null)
          return;
        var lm = this.m_MinimaList;
        while (lm != null) {
          var e2 = lm.LeftBound;
          if (e2 != null) {
            e2.Curr.X = e2.Bot.X;
            e2.Curr.Y = e2.Bot.Y;
            e2.Side = ClipperLib2.EdgeSide.esLeft;
            e2.OutIdx = ClipperLib2.ClipperBase.Unassigned;
          }
          e2 = lm.RightBound;
          if (e2 != null) {
            e2.Curr.X = e2.Bot.X;
            e2.Curr.Y = e2.Bot.Y;
            e2.Side = ClipperLib2.EdgeSide.esRight;
            e2.OutIdx = ClipperLib2.ClipperBase.Unassigned;
          }
          lm = lm.Next;
        }
      };
      ClipperLib2.Clipper = function(InitOptions) {
        if (typeof InitOptions == "undefined")
          InitOptions = 0;
        this.m_PolyOuts = null;
        this.m_ClipType = ClipperLib2.ClipType.ctIntersection;
        this.m_Scanbeam = null;
        this.m_ActiveEdges = null;
        this.m_SortedEdges = null;
        this.m_IntersectList = null;
        this.m_IntersectNodeComparer = null;
        this.m_ExecuteLocked = false;
        this.m_ClipFillType = ClipperLib2.PolyFillType.pftEvenOdd;
        this.m_SubjFillType = ClipperLib2.PolyFillType.pftEvenOdd;
        this.m_Joins = null;
        this.m_GhostJoins = null;
        this.m_UsingPolyTree = false;
        this.ReverseSolution = false;
        this.StrictlySimple = false;
        ClipperLib2.ClipperBase.call(this);
        this.m_Scanbeam = null;
        this.m_ActiveEdges = null;
        this.m_SortedEdges = null;
        this.m_IntersectList = new Array();
        this.m_IntersectNodeComparer = ClipperLib2.MyIntersectNodeSort.Compare;
        this.m_ExecuteLocked = false;
        this.m_UsingPolyTree = false;
        this.m_PolyOuts = new Array();
        this.m_Joins = new Array();
        this.m_GhostJoins = new Array();
        this.ReverseSolution = (1 & InitOptions) !== 0;
        this.StrictlySimple = (2 & InitOptions) !== 0;
        this.PreserveCollinear = (4 & InitOptions) !== 0;
        if (use_xyz) {
          this.ZFillFunction = null;
        }
      };
      ClipperLib2.Clipper.ioReverseSolution = 1;
      ClipperLib2.Clipper.ioStrictlySimple = 2;
      ClipperLib2.Clipper.ioPreserveCollinear = 4;
      ClipperLib2.Clipper.prototype.Clear = function() {
        if (this.m_edges.length === 0)
          return;
        this.DisposeAllPolyPts();
        ClipperLib2.ClipperBase.prototype.Clear.call(this);
      };
      ClipperLib2.Clipper.prototype.DisposeScanbeamList = function() {
        while (this.m_Scanbeam !== null) {
          var sb2 = this.m_Scanbeam.Next;
          this.m_Scanbeam = null;
          this.m_Scanbeam = sb2;
        }
      };
      ClipperLib2.Clipper.prototype.Reset = function() {
        ClipperLib2.ClipperBase.prototype.Reset.call(this);
        this.m_Scanbeam = null;
        this.m_ActiveEdges = null;
        this.m_SortedEdges = null;
        var lm = this.m_MinimaList;
        while (lm !== null) {
          this.InsertScanbeam(lm.Y);
          lm = lm.Next;
        }
      };
      ClipperLib2.Clipper.prototype.InsertScanbeam = function(Y) {
        if (this.m_Scanbeam === null) {
          this.m_Scanbeam = new ClipperLib2.Scanbeam();
          this.m_Scanbeam.Next = null;
          this.m_Scanbeam.Y = Y;
        } else if (Y > this.m_Scanbeam.Y) {
          var newSb = new ClipperLib2.Scanbeam();
          newSb.Y = Y;
          newSb.Next = this.m_Scanbeam;
          this.m_Scanbeam = newSb;
        } else {
          var sb2 = this.m_Scanbeam;
          while (sb2.Next !== null && Y <= sb2.Next.Y)
            sb2 = sb2.Next;
          if (Y == sb2.Y)
            return;
          var newSb = new ClipperLib2.Scanbeam();
          newSb.Y = Y;
          newSb.Next = sb2.Next;
          sb2.Next = newSb;
        }
      };
      ClipperLib2.Clipper.prototype.Execute = function() {
        var a = arguments, alen = a.length, ispolytree = a[1] instanceof ClipperLib2.PolyTree;
        if (alen == 4 && !ispolytree) {
          var clipType = a[0], solution = a[1], subjFillType = a[2], clipFillType = a[3];
          if (this.m_ExecuteLocked)
            return false;
          if (this.m_HasOpenPaths)
            ClipperLib2.Error("Error: PolyTree struct is need for open path clipping.");
          this.m_ExecuteLocked = true;
          ClipperLib2.Clear(solution);
          this.m_SubjFillType = subjFillType;
          this.m_ClipFillType = clipFillType;
          this.m_ClipType = clipType;
          this.m_UsingPolyTree = false;
          try {
            var succeeded = this.ExecuteInternal();
            if (succeeded)
              this.BuildResult(solution);
          } finally {
            this.DisposeAllPolyPts();
            this.m_ExecuteLocked = false;
          }
          return succeeded;
        } else if (alen == 4 && ispolytree) {
          var clipType = a[0], polytree = a[1], subjFillType = a[2], clipFillType = a[3];
          if (this.m_ExecuteLocked)
            return false;
          this.m_ExecuteLocked = true;
          this.m_SubjFillType = subjFillType;
          this.m_ClipFillType = clipFillType;
          this.m_ClipType = clipType;
          this.m_UsingPolyTree = true;
          try {
            var succeeded = this.ExecuteInternal();
            if (succeeded)
              this.BuildResult2(polytree);
          } finally {
            this.DisposeAllPolyPts();
            this.m_ExecuteLocked = false;
          }
          return succeeded;
        } else if (alen == 2 && !ispolytree) {
          var clipType = a[0], solution = a[1];
          return this.Execute(clipType, solution, ClipperLib2.PolyFillType.pftEvenOdd, ClipperLib2.PolyFillType.pftEvenOdd);
        } else if (alen == 2 && ispolytree) {
          var clipType = a[0], polytree = a[1];
          return this.Execute(clipType, polytree, ClipperLib2.PolyFillType.pftEvenOdd, ClipperLib2.PolyFillType.pftEvenOdd);
        }
      };
      ClipperLib2.Clipper.prototype.FixHoleLinkage = function(outRec) {
        if (outRec.FirstLeft === null || outRec.IsHole != outRec.FirstLeft.IsHole && outRec.FirstLeft.Pts !== null)
          return;
        var orfl = outRec.FirstLeft;
        while (orfl !== null && (orfl.IsHole == outRec.IsHole || orfl.Pts === null))
          orfl = orfl.FirstLeft;
        outRec.FirstLeft = orfl;
      };
      ClipperLib2.Clipper.prototype.ExecuteInternal = function() {
        try {
          this.Reset();
          if (this.m_CurrentLM === null)
            return false;
          var botY = this.PopScanbeam();
          do {
            this.InsertLocalMinimaIntoAEL(botY);
            ClipperLib2.Clear(this.m_GhostJoins);
            this.ProcessHorizontals(false);
            if (this.m_Scanbeam === null)
              break;
            var topY = this.PopScanbeam();
            if (!this.ProcessIntersections(botY, topY))
              return false;
            this.ProcessEdgesAtTopOfScanbeam(topY);
            botY = topY;
          } while (this.m_Scanbeam !== null || this.m_CurrentLM !== null);
          for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
            var outRec = this.m_PolyOuts[i];
            if (outRec.Pts === null || outRec.IsOpen)
              continue;
            if ((outRec.IsHole ^ this.ReverseSolution) == this.Area(outRec) > 0)
              this.ReversePolyPtLinks(outRec.Pts);
          }
          this.JoinCommonEdges();
          for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
            var outRec = this.m_PolyOuts[i];
            if (outRec.Pts !== null && !outRec.IsOpen)
              this.FixupOutPolygon(outRec);
          }
          if (this.StrictlySimple)
            this.DoSimplePolygons();
          return true;
        } finally {
          ClipperLib2.Clear(this.m_Joins);
          ClipperLib2.Clear(this.m_GhostJoins);
        }
      };
      ClipperLib2.Clipper.prototype.PopScanbeam = function() {
        var Y = this.m_Scanbeam.Y;
        var sb2 = this.m_Scanbeam;
        this.m_Scanbeam = this.m_Scanbeam.Next;
        sb2 = null;
        return Y;
      };
      ClipperLib2.Clipper.prototype.DisposeAllPolyPts = function() {
        for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; ++i)
          this.DisposeOutRec(i);
        ClipperLib2.Clear(this.m_PolyOuts);
      };
      ClipperLib2.Clipper.prototype.DisposeOutRec = function(index2) {
        var outRec = this.m_PolyOuts[index2];
        if (outRec.Pts !== null)
          this.DisposeOutPts(outRec.Pts);
        outRec = null;
        this.m_PolyOuts[index2] = null;
      };
      ClipperLib2.Clipper.prototype.DisposeOutPts = function(pp) {
        if (pp === null)
          return;
        var tmpPp = null;
        pp.Prev.Next = null;
        while (pp !== null) {
          tmpPp = pp;
          pp = pp.Next;
          tmpPp = null;
        }
      };
      ClipperLib2.Clipper.prototype.AddJoin = function(Op1, Op2, OffPt) {
        var j = new ClipperLib2.Join();
        j.OutPt1 = Op1;
        j.OutPt2 = Op2;
        j.OffPt.X = OffPt.X;
        j.OffPt.Y = OffPt.Y;
        this.m_Joins.push(j);
      };
      ClipperLib2.Clipper.prototype.AddGhostJoin = function(Op, OffPt) {
        var j = new ClipperLib2.Join();
        j.OutPt1 = Op;
        j.OffPt.X = OffPt.X;
        j.OffPt.Y = OffPt.Y;
        this.m_GhostJoins.push(j);
      };
      if (use_xyz) {
        ClipperLib2.Clipper.prototype.SetZ = function(pt, e2) {
          pt.Z = 0;
          if (this.ZFillFunction !== null) {
            if (e2.OutIdx < 0)
              this.ZFillFunction(e2.Bot, e2.Top, pt);
            else
              this.ZFillFunction(e2.Top, e2.Bot, pt);
          }
        };
      }
      ClipperLib2.Clipper.prototype.InsertLocalMinimaIntoAEL = function(botY) {
        while (this.m_CurrentLM !== null && this.m_CurrentLM.Y == botY) {
          var lb = this.m_CurrentLM.LeftBound;
          var rb = this.m_CurrentLM.RightBound;
          this.PopLocalMinima();
          var Op1 = null;
          if (lb === null) {
            this.InsertEdgeIntoAEL(rb, null);
            this.SetWindingCount(rb);
            if (this.IsContributing(rb))
              Op1 = this.AddOutPt(rb, rb.Bot);
          } else if (rb == null) {
            this.InsertEdgeIntoAEL(lb, null);
            this.SetWindingCount(lb);
            if (this.IsContributing(lb))
              Op1 = this.AddOutPt(lb, lb.Bot);
            this.InsertScanbeam(lb.Top.Y);
          } else {
            this.InsertEdgeIntoAEL(lb, null);
            this.InsertEdgeIntoAEL(rb, lb);
            this.SetWindingCount(lb);
            rb.WindCnt = lb.WindCnt;
            rb.WindCnt2 = lb.WindCnt2;
            if (this.IsContributing(lb))
              Op1 = this.AddLocalMinPoly(lb, rb, lb.Bot);
            this.InsertScanbeam(lb.Top.Y);
          }
          if (rb != null) {
            if (ClipperLib2.ClipperBase.IsHorizontal(rb))
              this.AddEdgeToSEL(rb);
            else
              this.InsertScanbeam(rb.Top.Y);
          }
          if (lb == null || rb == null)
            continue;
          if (Op1 !== null && ClipperLib2.ClipperBase.IsHorizontal(rb) && this.m_GhostJoins.length > 0 && rb.WindDelta !== 0) {
            for (var i = 0, ilen = this.m_GhostJoins.length; i < ilen; i++) {
              var j = this.m_GhostJoins[i];
              if (this.HorzSegmentsOverlap(j.OutPt1.Pt, j.OffPt, rb.Bot, rb.Top))
                this.AddJoin(j.OutPt1, Op1, j.OffPt);
            }
          }
          if (lb.OutIdx >= 0 && lb.PrevInAEL !== null && lb.PrevInAEL.Curr.X == lb.Bot.X && lb.PrevInAEL.OutIdx >= 0 && ClipperLib2.ClipperBase.SlopesEqual(lb.PrevInAEL, lb, this.m_UseFullRange) && lb.WindDelta !== 0 && lb.PrevInAEL.WindDelta !== 0) {
            var Op2 = this.AddOutPt(lb.PrevInAEL, lb.Bot);
            this.AddJoin(Op1, Op2, lb.Top);
          }
          if (lb.NextInAEL != rb) {
            if (rb.OutIdx >= 0 && rb.PrevInAEL.OutIdx >= 0 && ClipperLib2.ClipperBase.SlopesEqual(rb.PrevInAEL, rb, this.m_UseFullRange) && rb.WindDelta !== 0 && rb.PrevInAEL.WindDelta !== 0) {
              var Op2 = this.AddOutPt(rb.PrevInAEL, rb.Bot);
              this.AddJoin(Op1, Op2, rb.Top);
            }
            var e2 = lb.NextInAEL;
            if (e2 !== null)
              while (e2 != rb) {
                this.IntersectEdges(rb, e2, lb.Curr, false);
                e2 = e2.NextInAEL;
              }
          }
        }
      };
      ClipperLib2.Clipper.prototype.InsertEdgeIntoAEL = function(edge, startEdge) {
        if (this.m_ActiveEdges === null) {
          edge.PrevInAEL = null;
          edge.NextInAEL = null;
          this.m_ActiveEdges = edge;
        } else if (startEdge === null && this.E2InsertsBeforeE1(this.m_ActiveEdges, edge)) {
          edge.PrevInAEL = null;
          edge.NextInAEL = this.m_ActiveEdges;
          this.m_ActiveEdges.PrevInAEL = edge;
          this.m_ActiveEdges = edge;
        } else {
          if (startEdge === null)
            startEdge = this.m_ActiveEdges;
          while (startEdge.NextInAEL !== null && !this.E2InsertsBeforeE1(startEdge.NextInAEL, edge))
            startEdge = startEdge.NextInAEL;
          edge.NextInAEL = startEdge.NextInAEL;
          if (startEdge.NextInAEL !== null)
            startEdge.NextInAEL.PrevInAEL = edge;
          edge.PrevInAEL = startEdge;
          startEdge.NextInAEL = edge;
        }
      };
      ClipperLib2.Clipper.prototype.E2InsertsBeforeE1 = function(e1, e2) {
        if (e2.Curr.X == e1.Curr.X) {
          if (e2.Top.Y > e1.Top.Y)
            return e2.Top.X < ClipperLib2.Clipper.TopX(e1, e2.Top.Y);
          else
            return e1.Top.X > ClipperLib2.Clipper.TopX(e2, e1.Top.Y);
        } else
          return e2.Curr.X < e1.Curr.X;
      };
      ClipperLib2.Clipper.prototype.IsEvenOddFillType = function(edge) {
        if (edge.PolyTyp == ClipperLib2.PolyType.ptSubject)
          return this.m_SubjFillType == ClipperLib2.PolyFillType.pftEvenOdd;
        else
          return this.m_ClipFillType == ClipperLib2.PolyFillType.pftEvenOdd;
      };
      ClipperLib2.Clipper.prototype.IsEvenOddAltFillType = function(edge) {
        if (edge.PolyTyp == ClipperLib2.PolyType.ptSubject)
          return this.m_ClipFillType == ClipperLib2.PolyFillType.pftEvenOdd;
        else
          return this.m_SubjFillType == ClipperLib2.PolyFillType.pftEvenOdd;
      };
      ClipperLib2.Clipper.prototype.IsContributing = function(edge) {
        var pft, pft2;
        if (edge.PolyTyp == ClipperLib2.PolyType.ptSubject) {
          pft = this.m_SubjFillType;
          pft2 = this.m_ClipFillType;
        } else {
          pft = this.m_ClipFillType;
          pft2 = this.m_SubjFillType;
        }
        switch (pft) {
          case ClipperLib2.PolyFillType.pftEvenOdd:
            if (edge.WindDelta === 0 && edge.WindCnt != 1)
              return false;
            break;
          case ClipperLib2.PolyFillType.pftNonZero:
            if (Math.abs(edge.WindCnt) != 1)
              return false;
            break;
          case ClipperLib2.PolyFillType.pftPositive:
            if (edge.WindCnt != 1)
              return false;
            break;
          default:
            if (edge.WindCnt != -1)
              return false;
            break;
        }
        switch (this.m_ClipType) {
          case ClipperLib2.ClipType.ctIntersection:
            switch (pft2) {
              case ClipperLib2.PolyFillType.pftEvenOdd:
              case ClipperLib2.PolyFillType.pftNonZero:
                return edge.WindCnt2 !== 0;
              case ClipperLib2.PolyFillType.pftPositive:
                return edge.WindCnt2 > 0;
              default:
                return edge.WindCnt2 < 0;
            }
          case ClipperLib2.ClipType.ctUnion:
            switch (pft2) {
              case ClipperLib2.PolyFillType.pftEvenOdd:
              case ClipperLib2.PolyFillType.pftNonZero:
                return edge.WindCnt2 === 0;
              case ClipperLib2.PolyFillType.pftPositive:
                return edge.WindCnt2 <= 0;
              default:
                return edge.WindCnt2 >= 0;
            }
          case ClipperLib2.ClipType.ctDifference:
            if (edge.PolyTyp == ClipperLib2.PolyType.ptSubject)
              switch (pft2) {
                case ClipperLib2.PolyFillType.pftEvenOdd:
                case ClipperLib2.PolyFillType.pftNonZero:
                  return edge.WindCnt2 === 0;
                case ClipperLib2.PolyFillType.pftPositive:
                  return edge.WindCnt2 <= 0;
                default:
                  return edge.WindCnt2 >= 0;
              }
            else
              switch (pft2) {
                case ClipperLib2.PolyFillType.pftEvenOdd:
                case ClipperLib2.PolyFillType.pftNonZero:
                  return edge.WindCnt2 !== 0;
                case ClipperLib2.PolyFillType.pftPositive:
                  return edge.WindCnt2 > 0;
                default:
                  return edge.WindCnt2 < 0;
              }
          case ClipperLib2.ClipType.ctXor:
            if (edge.WindDelta === 0)
              switch (pft2) {
                case ClipperLib2.PolyFillType.pftEvenOdd:
                case ClipperLib2.PolyFillType.pftNonZero:
                  return edge.WindCnt2 === 0;
                case ClipperLib2.PolyFillType.pftPositive:
                  return edge.WindCnt2 <= 0;
                default:
                  return edge.WindCnt2 >= 0;
              }
            else
              return true;
        }
        return true;
      };
      ClipperLib2.Clipper.prototype.SetWindingCount = function(edge) {
        var e2 = edge.PrevInAEL;
        while (e2 !== null && (e2.PolyTyp != edge.PolyTyp || e2.WindDelta === 0))
          e2 = e2.PrevInAEL;
        if (e2 === null) {
          edge.WindCnt = edge.WindDelta === 0 ? 1 : edge.WindDelta;
          edge.WindCnt2 = 0;
          e2 = this.m_ActiveEdges;
        } else if (edge.WindDelta === 0 && this.m_ClipType != ClipperLib2.ClipType.ctUnion) {
          edge.WindCnt = 1;
          edge.WindCnt2 = e2.WindCnt2;
          e2 = e2.NextInAEL;
        } else if (this.IsEvenOddFillType(edge)) {
          if (edge.WindDelta === 0) {
            var Inside = true;
            var e22 = e2.PrevInAEL;
            while (e22 !== null) {
              if (e22.PolyTyp == e2.PolyTyp && e22.WindDelta !== 0)
                Inside = !Inside;
              e22 = e22.PrevInAEL;
            }
            edge.WindCnt = Inside ? 0 : 1;
          } else {
            edge.WindCnt = edge.WindDelta;
          }
          edge.WindCnt2 = e2.WindCnt2;
          e2 = e2.NextInAEL;
        } else {
          if (e2.WindCnt * e2.WindDelta < 0) {
            if (Math.abs(e2.WindCnt) > 1) {
              if (e2.WindDelta * edge.WindDelta < 0)
                edge.WindCnt = e2.WindCnt;
              else
                edge.WindCnt = e2.WindCnt + edge.WindDelta;
            } else
              edge.WindCnt = edge.WindDelta === 0 ? 1 : edge.WindDelta;
          } else {
            if (edge.WindDelta === 0)
              edge.WindCnt = e2.WindCnt < 0 ? e2.WindCnt - 1 : e2.WindCnt + 1;
            else if (e2.WindDelta * edge.WindDelta < 0)
              edge.WindCnt = e2.WindCnt;
            else
              edge.WindCnt = e2.WindCnt + edge.WindDelta;
          }
          edge.WindCnt2 = e2.WindCnt2;
          e2 = e2.NextInAEL;
        }
        if (this.IsEvenOddAltFillType(edge)) {
          while (e2 != edge) {
            if (e2.WindDelta !== 0)
              edge.WindCnt2 = edge.WindCnt2 === 0 ? 1 : 0;
            e2 = e2.NextInAEL;
          }
        } else {
          while (e2 != edge) {
            edge.WindCnt2 += e2.WindDelta;
            e2 = e2.NextInAEL;
          }
        }
      };
      ClipperLib2.Clipper.prototype.AddEdgeToSEL = function(edge) {
        if (this.m_SortedEdges === null) {
          this.m_SortedEdges = edge;
          edge.PrevInSEL = null;
          edge.NextInSEL = null;
        } else {
          edge.NextInSEL = this.m_SortedEdges;
          edge.PrevInSEL = null;
          this.m_SortedEdges.PrevInSEL = edge;
          this.m_SortedEdges = edge;
        }
      };
      ClipperLib2.Clipper.prototype.CopyAELToSEL = function() {
        var e2 = this.m_ActiveEdges;
        this.m_SortedEdges = e2;
        while (e2 !== null) {
          e2.PrevInSEL = e2.PrevInAEL;
          e2.NextInSEL = e2.NextInAEL;
          e2 = e2.NextInAEL;
        }
      };
      ClipperLib2.Clipper.prototype.SwapPositionsInAEL = function(edge1, edge2) {
        if (edge1.NextInAEL == edge1.PrevInAEL || edge2.NextInAEL == edge2.PrevInAEL)
          return;
        if (edge1.NextInAEL == edge2) {
          var next = edge2.NextInAEL;
          if (next !== null)
            next.PrevInAEL = edge1;
          var prev = edge1.PrevInAEL;
          if (prev !== null)
            prev.NextInAEL = edge2;
          edge2.PrevInAEL = prev;
          edge2.NextInAEL = edge1;
          edge1.PrevInAEL = edge2;
          edge1.NextInAEL = next;
        } else if (edge2.NextInAEL == edge1) {
          var next = edge1.NextInAEL;
          if (next !== null)
            next.PrevInAEL = edge2;
          var prev = edge2.PrevInAEL;
          if (prev !== null)
            prev.NextInAEL = edge1;
          edge1.PrevInAEL = prev;
          edge1.NextInAEL = edge2;
          edge2.PrevInAEL = edge1;
          edge2.NextInAEL = next;
        } else {
          var next = edge1.NextInAEL;
          var prev = edge1.PrevInAEL;
          edge1.NextInAEL = edge2.NextInAEL;
          if (edge1.NextInAEL !== null)
            edge1.NextInAEL.PrevInAEL = edge1;
          edge1.PrevInAEL = edge2.PrevInAEL;
          if (edge1.PrevInAEL !== null)
            edge1.PrevInAEL.NextInAEL = edge1;
          edge2.NextInAEL = next;
          if (edge2.NextInAEL !== null)
            edge2.NextInAEL.PrevInAEL = edge2;
          edge2.PrevInAEL = prev;
          if (edge2.PrevInAEL !== null)
            edge2.PrevInAEL.NextInAEL = edge2;
        }
        if (edge1.PrevInAEL === null)
          this.m_ActiveEdges = edge1;
        else if (edge2.PrevInAEL === null)
          this.m_ActiveEdges = edge2;
      };
      ClipperLib2.Clipper.prototype.SwapPositionsInSEL = function(edge1, edge2) {
        if (edge1.NextInSEL === null && edge1.PrevInSEL === null)
          return;
        if (edge2.NextInSEL === null && edge2.PrevInSEL === null)
          return;
        if (edge1.NextInSEL == edge2) {
          var next = edge2.NextInSEL;
          if (next !== null)
            next.PrevInSEL = edge1;
          var prev = edge1.PrevInSEL;
          if (prev !== null)
            prev.NextInSEL = edge2;
          edge2.PrevInSEL = prev;
          edge2.NextInSEL = edge1;
          edge1.PrevInSEL = edge2;
          edge1.NextInSEL = next;
        } else if (edge2.NextInSEL == edge1) {
          var next = edge1.NextInSEL;
          if (next !== null)
            next.PrevInSEL = edge2;
          var prev = edge2.PrevInSEL;
          if (prev !== null)
            prev.NextInSEL = edge1;
          edge1.PrevInSEL = prev;
          edge1.NextInSEL = edge2;
          edge2.PrevInSEL = edge1;
          edge2.NextInSEL = next;
        } else {
          var next = edge1.NextInSEL;
          var prev = edge1.PrevInSEL;
          edge1.NextInSEL = edge2.NextInSEL;
          if (edge1.NextInSEL !== null)
            edge1.NextInSEL.PrevInSEL = edge1;
          edge1.PrevInSEL = edge2.PrevInSEL;
          if (edge1.PrevInSEL !== null)
            edge1.PrevInSEL.NextInSEL = edge1;
          edge2.NextInSEL = next;
          if (edge2.NextInSEL !== null)
            edge2.NextInSEL.PrevInSEL = edge2;
          edge2.PrevInSEL = prev;
          if (edge2.PrevInSEL !== null)
            edge2.PrevInSEL.NextInSEL = edge2;
        }
        if (edge1.PrevInSEL === null)
          this.m_SortedEdges = edge1;
        else if (edge2.PrevInSEL === null)
          this.m_SortedEdges = edge2;
      };
      ClipperLib2.Clipper.prototype.AddLocalMaxPoly = function(e1, e2, pt) {
        this.AddOutPt(e1, pt);
        if (e2.WindDelta == 0)
          this.AddOutPt(e2, pt);
        if (e1.OutIdx == e2.OutIdx) {
          e1.OutIdx = -1;
          e2.OutIdx = -1;
        } else if (e1.OutIdx < e2.OutIdx)
          this.AppendPolygon(e1, e2);
        else
          this.AppendPolygon(e2, e1);
      };
      ClipperLib2.Clipper.prototype.AddLocalMinPoly = function(e1, e2, pt) {
        var result;
        var e3, prevE;
        if (ClipperLib2.ClipperBase.IsHorizontal(e2) || e1.Dx > e2.Dx) {
          result = this.AddOutPt(e1, pt);
          e2.OutIdx = e1.OutIdx;
          e1.Side = ClipperLib2.EdgeSide.esLeft;
          e2.Side = ClipperLib2.EdgeSide.esRight;
          e3 = e1;
          if (e3.PrevInAEL == e2)
            prevE = e2.PrevInAEL;
          else
            prevE = e3.PrevInAEL;
        } else {
          result = this.AddOutPt(e2, pt);
          e1.OutIdx = e2.OutIdx;
          e1.Side = ClipperLib2.EdgeSide.esRight;
          e2.Side = ClipperLib2.EdgeSide.esLeft;
          e3 = e2;
          if (e3.PrevInAEL == e1)
            prevE = e1.PrevInAEL;
          else
            prevE = e3.PrevInAEL;
        }
        if (prevE !== null && prevE.OutIdx >= 0 && ClipperLib2.Clipper.TopX(prevE, pt.Y) == ClipperLib2.Clipper.TopX(e3, pt.Y) && ClipperLib2.ClipperBase.SlopesEqual(e3, prevE, this.m_UseFullRange) && e3.WindDelta !== 0 && prevE.WindDelta !== 0) {
          var outPt = this.AddOutPt(prevE, pt);
          this.AddJoin(result, outPt, e3.Top);
        }
        return result;
      };
      ClipperLib2.Clipper.prototype.CreateOutRec = function() {
        var result = new ClipperLib2.OutRec();
        result.Idx = -1;
        result.IsHole = false;
        result.IsOpen = false;
        result.FirstLeft = null;
        result.Pts = null;
        result.BottomPt = null;
        result.PolyNode = null;
        this.m_PolyOuts.push(result);
        result.Idx = this.m_PolyOuts.length - 1;
        return result;
      };
      ClipperLib2.Clipper.prototype.AddOutPt = function(e2, pt) {
        var ToFront = e2.Side == ClipperLib2.EdgeSide.esLeft;
        if (e2.OutIdx < 0) {
          var outRec = this.CreateOutRec();
          outRec.IsOpen = e2.WindDelta === 0;
          var newOp = new ClipperLib2.OutPt();
          outRec.Pts = newOp;
          newOp.Idx = outRec.Idx;
          newOp.Pt.X = pt.X;
          newOp.Pt.Y = pt.Y;
          newOp.Next = newOp;
          newOp.Prev = newOp;
          if (!outRec.IsOpen)
            this.SetHoleState(e2, outRec);
          if (use_xyz) {
            if (ClipperLib2.IntPoint.op_Equality(pt, e2.Bot)) {
              newOp.Pt.X = e2.Bot.X;
              newOp.Pt.Y = e2.Bot.Y;
              newOp.Pt.Z = e2.Bot.Z;
            } else if (ClipperLib2.IntPoint.op_Equality(pt, e2.Top)) {
              newOp.Pt.X = e2.Top.X;
              newOp.Pt.Y = e2.Top.Y;
              newOp.Pt.Z = e2.Top.Z;
            } else
              this.SetZ(newOp.Pt, e2);
          }
          e2.OutIdx = outRec.Idx;
          return newOp;
        } else {
          var outRec = this.m_PolyOuts[e2.OutIdx];
          var op = outRec.Pts;
          if (ToFront && ClipperLib2.IntPoint.op_Equality(pt, op.Pt))
            return op;
          else if (!ToFront && ClipperLib2.IntPoint.op_Equality(pt, op.Prev.Pt))
            return op.Prev;
          var newOp = new ClipperLib2.OutPt();
          newOp.Idx = outRec.Idx;
          newOp.Pt.X = pt.X;
          newOp.Pt.Y = pt.Y;
          newOp.Next = op;
          newOp.Prev = op.Prev;
          newOp.Prev.Next = newOp;
          op.Prev = newOp;
          if (ToFront)
            outRec.Pts = newOp;
          if (use_xyz) {
            if (ClipperLib2.IntPoint.op_Equality(pt, e2.Bot)) {
              newOp.Pt.X = e2.Bot.X;
              newOp.Pt.Y = e2.Bot.Y;
              newOp.Pt.Z = e2.Bot.Z;
            } else if (ClipperLib2.IntPoint.op_Equality(pt, e2.Top)) {
              newOp.Pt.X = e2.Top.X;
              newOp.Pt.Y = e2.Top.Y;
              newOp.Pt.Z = e2.Top.Z;
            } else
              this.SetZ(newOp.Pt, e2);
          }
          return newOp;
        }
      };
      ClipperLib2.Clipper.prototype.SwapPoints = function(pt1, pt2) {
        var tmp = new ClipperLib2.IntPoint(pt1.Value);
        pt1.Value.X = pt2.Value.X;
        pt1.Value.Y = pt2.Value.Y;
        pt2.Value.X = tmp.X;
        pt2.Value.Y = tmp.Y;
      };
      ClipperLib2.Clipper.prototype.HorzSegmentsOverlap = function(Pt1a, Pt1b, Pt2a, Pt2b) {
        if (Pt1a.X > Pt2a.X == Pt1a.X < Pt2b.X)
          return true;
        else if (Pt1b.X > Pt2a.X == Pt1b.X < Pt2b.X)
          return true;
        else if (Pt2a.X > Pt1a.X == Pt2a.X < Pt1b.X)
          return true;
        else if (Pt2b.X > Pt1a.X == Pt2b.X < Pt1b.X)
          return true;
        else if (Pt1a.X == Pt2a.X && Pt1b.X == Pt2b.X)
          return true;
        else if (Pt1a.X == Pt2b.X && Pt1b.X == Pt2a.X)
          return true;
        else
          return false;
      };
      ClipperLib2.Clipper.prototype.InsertPolyPtBetween = function(p1, p2, pt) {
        var result = new ClipperLib2.OutPt();
        result.Pt.X = pt.X;
        result.Pt.Y = pt.Y;
        if (p2 == p1.Next) {
          p1.Next = result;
          p2.Prev = result;
          result.Next = p2;
          result.Prev = p1;
        } else {
          p2.Next = result;
          p1.Prev = result;
          result.Next = p1;
          result.Prev = p2;
        }
        return result;
      };
      ClipperLib2.Clipper.prototype.SetHoleState = function(e2, outRec) {
        var isHole = false;
        var e22 = e2.PrevInAEL;
        while (e22 !== null) {
          if (e22.OutIdx >= 0 && e22.WindDelta != 0) {
            isHole = !isHole;
            if (outRec.FirstLeft === null)
              outRec.FirstLeft = this.m_PolyOuts[e22.OutIdx];
          }
          e22 = e22.PrevInAEL;
        }
        if (isHole)
          outRec.IsHole = true;
      };
      ClipperLib2.Clipper.prototype.GetDx = function(pt1, pt2) {
        if (pt1.Y == pt2.Y)
          return ClipperLib2.ClipperBase.horizontal;
        else
          return (pt2.X - pt1.X) / (pt2.Y - pt1.Y);
      };
      ClipperLib2.Clipper.prototype.FirstIsBottomPt = function(btmPt1, btmPt2) {
        var p = btmPt1.Prev;
        while (ClipperLib2.IntPoint.op_Equality(p.Pt, btmPt1.Pt) && p != btmPt1)
          p = p.Prev;
        var dx1p = Math.abs(this.GetDx(btmPt1.Pt, p.Pt));
        p = btmPt1.Next;
        while (ClipperLib2.IntPoint.op_Equality(p.Pt, btmPt1.Pt) && p != btmPt1)
          p = p.Next;
        var dx1n = Math.abs(this.GetDx(btmPt1.Pt, p.Pt));
        p = btmPt2.Prev;
        while (ClipperLib2.IntPoint.op_Equality(p.Pt, btmPt2.Pt) && p != btmPt2)
          p = p.Prev;
        var dx2p = Math.abs(this.GetDx(btmPt2.Pt, p.Pt));
        p = btmPt2.Next;
        while (ClipperLib2.IntPoint.op_Equality(p.Pt, btmPt2.Pt) && p != btmPt2)
          p = p.Next;
        var dx2n = Math.abs(this.GetDx(btmPt2.Pt, p.Pt));
        return dx1p >= dx2p && dx1p >= dx2n || dx1n >= dx2p && dx1n >= dx2n;
      };
      ClipperLib2.Clipper.prototype.GetBottomPt = function(pp) {
        var dups = null;
        var p = pp.Next;
        while (p != pp) {
          if (p.Pt.Y > pp.Pt.Y) {
            pp = p;
            dups = null;
          } else if (p.Pt.Y == pp.Pt.Y && p.Pt.X <= pp.Pt.X) {
            if (p.Pt.X < pp.Pt.X) {
              dups = null;
              pp = p;
            } else {
              if (p.Next != pp && p.Prev != pp)
                dups = p;
            }
          }
          p = p.Next;
        }
        if (dups !== null) {
          while (dups != p) {
            if (!this.FirstIsBottomPt(p, dups))
              pp = dups;
            dups = dups.Next;
            while (ClipperLib2.IntPoint.op_Inequality(dups.Pt, pp.Pt))
              dups = dups.Next;
          }
        }
        return pp;
      };
      ClipperLib2.Clipper.prototype.GetLowermostRec = function(outRec1, outRec2) {
        if (outRec1.BottomPt === null)
          outRec1.BottomPt = this.GetBottomPt(outRec1.Pts);
        if (outRec2.BottomPt === null)
          outRec2.BottomPt = this.GetBottomPt(outRec2.Pts);
        var bPt1 = outRec1.BottomPt;
        var bPt2 = outRec2.BottomPt;
        if (bPt1.Pt.Y > bPt2.Pt.Y)
          return outRec1;
        else if (bPt1.Pt.Y < bPt2.Pt.Y)
          return outRec2;
        else if (bPt1.Pt.X < bPt2.Pt.X)
          return outRec1;
        else if (bPt1.Pt.X > bPt2.Pt.X)
          return outRec2;
        else if (bPt1.Next == bPt1)
          return outRec2;
        else if (bPt2.Next == bPt2)
          return outRec1;
        else if (this.FirstIsBottomPt(bPt1, bPt2))
          return outRec1;
        else
          return outRec2;
      };
      ClipperLib2.Clipper.prototype.Param1RightOfParam2 = function(outRec1, outRec2) {
        do {
          outRec1 = outRec1.FirstLeft;
          if (outRec1 == outRec2)
            return true;
        } while (outRec1 !== null);
        return false;
      };
      ClipperLib2.Clipper.prototype.GetOutRec = function(idx) {
        var outrec = this.m_PolyOuts[idx];
        while (outrec != this.m_PolyOuts[outrec.Idx])
          outrec = this.m_PolyOuts[outrec.Idx];
        return outrec;
      };
      ClipperLib2.Clipper.prototype.AppendPolygon = function(e1, e2) {
        var outRec1 = this.m_PolyOuts[e1.OutIdx];
        var outRec2 = this.m_PolyOuts[e2.OutIdx];
        var holeStateRec;
        if (this.Param1RightOfParam2(outRec1, outRec2))
          holeStateRec = outRec2;
        else if (this.Param1RightOfParam2(outRec2, outRec1))
          holeStateRec = outRec1;
        else
          holeStateRec = this.GetLowermostRec(outRec1, outRec2);
        var p1_lft = outRec1.Pts;
        var p1_rt = p1_lft.Prev;
        var p2_lft = outRec2.Pts;
        var p2_rt = p2_lft.Prev;
        var side;
        if (e1.Side == ClipperLib2.EdgeSide.esLeft) {
          if (e2.Side == ClipperLib2.EdgeSide.esLeft) {
            this.ReversePolyPtLinks(p2_lft);
            p2_lft.Next = p1_lft;
            p1_lft.Prev = p2_lft;
            p1_rt.Next = p2_rt;
            p2_rt.Prev = p1_rt;
            outRec1.Pts = p2_rt;
          } else {
            p2_rt.Next = p1_lft;
            p1_lft.Prev = p2_rt;
            p2_lft.Prev = p1_rt;
            p1_rt.Next = p2_lft;
            outRec1.Pts = p2_lft;
          }
          side = ClipperLib2.EdgeSide.esLeft;
        } else {
          if (e2.Side == ClipperLib2.EdgeSide.esRight) {
            this.ReversePolyPtLinks(p2_lft);
            p1_rt.Next = p2_rt;
            p2_rt.Prev = p1_rt;
            p2_lft.Next = p1_lft;
            p1_lft.Prev = p2_lft;
          } else {
            p1_rt.Next = p2_lft;
            p2_lft.Prev = p1_rt;
            p1_lft.Prev = p2_rt;
            p2_rt.Next = p1_lft;
          }
          side = ClipperLib2.EdgeSide.esRight;
        }
        outRec1.BottomPt = null;
        if (holeStateRec == outRec2) {
          if (outRec2.FirstLeft != outRec1)
            outRec1.FirstLeft = outRec2.FirstLeft;
          outRec1.IsHole = outRec2.IsHole;
        }
        outRec2.Pts = null;
        outRec2.BottomPt = null;
        outRec2.FirstLeft = outRec1;
        var OKIdx = e1.OutIdx;
        var ObsoleteIdx = e2.OutIdx;
        e1.OutIdx = -1;
        e2.OutIdx = -1;
        var e3 = this.m_ActiveEdges;
        while (e3 !== null) {
          if (e3.OutIdx == ObsoleteIdx) {
            e3.OutIdx = OKIdx;
            e3.Side = side;
            break;
          }
          e3 = e3.NextInAEL;
        }
        outRec2.Idx = outRec1.Idx;
      };
      ClipperLib2.Clipper.prototype.ReversePolyPtLinks = function(pp) {
        if (pp === null)
          return;
        var pp1;
        var pp2;
        pp1 = pp;
        do {
          pp2 = pp1.Next;
          pp1.Next = pp1.Prev;
          pp1.Prev = pp2;
          pp1 = pp2;
        } while (pp1 != pp);
      };
      ClipperLib2.Clipper.SwapSides = function(edge1, edge2) {
        var side = edge1.Side;
        edge1.Side = edge2.Side;
        edge2.Side = side;
      };
      ClipperLib2.Clipper.SwapPolyIndexes = function(edge1, edge2) {
        var outIdx = edge1.OutIdx;
        edge1.OutIdx = edge2.OutIdx;
        edge2.OutIdx = outIdx;
      };
      ClipperLib2.Clipper.prototype.IntersectEdges = function(e1, e2, pt, protect) {
        var e1stops = !protect && e1.NextInLML === null && e1.Top.X == pt.X && e1.Top.Y == pt.Y;
        var e2stops = !protect && e2.NextInLML === null && e2.Top.X == pt.X && e2.Top.Y == pt.Y;
        var e1Contributing = e1.OutIdx >= 0;
        var e2Contributing = e2.OutIdx >= 0;
        if (use_lines) {
          if (e1.WindDelta === 0 || e2.WindDelta === 0) {
            if (e1.WindDelta === 0 && e2.WindDelta === 0) {
              if ((e1stops || e2stops) && e1Contributing && e2Contributing)
                this.AddLocalMaxPoly(e1, e2, pt);
            } else if (e1.PolyTyp == e2.PolyTyp && e1.WindDelta != e2.WindDelta && this.m_ClipType == ClipperLib2.ClipType.ctUnion) {
              if (e1.WindDelta === 0) {
                if (e2Contributing) {
                  this.AddOutPt(e1, pt);
                  if (e1Contributing)
                    e1.OutIdx = -1;
                }
              } else {
                if (e1Contributing) {
                  this.AddOutPt(e2, pt);
                  if (e2Contributing)
                    e2.OutIdx = -1;
                }
              }
            } else if (e1.PolyTyp != e2.PolyTyp) {
              if (e1.WindDelta === 0 && Math.abs(e2.WindCnt) == 1 && (this.m_ClipType != ClipperLib2.ClipType.ctUnion || e2.WindCnt2 === 0)) {
                this.AddOutPt(e1, pt);
                if (e1Contributing)
                  e1.OutIdx = -1;
              } else if (e2.WindDelta === 0 && Math.abs(e1.WindCnt) == 1 && (this.m_ClipType != ClipperLib2.ClipType.ctUnion || e1.WindCnt2 === 0)) {
                this.AddOutPt(e2, pt);
                if (e2Contributing)
                  e2.OutIdx = -1;
              }
            }
            if (e1stops)
              if (e1.OutIdx < 0)
                this.DeleteFromAEL(e1);
              else
                ClipperLib2.Error("Error intersecting polylines");
            if (e2stops)
              if (e2.OutIdx < 0)
                this.DeleteFromAEL(e2);
              else
                ClipperLib2.Error("Error intersecting polylines");
            return;
          }
        }
        if (e1.PolyTyp == e2.PolyTyp) {
          if (this.IsEvenOddFillType(e1)) {
            var oldE1WindCnt = e1.WindCnt;
            e1.WindCnt = e2.WindCnt;
            e2.WindCnt = oldE1WindCnt;
          } else {
            if (e1.WindCnt + e2.WindDelta === 0)
              e1.WindCnt = -e1.WindCnt;
            else
              e1.WindCnt += e2.WindDelta;
            if (e2.WindCnt - e1.WindDelta === 0)
              e2.WindCnt = -e2.WindCnt;
            else
              e2.WindCnt -= e1.WindDelta;
          }
        } else {
          if (!this.IsEvenOddFillType(e2))
            e1.WindCnt2 += e2.WindDelta;
          else
            e1.WindCnt2 = e1.WindCnt2 === 0 ? 1 : 0;
          if (!this.IsEvenOddFillType(e1))
            e2.WindCnt2 -= e1.WindDelta;
          else
            e2.WindCnt2 = e2.WindCnt2 === 0 ? 1 : 0;
        }
        var e1FillType, e2FillType, e1FillType2, e2FillType2;
        if (e1.PolyTyp == ClipperLib2.PolyType.ptSubject) {
          e1FillType = this.m_SubjFillType;
          e1FillType2 = this.m_ClipFillType;
        } else {
          e1FillType = this.m_ClipFillType;
          e1FillType2 = this.m_SubjFillType;
        }
        if (e2.PolyTyp == ClipperLib2.PolyType.ptSubject) {
          e2FillType = this.m_SubjFillType;
          e2FillType2 = this.m_ClipFillType;
        } else {
          e2FillType = this.m_ClipFillType;
          e2FillType2 = this.m_SubjFillType;
        }
        var e1Wc, e2Wc;
        switch (e1FillType) {
          case ClipperLib2.PolyFillType.pftPositive:
            e1Wc = e1.WindCnt;
            break;
          case ClipperLib2.PolyFillType.pftNegative:
            e1Wc = -e1.WindCnt;
            break;
          default:
            e1Wc = Math.abs(e1.WindCnt);
            break;
        }
        switch (e2FillType) {
          case ClipperLib2.PolyFillType.pftPositive:
            e2Wc = e2.WindCnt;
            break;
          case ClipperLib2.PolyFillType.pftNegative:
            e2Wc = -e2.WindCnt;
            break;
          default:
            e2Wc = Math.abs(e2.WindCnt);
            break;
        }
        if (e1Contributing && e2Contributing) {
          if (e1stops || e2stops || e1Wc !== 0 && e1Wc != 1 || e2Wc !== 0 && e2Wc != 1 || e1.PolyTyp != e2.PolyTyp && this.m_ClipType != ClipperLib2.ClipType.ctXor)
            this.AddLocalMaxPoly(e1, e2, pt);
          else {
            this.AddOutPt(e1, pt);
            this.AddOutPt(e2, pt);
            ClipperLib2.Clipper.SwapSides(e1, e2);
            ClipperLib2.Clipper.SwapPolyIndexes(e1, e2);
          }
        } else if (e1Contributing) {
          if (e2Wc === 0 || e2Wc == 1) {
            this.AddOutPt(e1, pt);
            ClipperLib2.Clipper.SwapSides(e1, e2);
            ClipperLib2.Clipper.SwapPolyIndexes(e1, e2);
          }
        } else if (e2Contributing) {
          if (e1Wc === 0 || e1Wc == 1) {
            this.AddOutPt(e2, pt);
            ClipperLib2.Clipper.SwapSides(e1, e2);
            ClipperLib2.Clipper.SwapPolyIndexes(e1, e2);
          }
        } else if ((e1Wc === 0 || e1Wc == 1) && (e2Wc === 0 || e2Wc == 1) && !e1stops && !e2stops) {
          var e1Wc2, e2Wc2;
          switch (e1FillType2) {
            case ClipperLib2.PolyFillType.pftPositive:
              e1Wc2 = e1.WindCnt2;
              break;
            case ClipperLib2.PolyFillType.pftNegative:
              e1Wc2 = -e1.WindCnt2;
              break;
            default:
              e1Wc2 = Math.abs(e1.WindCnt2);
              break;
          }
          switch (e2FillType2) {
            case ClipperLib2.PolyFillType.pftPositive:
              e2Wc2 = e2.WindCnt2;
              break;
            case ClipperLib2.PolyFillType.pftNegative:
              e2Wc2 = -e2.WindCnt2;
              break;
            default:
              e2Wc2 = Math.abs(e2.WindCnt2);
              break;
          }
          if (e1.PolyTyp != e2.PolyTyp)
            this.AddLocalMinPoly(e1, e2, pt);
          else if (e1Wc == 1 && e2Wc == 1)
            switch (this.m_ClipType) {
              case ClipperLib2.ClipType.ctIntersection:
                if (e1Wc2 > 0 && e2Wc2 > 0)
                  this.AddLocalMinPoly(e1, e2, pt);
                break;
              case ClipperLib2.ClipType.ctUnion:
                if (e1Wc2 <= 0 && e2Wc2 <= 0)
                  this.AddLocalMinPoly(e1, e2, pt);
                break;
              case ClipperLib2.ClipType.ctDifference:
                if (e1.PolyTyp == ClipperLib2.PolyType.ptClip && e1Wc2 > 0 && e2Wc2 > 0 || e1.PolyTyp == ClipperLib2.PolyType.ptSubject && e1Wc2 <= 0 && e2Wc2 <= 0)
                  this.AddLocalMinPoly(e1, e2, pt);
                break;
              case ClipperLib2.ClipType.ctXor:
                this.AddLocalMinPoly(e1, e2, pt);
                break;
            }
          else
            ClipperLib2.Clipper.SwapSides(e1, e2);
        }
        if (e1stops != e2stops && (e1stops && e1.OutIdx >= 0 || e2stops && e2.OutIdx >= 0)) {
          ClipperLib2.Clipper.SwapSides(e1, e2);
          ClipperLib2.Clipper.SwapPolyIndexes(e1, e2);
        }
        if (e1stops)
          this.DeleteFromAEL(e1);
        if (e2stops)
          this.DeleteFromAEL(e2);
      };
      ClipperLib2.Clipper.prototype.DeleteFromAEL = function(e2) {
        var AelPrev = e2.PrevInAEL;
        var AelNext = e2.NextInAEL;
        if (AelPrev === null && AelNext === null && e2 != this.m_ActiveEdges)
          return;
        if (AelPrev !== null)
          AelPrev.NextInAEL = AelNext;
        else
          this.m_ActiveEdges = AelNext;
        if (AelNext !== null)
          AelNext.PrevInAEL = AelPrev;
        e2.NextInAEL = null;
        e2.PrevInAEL = null;
      };
      ClipperLib2.Clipper.prototype.DeleteFromSEL = function(e2) {
        var SelPrev = e2.PrevInSEL;
        var SelNext = e2.NextInSEL;
        if (SelPrev === null && SelNext === null && e2 != this.m_SortedEdges)
          return;
        if (SelPrev !== null)
          SelPrev.NextInSEL = SelNext;
        else
          this.m_SortedEdges = SelNext;
        if (SelNext !== null)
          SelNext.PrevInSEL = SelPrev;
        e2.NextInSEL = null;
        e2.PrevInSEL = null;
      };
      ClipperLib2.Clipper.prototype.UpdateEdgeIntoAEL = function(e2) {
        if (e2.NextInLML === null)
          ClipperLib2.Error("UpdateEdgeIntoAEL: invalid call");
        var AelPrev = e2.PrevInAEL;
        var AelNext = e2.NextInAEL;
        e2.NextInLML.OutIdx = e2.OutIdx;
        if (AelPrev !== null)
          AelPrev.NextInAEL = e2.NextInLML;
        else
          this.m_ActiveEdges = e2.NextInLML;
        if (AelNext !== null)
          AelNext.PrevInAEL = e2.NextInLML;
        e2.NextInLML.Side = e2.Side;
        e2.NextInLML.WindDelta = e2.WindDelta;
        e2.NextInLML.WindCnt = e2.WindCnt;
        e2.NextInLML.WindCnt2 = e2.WindCnt2;
        e2 = e2.NextInLML;
        e2.Curr.X = e2.Bot.X;
        e2.Curr.Y = e2.Bot.Y;
        e2.PrevInAEL = AelPrev;
        e2.NextInAEL = AelNext;
        if (!ClipperLib2.ClipperBase.IsHorizontal(e2))
          this.InsertScanbeam(e2.Top.Y);
        return e2;
      };
      ClipperLib2.Clipper.prototype.ProcessHorizontals = function(isTopOfScanbeam) {
        var horzEdge = this.m_SortedEdges;
        while (horzEdge !== null) {
          this.DeleteFromSEL(horzEdge);
          this.ProcessHorizontal(horzEdge, isTopOfScanbeam);
          horzEdge = this.m_SortedEdges;
        }
      };
      ClipperLib2.Clipper.prototype.GetHorzDirection = function(HorzEdge, $var) {
        if (HorzEdge.Bot.X < HorzEdge.Top.X) {
          $var.Left = HorzEdge.Bot.X;
          $var.Right = HorzEdge.Top.X;
          $var.Dir = ClipperLib2.Direction.dLeftToRight;
        } else {
          $var.Left = HorzEdge.Top.X;
          $var.Right = HorzEdge.Bot.X;
          $var.Dir = ClipperLib2.Direction.dRightToLeft;
        }
      };
      ClipperLib2.Clipper.prototype.PrepareHorzJoins = function(horzEdge, isTopOfScanbeam) {
        var outPt = this.m_PolyOuts[horzEdge.OutIdx].Pts;
        if (horzEdge.Side != ClipperLib2.EdgeSide.esLeft)
          outPt = outPt.Prev;
        if (isTopOfScanbeam)
          if (ClipperLib2.IntPoint.op_Equality(outPt.Pt, horzEdge.Top))
            this.AddGhostJoin(outPt, horzEdge.Bot);
          else
            this.AddGhostJoin(outPt, horzEdge.Top);
      };
      ClipperLib2.Clipper.prototype.ProcessHorizontal = function(horzEdge, isTopOfScanbeam) {
        var $var = { Dir: null, Left: null, Right: null };
        this.GetHorzDirection(horzEdge, $var);
        var dir2 = $var.Dir;
        var horzLeft = $var.Left;
        var horzRight = $var.Right;
        var eLastHorz = horzEdge, eMaxPair = null;
        while (eLastHorz.NextInLML !== null && ClipperLib2.ClipperBase.IsHorizontal(eLastHorz.NextInLML))
          eLastHorz = eLastHorz.NextInLML;
        if (eLastHorz.NextInLML === null)
          eMaxPair = this.GetMaximaPair(eLastHorz);
        for (; ; ) {
          var IsLastHorz = horzEdge == eLastHorz;
          var e2 = this.GetNextInAEL(horzEdge, dir2);
          while (e2 !== null) {
            if (e2.Curr.X == horzEdge.Top.X && horzEdge.NextInLML !== null && e2.Dx < horzEdge.NextInLML.Dx)
              break;
            var eNext = this.GetNextInAEL(e2, dir2);
            if (dir2 == ClipperLib2.Direction.dLeftToRight && e2.Curr.X <= horzRight || dir2 == ClipperLib2.Direction.dRightToLeft && e2.Curr.X >= horzLeft) {
              if (horzEdge.OutIdx >= 0 && horzEdge.WindDelta != 0)
                this.PrepareHorzJoins(horzEdge, isTopOfScanbeam);
              if (e2 == eMaxPair && IsLastHorz) {
                if (dir2 == ClipperLib2.Direction.dLeftToRight)
                  this.IntersectEdges(horzEdge, e2, e2.Top, false);
                else
                  this.IntersectEdges(e2, horzEdge, e2.Top, false);
                if (eMaxPair.OutIdx >= 0)
                  ClipperLib2.Error("ProcessHorizontal error");
                return;
              } else if (dir2 == ClipperLib2.Direction.dLeftToRight) {
                var Pt = new ClipperLib2.IntPoint(e2.Curr.X, horzEdge.Curr.Y);
                this.IntersectEdges(horzEdge, e2, Pt, true);
              } else {
                var Pt = new ClipperLib2.IntPoint(e2.Curr.X, horzEdge.Curr.Y);
                this.IntersectEdges(e2, horzEdge, Pt, true);
              }
              this.SwapPositionsInAEL(horzEdge, e2);
            } else if (dir2 == ClipperLib2.Direction.dLeftToRight && e2.Curr.X >= horzRight || dir2 == ClipperLib2.Direction.dRightToLeft && e2.Curr.X <= horzLeft)
              break;
            e2 = eNext;
          }
          if (horzEdge.OutIdx >= 0 && horzEdge.WindDelta !== 0)
            this.PrepareHorzJoins(horzEdge, isTopOfScanbeam);
          if (horzEdge.NextInLML !== null && ClipperLib2.ClipperBase.IsHorizontal(horzEdge.NextInLML)) {
            horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
            if (horzEdge.OutIdx >= 0)
              this.AddOutPt(horzEdge, horzEdge.Bot);
            var $var = { Dir: dir2, Left: horzLeft, Right: horzRight };
            this.GetHorzDirection(horzEdge, $var);
            dir2 = $var.Dir;
            horzLeft = $var.Left;
            horzRight = $var.Right;
          } else
            break;
        }
        if (horzEdge.NextInLML !== null) {
          if (horzEdge.OutIdx >= 0) {
            var op1 = this.AddOutPt(horzEdge, horzEdge.Top);
            horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
            if (horzEdge.WindDelta === 0)
              return;
            var ePrev = horzEdge.PrevInAEL;
            var eNext = horzEdge.NextInAEL;
            if (ePrev !== null && ePrev.Curr.X == horzEdge.Bot.X && ePrev.Curr.Y == horzEdge.Bot.Y && ePrev.WindDelta !== 0 && (ePrev.OutIdx >= 0 && ePrev.Curr.Y > ePrev.Top.Y && ClipperLib2.ClipperBase.SlopesEqual(horzEdge, ePrev, this.m_UseFullRange))) {
              var op2 = this.AddOutPt(ePrev, horzEdge.Bot);
              this.AddJoin(op1, op2, horzEdge.Top);
            } else if (eNext !== null && eNext.Curr.X == horzEdge.Bot.X && eNext.Curr.Y == horzEdge.Bot.Y && eNext.WindDelta !== 0 && eNext.OutIdx >= 0 && eNext.Curr.Y > eNext.Top.Y && ClipperLib2.ClipperBase.SlopesEqual(horzEdge, eNext, this.m_UseFullRange)) {
              var op2 = this.AddOutPt(eNext, horzEdge.Bot);
              this.AddJoin(op1, op2, horzEdge.Top);
            }
          } else
            horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
        } else if (eMaxPair !== null) {
          if (eMaxPair.OutIdx >= 0) {
            if (dir2 == ClipperLib2.Direction.dLeftToRight)
              this.IntersectEdges(horzEdge, eMaxPair, horzEdge.Top, false);
            else
              this.IntersectEdges(eMaxPair, horzEdge, horzEdge.Top, false);
            if (eMaxPair.OutIdx >= 0)
              ClipperLib2.Error("ProcessHorizontal error");
          } else {
            this.DeleteFromAEL(horzEdge);
            this.DeleteFromAEL(eMaxPair);
          }
        } else {
          if (horzEdge.OutIdx >= 0)
            this.AddOutPt(horzEdge, horzEdge.Top);
          this.DeleteFromAEL(horzEdge);
        }
      };
      ClipperLib2.Clipper.prototype.GetNextInAEL = function(e2, Direction) {
        return Direction == ClipperLib2.Direction.dLeftToRight ? e2.NextInAEL : e2.PrevInAEL;
      };
      ClipperLib2.Clipper.prototype.IsMinima = function(e2) {
        return e2 !== null && e2.Prev.NextInLML != e2 && e2.Next.NextInLML != e2;
      };
      ClipperLib2.Clipper.prototype.IsMaxima = function(e2, Y) {
        return e2 !== null && e2.Top.Y == Y && e2.NextInLML === null;
      };
      ClipperLib2.Clipper.prototype.IsIntermediate = function(e2, Y) {
        return e2.Top.Y == Y && e2.NextInLML !== null;
      };
      ClipperLib2.Clipper.prototype.GetMaximaPair = function(e2) {
        var result = null;
        if (ClipperLib2.IntPoint.op_Equality(e2.Next.Top, e2.Top) && e2.Next.NextInLML === null)
          result = e2.Next;
        else if (ClipperLib2.IntPoint.op_Equality(e2.Prev.Top, e2.Top) && e2.Prev.NextInLML === null)
          result = e2.Prev;
        if (result !== null && (result.OutIdx == -2 || result.NextInAEL == result.PrevInAEL && !ClipperLib2.ClipperBase.IsHorizontal(result)))
          return null;
        return result;
      };
      ClipperLib2.Clipper.prototype.ProcessIntersections = function(botY, topY) {
        if (this.m_ActiveEdges == null)
          return true;
        try {
          this.BuildIntersectList(botY, topY);
          if (this.m_IntersectList.length == 0)
            return true;
          if (this.m_IntersectList.length == 1 || this.FixupIntersectionOrder())
            this.ProcessIntersectList();
          else
            return false;
        } catch ($$e2) {
          this.m_SortedEdges = null;
          this.m_IntersectList.length = 0;
          ClipperLib2.Error("ProcessIntersections error");
        }
        this.m_SortedEdges = null;
        return true;
      };
      ClipperLib2.Clipper.prototype.BuildIntersectList = function(botY, topY) {
        if (this.m_ActiveEdges === null)
          return;
        var e2 = this.m_ActiveEdges;
        this.m_SortedEdges = e2;
        while (e2 !== null) {
          e2.PrevInSEL = e2.PrevInAEL;
          e2.NextInSEL = e2.NextInAEL;
          e2.Curr.X = ClipperLib2.Clipper.TopX(e2, topY);
          e2 = e2.NextInAEL;
        }
        var isModified = true;
        while (isModified && this.m_SortedEdges !== null) {
          isModified = false;
          e2 = this.m_SortedEdges;
          while (e2.NextInSEL !== null) {
            var eNext = e2.NextInSEL;
            var pt = new ClipperLib2.IntPoint();
            if (e2.Curr.X > eNext.Curr.X) {
              if (!this.IntersectPoint(e2, eNext, pt) && e2.Curr.X > eNext.Curr.X + 1) {
                ClipperLib2.Error("Intersection error");
              }
              if (pt.Y > botY) {
                pt.Y = botY;
                if (Math.abs(e2.Dx) > Math.abs(eNext.Dx))
                  pt.X = ClipperLib2.Clipper.TopX(eNext, botY);
                else
                  pt.X = ClipperLib2.Clipper.TopX(e2, botY);
              }
              var newNode = new ClipperLib2.IntersectNode();
              newNode.Edge1 = e2;
              newNode.Edge2 = eNext;
              newNode.Pt.X = pt.X;
              newNode.Pt.Y = pt.Y;
              this.m_IntersectList.push(newNode);
              this.SwapPositionsInSEL(e2, eNext);
              isModified = true;
            } else
              e2 = eNext;
          }
          if (e2.PrevInSEL !== null)
            e2.PrevInSEL.NextInSEL = null;
          else
            break;
        }
        this.m_SortedEdges = null;
      };
      ClipperLib2.Clipper.prototype.EdgesAdjacent = function(inode) {
        return inode.Edge1.NextInSEL == inode.Edge2 || inode.Edge1.PrevInSEL == inode.Edge2;
      };
      ClipperLib2.Clipper.IntersectNodeSort = function(node1, node2) {
        return node2.Pt.Y - node1.Pt.Y;
      };
      ClipperLib2.Clipper.prototype.FixupIntersectionOrder = function() {
        this.m_IntersectList.sort(this.m_IntersectNodeComparer);
        this.CopyAELToSEL();
        var cnt = this.m_IntersectList.length;
        for (var i = 0; i < cnt; i++) {
          if (!this.EdgesAdjacent(this.m_IntersectList[i])) {
            var j = i + 1;
            while (j < cnt && !this.EdgesAdjacent(this.m_IntersectList[j]))
              j++;
            if (j == cnt)
              return false;
            var tmp = this.m_IntersectList[i];
            this.m_IntersectList[i] = this.m_IntersectList[j];
            this.m_IntersectList[j] = tmp;
          }
          this.SwapPositionsInSEL(this.m_IntersectList[i].Edge1, this.m_IntersectList[i].Edge2);
        }
        return true;
      };
      ClipperLib2.Clipper.prototype.ProcessIntersectList = function() {
        for (var i = 0, ilen = this.m_IntersectList.length; i < ilen; i++) {
          var iNode = this.m_IntersectList[i];
          this.IntersectEdges(iNode.Edge1, iNode.Edge2, iNode.Pt, true);
          this.SwapPositionsInAEL(iNode.Edge1, iNode.Edge2);
        }
        this.m_IntersectList.length = 0;
      };
      var R1 = function(a) {
        return a < 0 ? Math.ceil(a - 0.5) : Math.round(a);
      };
      var R2 = function(a) {
        return a < 0 ? Math.ceil(a - 0.5) : Math.floor(a + 0.5);
      };
      var R3 = function(a) {
        return a < 0 ? -Math.round(Math.abs(a)) : Math.round(a);
      };
      var R4 = function(a) {
        if (a < 0) {
          a -= 0.5;
          return a < -2147483648 ? Math.ceil(a) : a | 0;
        } else {
          a += 0.5;
          return a > 2147483647 ? Math.floor(a) : a | 0;
        }
      };
      if (browser.msie)
        ClipperLib2.Clipper.Round = R1;
      else if (browser.chromium)
        ClipperLib2.Clipper.Round = R3;
      else if (browser.safari)
        ClipperLib2.Clipper.Round = R4;
      else
        ClipperLib2.Clipper.Round = R2;
      ClipperLib2.Clipper.TopX = function(edge, currentY) {
        if (currentY == edge.Top.Y)
          return edge.Top.X;
        return edge.Bot.X + ClipperLib2.Clipper.Round(edge.Dx * (currentY - edge.Bot.Y));
      };
      ClipperLib2.Clipper.prototype.IntersectPoint = function(edge1, edge2, ip) {
        ip.X = 0;
        ip.Y = 0;
        var b1, b2;
        if (ClipperLib2.ClipperBase.SlopesEqual(edge1, edge2, this.m_UseFullRange) || edge1.Dx == edge2.Dx) {
          if (edge2.Bot.Y > edge1.Bot.Y) {
            ip.X = edge2.Bot.X;
            ip.Y = edge2.Bot.Y;
          } else {
            ip.X = edge1.Bot.X;
            ip.Y = edge1.Bot.Y;
          }
          return false;
        } else if (edge1.Delta.X === 0) {
          ip.X = edge1.Bot.X;
          if (ClipperLib2.ClipperBase.IsHorizontal(edge2)) {
            ip.Y = edge2.Bot.Y;
          } else {
            b2 = edge2.Bot.Y - edge2.Bot.X / edge2.Dx;
            ip.Y = ClipperLib2.Clipper.Round(ip.X / edge2.Dx + b2);
          }
        } else if (edge2.Delta.X === 0) {
          ip.X = edge2.Bot.X;
          if (ClipperLib2.ClipperBase.IsHorizontal(edge1)) {
            ip.Y = edge1.Bot.Y;
          } else {
            b1 = edge1.Bot.Y - edge1.Bot.X / edge1.Dx;
            ip.Y = ClipperLib2.Clipper.Round(ip.X / edge1.Dx + b1);
          }
        } else {
          b1 = edge1.Bot.X - edge1.Bot.Y * edge1.Dx;
          b2 = edge2.Bot.X - edge2.Bot.Y * edge2.Dx;
          var q = (b2 - b1) / (edge1.Dx - edge2.Dx);
          ip.Y = ClipperLib2.Clipper.Round(q);
          if (Math.abs(edge1.Dx) < Math.abs(edge2.Dx))
            ip.X = ClipperLib2.Clipper.Round(edge1.Dx * q + b1);
          else
            ip.X = ClipperLib2.Clipper.Round(edge2.Dx * q + b2);
        }
        if (ip.Y < edge1.Top.Y || ip.Y < edge2.Top.Y) {
          if (edge1.Top.Y > edge2.Top.Y) {
            ip.Y = edge1.Top.Y;
            ip.X = ClipperLib2.Clipper.TopX(edge2, edge1.Top.Y);
            return ip.X < edge1.Top.X;
          } else
            ip.Y = edge2.Top.Y;
          if (Math.abs(edge1.Dx) < Math.abs(edge2.Dx))
            ip.X = ClipperLib2.Clipper.TopX(edge1, ip.Y);
          else
            ip.X = ClipperLib2.Clipper.TopX(edge2, ip.Y);
        }
        return true;
      };
      ClipperLib2.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function(topY) {
        var e2 = this.m_ActiveEdges;
        while (e2 !== null) {
          var IsMaximaEdge = this.IsMaxima(e2, topY);
          if (IsMaximaEdge) {
            var eMaxPair = this.GetMaximaPair(e2);
            IsMaximaEdge = eMaxPair === null || !ClipperLib2.ClipperBase.IsHorizontal(eMaxPair);
          }
          if (IsMaximaEdge) {
            var ePrev = e2.PrevInAEL;
            this.DoMaxima(e2);
            if (ePrev === null)
              e2 = this.m_ActiveEdges;
            else
              e2 = ePrev.NextInAEL;
          } else {
            if (this.IsIntermediate(e2, topY) && ClipperLib2.ClipperBase.IsHorizontal(e2.NextInLML)) {
              e2 = this.UpdateEdgeIntoAEL(e2);
              if (e2.OutIdx >= 0)
                this.AddOutPt(e2, e2.Bot);
              this.AddEdgeToSEL(e2);
            } else {
              e2.Curr.X = ClipperLib2.Clipper.TopX(e2, topY);
              e2.Curr.Y = topY;
            }
            if (this.StrictlySimple) {
              var ePrev = e2.PrevInAEL;
              if (e2.OutIdx >= 0 && e2.WindDelta !== 0 && ePrev !== null && ePrev.OutIdx >= 0 && ePrev.Curr.X == e2.Curr.X && ePrev.WindDelta !== 0) {
                var op = this.AddOutPt(ePrev, e2.Curr);
                var op2 = this.AddOutPt(e2, e2.Curr);
                this.AddJoin(op, op2, e2.Curr);
              }
            }
            e2 = e2.NextInAEL;
          }
        }
        this.ProcessHorizontals(true);
        e2 = this.m_ActiveEdges;
        while (e2 !== null) {
          if (this.IsIntermediate(e2, topY)) {
            var op = null;
            if (e2.OutIdx >= 0)
              op = this.AddOutPt(e2, e2.Top);
            e2 = this.UpdateEdgeIntoAEL(e2);
            var ePrev = e2.PrevInAEL;
            var eNext = e2.NextInAEL;
            if (ePrev !== null && ePrev.Curr.X == e2.Bot.X && ePrev.Curr.Y == e2.Bot.Y && op !== null && ePrev.OutIdx >= 0 && ePrev.Curr.Y > ePrev.Top.Y && ClipperLib2.ClipperBase.SlopesEqual(e2, ePrev, this.m_UseFullRange) && e2.WindDelta !== 0 && ePrev.WindDelta !== 0) {
              var op2 = this.AddOutPt(ePrev, e2.Bot);
              this.AddJoin(op, op2, e2.Top);
            } else if (eNext !== null && eNext.Curr.X == e2.Bot.X && eNext.Curr.Y == e2.Bot.Y && op !== null && eNext.OutIdx >= 0 && eNext.Curr.Y > eNext.Top.Y && ClipperLib2.ClipperBase.SlopesEqual(e2, eNext, this.m_UseFullRange) && e2.WindDelta !== 0 && eNext.WindDelta !== 0) {
              var op2 = this.AddOutPt(eNext, e2.Bot);
              this.AddJoin(op, op2, e2.Top);
            }
          }
          e2 = e2.NextInAEL;
        }
      };
      ClipperLib2.Clipper.prototype.DoMaxima = function(e2) {
        var eMaxPair = this.GetMaximaPair(e2);
        if (eMaxPair === null) {
          if (e2.OutIdx >= 0)
            this.AddOutPt(e2, e2.Top);
          this.DeleteFromAEL(e2);
          return;
        }
        var eNext = e2.NextInAEL;
        var use_lines2 = true;
        while (eNext !== null && eNext != eMaxPair) {
          this.IntersectEdges(e2, eNext, e2.Top, true);
          this.SwapPositionsInAEL(e2, eNext);
          eNext = e2.NextInAEL;
        }
        if (e2.OutIdx == -1 && eMaxPair.OutIdx == -1) {
          this.DeleteFromAEL(e2);
          this.DeleteFromAEL(eMaxPair);
        } else if (e2.OutIdx >= 0 && eMaxPair.OutIdx >= 0) {
          this.IntersectEdges(e2, eMaxPair, e2.Top, false);
        } else if (use_lines2 && e2.WindDelta === 0) {
          if (e2.OutIdx >= 0) {
            this.AddOutPt(e2, e2.Top);
            e2.OutIdx = -1;
          }
          this.DeleteFromAEL(e2);
          if (eMaxPair.OutIdx >= 0) {
            this.AddOutPt(eMaxPair, e2.Top);
            eMaxPair.OutIdx = -1;
          }
          this.DeleteFromAEL(eMaxPair);
        } else
          ClipperLib2.Error("DoMaxima error");
      };
      ClipperLib2.Clipper.ReversePaths = function(polys) {
        for (var i = 0, len = polys.length; i < len; i++)
          polys[i].reverse();
      };
      ClipperLib2.Clipper.Orientation = function(poly) {
        return ClipperLib2.Clipper.Area(poly) >= 0;
      };
      ClipperLib2.Clipper.prototype.PointCount = function(pts) {
        if (pts === null)
          return 0;
        var result = 0;
        var p = pts;
        do {
          result++;
          p = p.Next;
        } while (p != pts);
        return result;
      };
      ClipperLib2.Clipper.prototype.BuildResult = function(polyg) {
        ClipperLib2.Clear(polyg);
        for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
          var outRec = this.m_PolyOuts[i];
          if (outRec.Pts === null)
            continue;
          var p = outRec.Pts.Prev;
          var cnt = this.PointCount(p);
          if (cnt < 2)
            continue;
          var pg = new Array(cnt);
          for (var j = 0; j < cnt; j++) {
            pg[j] = p.Pt;
            p = p.Prev;
          }
          polyg.push(pg);
        }
      };
      ClipperLib2.Clipper.prototype.BuildResult2 = function(polytree) {
        polytree.Clear();
        for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
          var outRec = this.m_PolyOuts[i];
          var cnt = this.PointCount(outRec.Pts);
          if (outRec.IsOpen && cnt < 2 || !outRec.IsOpen && cnt < 3)
            continue;
          this.FixHoleLinkage(outRec);
          var pn = new ClipperLib2.PolyNode();
          polytree.m_AllPolys.push(pn);
          outRec.PolyNode = pn;
          pn.m_polygon.length = cnt;
          var op = outRec.Pts.Prev;
          for (var j = 0; j < cnt; j++) {
            pn.m_polygon[j] = op.Pt;
            op = op.Prev;
          }
        }
        for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
          var outRec = this.m_PolyOuts[i];
          if (outRec.PolyNode === null)
            continue;
          else if (outRec.IsOpen) {
            outRec.PolyNode.IsOpen = true;
            polytree.AddChild(outRec.PolyNode);
          } else if (outRec.FirstLeft !== null && outRec.FirstLeft.PolyNode != null)
            outRec.FirstLeft.PolyNode.AddChild(outRec.PolyNode);
          else
            polytree.AddChild(outRec.PolyNode);
        }
      };
      ClipperLib2.Clipper.prototype.FixupOutPolygon = function(outRec) {
        var lastOK = null;
        outRec.BottomPt = null;
        var pp = outRec.Pts;
        for (; ; ) {
          if (pp.Prev == pp || pp.Prev == pp.Next) {
            this.DisposeOutPts(pp);
            outRec.Pts = null;
            return;
          }
          if (ClipperLib2.IntPoint.op_Equality(pp.Pt, pp.Next.Pt) || ClipperLib2.IntPoint.op_Equality(pp.Pt, pp.Prev.Pt) || ClipperLib2.ClipperBase.SlopesEqual(pp.Prev.Pt, pp.Pt, pp.Next.Pt, this.m_UseFullRange) && (!this.PreserveCollinear || !this.Pt2IsBetweenPt1AndPt3(pp.Prev.Pt, pp.Pt, pp.Next.Pt))) {
            lastOK = null;
            var tmp = pp;
            pp.Prev.Next = pp.Next;
            pp.Next.Prev = pp.Prev;
            pp = pp.Prev;
            tmp = null;
          } else if (pp == lastOK)
            break;
          else {
            if (lastOK === null)
              lastOK = pp;
            pp = pp.Next;
          }
        }
        outRec.Pts = pp;
      };
      ClipperLib2.Clipper.prototype.DupOutPt = function(outPt, InsertAfter) {
        var result = new ClipperLib2.OutPt();
        result.Pt.X = outPt.Pt.X;
        result.Pt.Y = outPt.Pt.Y;
        result.Idx = outPt.Idx;
        if (InsertAfter) {
          result.Next = outPt.Next;
          result.Prev = outPt;
          outPt.Next.Prev = result;
          outPt.Next = result;
        } else {
          result.Prev = outPt.Prev;
          result.Next = outPt;
          outPt.Prev.Next = result;
          outPt.Prev = result;
        }
        return result;
      };
      ClipperLib2.Clipper.prototype.GetOverlap = function(a1, a2, b1, b2, $val) {
        if (a1 < a2) {
          if (b1 < b2) {
            $val.Left = Math.max(a1, b1);
            $val.Right = Math.min(a2, b2);
          } else {
            $val.Left = Math.max(a1, b2);
            $val.Right = Math.min(a2, b1);
          }
        } else {
          if (b1 < b2) {
            $val.Left = Math.max(a2, b1);
            $val.Right = Math.min(a1, b2);
          } else {
            $val.Left = Math.max(a2, b2);
            $val.Right = Math.min(a1, b1);
          }
        }
        return $val.Left < $val.Right;
      };
      ClipperLib2.Clipper.prototype.JoinHorz = function(op1, op1b, op2, op2b, Pt, DiscardLeft) {
        var Dir1 = op1.Pt.X > op1b.Pt.X ? ClipperLib2.Direction.dRightToLeft : ClipperLib2.Direction.dLeftToRight;
        var Dir2 = op2.Pt.X > op2b.Pt.X ? ClipperLib2.Direction.dRightToLeft : ClipperLib2.Direction.dLeftToRight;
        if (Dir1 == Dir2)
          return false;
        if (Dir1 == ClipperLib2.Direction.dLeftToRight) {
          while (op1.Next.Pt.X <= Pt.X && op1.Next.Pt.X >= op1.Pt.X && op1.Next.Pt.Y == Pt.Y)
            op1 = op1.Next;
          if (DiscardLeft && op1.Pt.X != Pt.X)
            op1 = op1.Next;
          op1b = this.DupOutPt(op1, !DiscardLeft);
          if (ClipperLib2.IntPoint.op_Inequality(op1b.Pt, Pt)) {
            op1 = op1b;
            op1.Pt.X = Pt.X;
            op1.Pt.Y = Pt.Y;
            op1b = this.DupOutPt(op1, !DiscardLeft);
          }
        } else {
          while (op1.Next.Pt.X >= Pt.X && op1.Next.Pt.X <= op1.Pt.X && op1.Next.Pt.Y == Pt.Y)
            op1 = op1.Next;
          if (!DiscardLeft && op1.Pt.X != Pt.X)
            op1 = op1.Next;
          op1b = this.DupOutPt(op1, DiscardLeft);
          if (ClipperLib2.IntPoint.op_Inequality(op1b.Pt, Pt)) {
            op1 = op1b;
            op1.Pt.X = Pt.X;
            op1.Pt.Y = Pt.Y;
            op1b = this.DupOutPt(op1, DiscardLeft);
          }
        }
        if (Dir2 == ClipperLib2.Direction.dLeftToRight) {
          while (op2.Next.Pt.X <= Pt.X && op2.Next.Pt.X >= op2.Pt.X && op2.Next.Pt.Y == Pt.Y)
            op2 = op2.Next;
          if (DiscardLeft && op2.Pt.X != Pt.X)
            op2 = op2.Next;
          op2b = this.DupOutPt(op2, !DiscardLeft);
          if (ClipperLib2.IntPoint.op_Inequality(op2b.Pt, Pt)) {
            op2 = op2b;
            op2.Pt.X = Pt.X;
            op2.Pt.Y = Pt.Y;
            op2b = this.DupOutPt(op2, !DiscardLeft);
          }
        } else {
          while (op2.Next.Pt.X >= Pt.X && op2.Next.Pt.X <= op2.Pt.X && op2.Next.Pt.Y == Pt.Y)
            op2 = op2.Next;
          if (!DiscardLeft && op2.Pt.X != Pt.X)
            op2 = op2.Next;
          op2b = this.DupOutPt(op2, DiscardLeft);
          if (ClipperLib2.IntPoint.op_Inequality(op2b.Pt, Pt)) {
            op2 = op2b;
            op2.Pt.X = Pt.X;
            op2.Pt.Y = Pt.Y;
            op2b = this.DupOutPt(op2, DiscardLeft);
          }
        }
        if (Dir1 == ClipperLib2.Direction.dLeftToRight == DiscardLeft) {
          op1.Prev = op2;
          op2.Next = op1;
          op1b.Next = op2b;
          op2b.Prev = op1b;
        } else {
          op1.Next = op2;
          op2.Prev = op1;
          op1b.Prev = op2b;
          op2b.Next = op1b;
        }
        return true;
      };
      ClipperLib2.Clipper.prototype.JoinPoints = function(j, outRec1, outRec2) {
        var op1 = j.OutPt1, op1b = new ClipperLib2.OutPt();
        var op2 = j.OutPt2, op2b = new ClipperLib2.OutPt();
        var isHorizontal = j.OutPt1.Pt.Y == j.OffPt.Y;
        if (isHorizontal && ClipperLib2.IntPoint.op_Equality(j.OffPt, j.OutPt1.Pt) && ClipperLib2.IntPoint.op_Equality(j.OffPt, j.OutPt2.Pt)) {
          op1b = j.OutPt1.Next;
          while (op1b != op1 && ClipperLib2.IntPoint.op_Equality(op1b.Pt, j.OffPt))
            op1b = op1b.Next;
          var reverse1 = op1b.Pt.Y > j.OffPt.Y;
          op2b = j.OutPt2.Next;
          while (op2b != op2 && ClipperLib2.IntPoint.op_Equality(op2b.Pt, j.OffPt))
            op2b = op2b.Next;
          var reverse22 = op2b.Pt.Y > j.OffPt.Y;
          if (reverse1 == reverse22)
            return false;
          if (reverse1) {
            op1b = this.DupOutPt(op1, false);
            op2b = this.DupOutPt(op2, true);
            op1.Prev = op2;
            op2.Next = op1;
            op1b.Next = op2b;
            op2b.Prev = op1b;
            j.OutPt1 = op1;
            j.OutPt2 = op1b;
            return true;
          } else {
            op1b = this.DupOutPt(op1, true);
            op2b = this.DupOutPt(op2, false);
            op1.Next = op2;
            op2.Prev = op1;
            op1b.Prev = op2b;
            op2b.Next = op1b;
            j.OutPt1 = op1;
            j.OutPt2 = op1b;
            return true;
          }
        } else if (isHorizontal) {
          op1b = op1;
          while (op1.Prev.Pt.Y == op1.Pt.Y && op1.Prev != op1b && op1.Prev != op2)
            op1 = op1.Prev;
          while (op1b.Next.Pt.Y == op1b.Pt.Y && op1b.Next != op1 && op1b.Next != op2)
            op1b = op1b.Next;
          if (op1b.Next == op1 || op1b.Next == op2)
            return false;
          op2b = op2;
          while (op2.Prev.Pt.Y == op2.Pt.Y && op2.Prev != op2b && op2.Prev != op1b)
            op2 = op2.Prev;
          while (op2b.Next.Pt.Y == op2b.Pt.Y && op2b.Next != op2 && op2b.Next != op1)
            op2b = op2b.Next;
          if (op2b.Next == op2 || op2b.Next == op1)
            return false;
          var $val = { Left: null, Right: null };
          if (!this.GetOverlap(op1.Pt.X, op1b.Pt.X, op2.Pt.X, op2b.Pt.X, $val))
            return false;
          var Left = $val.Left;
          var Right = $val.Right;
          var Pt = new ClipperLib2.IntPoint();
          var DiscardLeftSide;
          if (op1.Pt.X >= Left && op1.Pt.X <= Right) {
            Pt.X = op1.Pt.X;
            Pt.Y = op1.Pt.Y;
            DiscardLeftSide = op1.Pt.X > op1b.Pt.X;
          } else if (op2.Pt.X >= Left && op2.Pt.X <= Right) {
            Pt.X = op2.Pt.X;
            Pt.Y = op2.Pt.Y;
            DiscardLeftSide = op2.Pt.X > op2b.Pt.X;
          } else if (op1b.Pt.X >= Left && op1b.Pt.X <= Right) {
            Pt.X = op1b.Pt.X;
            Pt.Y = op1b.Pt.Y;
            DiscardLeftSide = op1b.Pt.X > op1.Pt.X;
          } else {
            Pt.X = op2b.Pt.X;
            Pt.Y = op2b.Pt.Y;
            DiscardLeftSide = op2b.Pt.X > op2.Pt.X;
          }
          j.OutPt1 = op1;
          j.OutPt2 = op2;
          return this.JoinHorz(op1, op1b, op2, op2b, Pt, DiscardLeftSide);
        } else {
          op1b = op1.Next;
          while (ClipperLib2.IntPoint.op_Equality(op1b.Pt, op1.Pt) && op1b != op1)
            op1b = op1b.Next;
          var Reverse1 = op1b.Pt.Y > op1.Pt.Y || !ClipperLib2.ClipperBase.SlopesEqual(op1.Pt, op1b.Pt, j.OffPt, this.m_UseFullRange);
          if (Reverse1) {
            op1b = op1.Prev;
            while (ClipperLib2.IntPoint.op_Equality(op1b.Pt, op1.Pt) && op1b != op1)
              op1b = op1b.Prev;
            if (op1b.Pt.Y > op1.Pt.Y || !ClipperLib2.ClipperBase.SlopesEqual(op1.Pt, op1b.Pt, j.OffPt, this.m_UseFullRange))
              return false;
          }
          op2b = op2.Next;
          while (ClipperLib2.IntPoint.op_Equality(op2b.Pt, op2.Pt) && op2b != op2)
            op2b = op2b.Next;
          var Reverse2 = op2b.Pt.Y > op2.Pt.Y || !ClipperLib2.ClipperBase.SlopesEqual(op2.Pt, op2b.Pt, j.OffPt, this.m_UseFullRange);
          if (Reverse2) {
            op2b = op2.Prev;
            while (ClipperLib2.IntPoint.op_Equality(op2b.Pt, op2.Pt) && op2b != op2)
              op2b = op2b.Prev;
            if (op2b.Pt.Y > op2.Pt.Y || !ClipperLib2.ClipperBase.SlopesEqual(op2.Pt, op2b.Pt, j.OffPt, this.m_UseFullRange))
              return false;
          }
          if (op1b == op1 || op2b == op2 || op1b == op2b || outRec1 == outRec2 && Reverse1 == Reverse2)
            return false;
          if (Reverse1) {
            op1b = this.DupOutPt(op1, false);
            op2b = this.DupOutPt(op2, true);
            op1.Prev = op2;
            op2.Next = op1;
            op1b.Next = op2b;
            op2b.Prev = op1b;
            j.OutPt1 = op1;
            j.OutPt2 = op1b;
            return true;
          } else {
            op1b = this.DupOutPt(op1, true);
            op2b = this.DupOutPt(op2, false);
            op1.Next = op2;
            op2.Prev = op1;
            op1b.Prev = op2b;
            op2b.Next = op1b;
            j.OutPt1 = op1;
            j.OutPt2 = op1b;
            return true;
          }
        }
      };
      ClipperLib2.Clipper.GetBounds = function(paths) {
        var i = 0, cnt = paths.length;
        while (i < cnt && paths[i].length == 0)
          i++;
        if (i == cnt)
          return new ClipperLib2.IntRect(0, 0, 0, 0);
        var result = new ClipperLib2.IntRect();
        result.left = paths[i][0].X;
        result.right = result.left;
        result.top = paths[i][0].Y;
        result.bottom = result.top;
        for (; i < cnt; i++)
          for (var j = 0, jlen = paths[i].length; j < jlen; j++) {
            if (paths[i][j].X < result.left)
              result.left = paths[i][j].X;
            else if (paths[i][j].X > result.right)
              result.right = paths[i][j].X;
            if (paths[i][j].Y < result.top)
              result.top = paths[i][j].Y;
            else if (paths[i][j].Y > result.bottom)
              result.bottom = paths[i][j].Y;
          }
        return result;
      };
      ClipperLib2.Clipper.prototype.GetBounds2 = function(ops) {
        var opStart = ops;
        var result = new ClipperLib2.IntRect();
        result.left = ops.Pt.X;
        result.right = ops.Pt.X;
        result.top = ops.Pt.Y;
        result.bottom = ops.Pt.Y;
        ops = ops.Next;
        while (ops != opStart) {
          if (ops.Pt.X < result.left)
            result.left = ops.Pt.X;
          if (ops.Pt.X > result.right)
            result.right = ops.Pt.X;
          if (ops.Pt.Y < result.top)
            result.top = ops.Pt.Y;
          if (ops.Pt.Y > result.bottom)
            result.bottom = ops.Pt.Y;
          ops = ops.Next;
        }
        return result;
      };
      ClipperLib2.Clipper.PointInPolygon = function(pt, path) {
        var result = 0, cnt = path.length;
        if (cnt < 3)
          return 0;
        var ip = path[0];
        for (var i = 1; i <= cnt; ++i) {
          var ipNext = i == cnt ? path[0] : path[i];
          if (ipNext.Y == pt.Y) {
            if (ipNext.X == pt.X || ip.Y == pt.Y && ipNext.X > pt.X == ip.X < pt.X)
              return -1;
          }
          if (ip.Y < pt.Y != ipNext.Y < pt.Y) {
            if (ip.X >= pt.X) {
              if (ipNext.X > pt.X)
                result = 1 - result;
              else {
                var d = (ip.X - pt.X) * (ipNext.Y - pt.Y) - (ipNext.X - pt.X) * (ip.Y - pt.Y);
                if (d == 0)
                  return -1;
                else if (d > 0 == ipNext.Y > ip.Y)
                  result = 1 - result;
              }
            } else {
              if (ipNext.X > pt.X) {
                var d = (ip.X - pt.X) * (ipNext.Y - pt.Y) - (ipNext.X - pt.X) * (ip.Y - pt.Y);
                if (d == 0)
                  return -1;
                else if (d > 0 == ipNext.Y > ip.Y)
                  result = 1 - result;
              }
            }
          }
          ip = ipNext;
        }
        return result;
      };
      ClipperLib2.Clipper.prototype.PointInPolygon = function(pt, op) {
        var result = 0;
        var startOp = op;
        for (; ; ) {
          var poly0x = op.Pt.X, poly0y = op.Pt.Y;
          var poly1x = op.Next.Pt.X, poly1y = op.Next.Pt.Y;
          if (poly1y == pt.Y) {
            if (poly1x == pt.X || poly0y == pt.Y && poly1x > pt.X == poly0x < pt.X)
              return -1;
          }
          if (poly0y < pt.Y != poly1y < pt.Y) {
            if (poly0x >= pt.X) {
              if (poly1x > pt.X)
                result = 1 - result;
              else {
                var d = (poly0x - pt.X) * (poly1y - pt.Y) - (poly1x - pt.X) * (poly0y - pt.Y);
                if (d == 0)
                  return -1;
                if (d > 0 == poly1y > poly0y)
                  result = 1 - result;
              }
            } else {
              if (poly1x > pt.X) {
                var d = (poly0x - pt.X) * (poly1y - pt.Y) - (poly1x - pt.X) * (poly0y - pt.Y);
                if (d == 0)
                  return -1;
                if (d > 0 == poly1y > poly0y)
                  result = 1 - result;
              }
            }
          }
          op = op.Next;
          if (startOp == op)
            break;
        }
        return result;
      };
      ClipperLib2.Clipper.prototype.Poly2ContainsPoly1 = function(outPt1, outPt2) {
        var op = outPt1;
        do {
          var res = this.PointInPolygon(op.Pt, outPt2);
          if (res >= 0)
            return res != 0;
          op = op.Next;
        } while (op != outPt1);
        return true;
      };
      ClipperLib2.Clipper.prototype.FixupFirstLefts1 = function(OldOutRec, NewOutRec) {
        for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++) {
          var outRec = this.m_PolyOuts[i];
          if (outRec.Pts !== null && outRec.FirstLeft == OldOutRec) {
            if (this.Poly2ContainsPoly1(outRec.Pts, NewOutRec.Pts))
              outRec.FirstLeft = NewOutRec;
          }
        }
      };
      ClipperLib2.Clipper.prototype.FixupFirstLefts2 = function(OldOutRec, NewOutRec) {
        for (var $i2 = 0, $t2 = this.m_PolyOuts, $l2 = $t2.length, outRec = $t2[$i2]; $i2 < $l2; $i2++, outRec = $t2[$i2])
          if (outRec.FirstLeft == OldOutRec)
            outRec.FirstLeft = NewOutRec;
      };
      ClipperLib2.Clipper.ParseFirstLeft = function(FirstLeft) {
        while (FirstLeft != null && FirstLeft.Pts == null)
          FirstLeft = FirstLeft.FirstLeft;
        return FirstLeft;
      };
      ClipperLib2.Clipper.prototype.JoinCommonEdges = function() {
        for (var i = 0, ilen = this.m_Joins.length; i < ilen; i++) {
          var join = this.m_Joins[i];
          var outRec1 = this.GetOutRec(join.OutPt1.Idx);
          var outRec2 = this.GetOutRec(join.OutPt2.Idx);
          if (outRec1.Pts == null || outRec2.Pts == null)
            continue;
          var holeStateRec;
          if (outRec1 == outRec2)
            holeStateRec = outRec1;
          else if (this.Param1RightOfParam2(outRec1, outRec2))
            holeStateRec = outRec2;
          else if (this.Param1RightOfParam2(outRec2, outRec1))
            holeStateRec = outRec1;
          else
            holeStateRec = this.GetLowermostRec(outRec1, outRec2);
          if (!this.JoinPoints(join, outRec1, outRec2))
            continue;
          if (outRec1 == outRec2) {
            outRec1.Pts = join.OutPt1;
            outRec1.BottomPt = null;
            outRec2 = this.CreateOutRec();
            outRec2.Pts = join.OutPt2;
            this.UpdateOutPtIdxs(outRec2);
            if (this.m_UsingPolyTree)
              for (var j = 0, jlen = this.m_PolyOuts.length; j < jlen - 1; j++) {
                var oRec = this.m_PolyOuts[j];
                if (oRec.Pts == null || ClipperLib2.Clipper.ParseFirstLeft(oRec.FirstLeft) != outRec1 || oRec.IsHole == outRec1.IsHole)
                  continue;
                if (this.Poly2ContainsPoly1(oRec.Pts, join.OutPt2))
                  oRec.FirstLeft = outRec2;
              }
            if (this.Poly2ContainsPoly1(outRec2.Pts, outRec1.Pts)) {
              outRec2.IsHole = !outRec1.IsHole;
              outRec2.FirstLeft = outRec1;
              if (this.m_UsingPolyTree)
                this.FixupFirstLefts2(outRec2, outRec1);
              if ((outRec2.IsHole ^ this.ReverseSolution) == this.Area(outRec2) > 0)
                this.ReversePolyPtLinks(outRec2.Pts);
            } else if (this.Poly2ContainsPoly1(outRec1.Pts, outRec2.Pts)) {
              outRec2.IsHole = outRec1.IsHole;
              outRec1.IsHole = !outRec2.IsHole;
              outRec2.FirstLeft = outRec1.FirstLeft;
              outRec1.FirstLeft = outRec2;
              if (this.m_UsingPolyTree)
                this.FixupFirstLefts2(outRec1, outRec2);
              if ((outRec1.IsHole ^ this.ReverseSolution) == this.Area(outRec1) > 0)
                this.ReversePolyPtLinks(outRec1.Pts);
            } else {
              outRec2.IsHole = outRec1.IsHole;
              outRec2.FirstLeft = outRec1.FirstLeft;
              if (this.m_UsingPolyTree)
                this.FixupFirstLefts1(outRec1, outRec2);
            }
          } else {
            outRec2.Pts = null;
            outRec2.BottomPt = null;
            outRec2.Idx = outRec1.Idx;
            outRec1.IsHole = holeStateRec.IsHole;
            if (holeStateRec == outRec2)
              outRec1.FirstLeft = outRec2.FirstLeft;
            outRec2.FirstLeft = outRec1;
            if (this.m_UsingPolyTree)
              this.FixupFirstLefts2(outRec2, outRec1);
          }
        }
      };
      ClipperLib2.Clipper.prototype.UpdateOutPtIdxs = function(outrec) {
        var op = outrec.Pts;
        do {
          op.Idx = outrec.Idx;
          op = op.Prev;
        } while (op != outrec.Pts);
      };
      ClipperLib2.Clipper.prototype.DoSimplePolygons = function() {
        var i = 0;
        while (i < this.m_PolyOuts.length) {
          var outrec = this.m_PolyOuts[i++];
          var op = outrec.Pts;
          if (op === null)
            continue;
          do {
            var op2 = op.Next;
            while (op2 != outrec.Pts) {
              if (ClipperLib2.IntPoint.op_Equality(op.Pt, op2.Pt) && op2.Next != op && op2.Prev != op) {
                var op3 = op.Prev;
                var op4 = op2.Prev;
                op.Prev = op4;
                op4.Next = op;
                op2.Prev = op3;
                op3.Next = op2;
                outrec.Pts = op;
                var outrec2 = this.CreateOutRec();
                outrec2.Pts = op2;
                this.UpdateOutPtIdxs(outrec2);
                if (this.Poly2ContainsPoly1(outrec2.Pts, outrec.Pts)) {
                  outrec2.IsHole = !outrec.IsHole;
                  outrec2.FirstLeft = outrec;
                } else if (this.Poly2ContainsPoly1(outrec.Pts, outrec2.Pts)) {
                  outrec2.IsHole = outrec.IsHole;
                  outrec.IsHole = !outrec2.IsHole;
                  outrec2.FirstLeft = outrec.FirstLeft;
                  outrec.FirstLeft = outrec2;
                } else {
                  outrec2.IsHole = outrec.IsHole;
                  outrec2.FirstLeft = outrec.FirstLeft;
                }
                op2 = op;
              }
              op2 = op2.Next;
            }
            op = op.Next;
          } while (op != outrec.Pts);
        }
      };
      ClipperLib2.Clipper.Area = function(poly) {
        var cnt = poly.length;
        if (cnt < 3)
          return 0;
        var a = 0;
        for (var i = 0, j = cnt - 1; i < cnt; ++i) {
          a += (poly[j].X + poly[i].X) * (poly[j].Y - poly[i].Y);
          j = i;
        }
        return -a * 0.5;
      };
      ClipperLib2.Clipper.prototype.Area = function(outRec) {
        var op = outRec.Pts;
        if (op == null)
          return 0;
        var a = 0;
        do {
          a = a + (op.Prev.Pt.X + op.Pt.X) * (op.Prev.Pt.Y - op.Pt.Y);
          op = op.Next;
        } while (op != outRec.Pts);
        return a * 0.5;
      };
      if (use_deprecated) {
        ClipperLib2.Clipper.OffsetPaths = function(polys, delta, jointype, endtype, MiterLimit) {
          var result = new ClipperLib2.Paths();
          var co = new ClipperLib2.ClipperOffset(MiterLimit, MiterLimit);
          co.AddPaths(polys, jointype, endtype);
          co.Execute(result, delta);
          return result;
        };
      }
      ClipperLib2.Clipper.SimplifyPolygon = function(poly, fillType) {
        var result = new Array();
        var c = new ClipperLib2.Clipper(0);
        c.StrictlySimple = true;
        c.AddPath(poly, ClipperLib2.PolyType.ptSubject, true);
        c.Execute(ClipperLib2.ClipType.ctUnion, result, fillType, fillType);
        return result;
      };
      ClipperLib2.Clipper.SimplifyPolygons = function(polys, fillType) {
        if (typeof fillType == "undefined")
          fillType = ClipperLib2.PolyFillType.pftEvenOdd;
        var result = new Array();
        var c = new ClipperLib2.Clipper(0);
        c.StrictlySimple = true;
        c.AddPaths(polys, ClipperLib2.PolyType.ptSubject, true);
        c.Execute(ClipperLib2.ClipType.ctUnion, result, fillType, fillType);
        return result;
      };
      ClipperLib2.Clipper.DistanceSqrd = function(pt1, pt2) {
        var dx = pt1.X - pt2.X;
        var dy = pt1.Y - pt2.Y;
        return dx * dx + dy * dy;
      };
      ClipperLib2.Clipper.DistanceFromLineSqrd = function(pt, ln1, ln2) {
        var A = ln1.Y - ln2.Y;
        var B = ln2.X - ln1.X;
        var C = A * ln1.X + B * ln1.Y;
        C = A * pt.X + B * pt.Y - C;
        return C * C / (A * A + B * B);
      };
      ClipperLib2.Clipper.SlopesNearCollinear = function(pt1, pt2, pt3, distSqrd) {
        return ClipperLib2.Clipper.DistanceFromLineSqrd(pt2, pt1, pt3) < distSqrd;
      };
      ClipperLib2.Clipper.PointsAreClose = function(pt1, pt2, distSqrd) {
        var dx = pt1.X - pt2.X;
        var dy = pt1.Y - pt2.Y;
        return dx * dx + dy * dy <= distSqrd;
      };
      ClipperLib2.Clipper.ExcludeOp = function(op) {
        var result = op.Prev;
        result.Next = op.Next;
        op.Next.Prev = result;
        result.Idx = 0;
        return result;
      };
      ClipperLib2.Clipper.CleanPolygon = function(path, distance4) {
        if (typeof distance4 == "undefined")
          distance4 = 1.415;
        var cnt = path.length;
        if (cnt == 0)
          return new Array();
        var outPts = new Array(cnt);
        for (var i = 0; i < cnt; ++i)
          outPts[i] = new ClipperLib2.OutPt();
        for (var i = 0; i < cnt; ++i) {
          outPts[i].Pt = path[i];
          outPts[i].Next = outPts[(i + 1) % cnt];
          outPts[i].Next.Prev = outPts[i];
          outPts[i].Idx = 0;
        }
        var distSqrd = distance4 * distance4;
        var op = outPts[0];
        while (op.Idx == 0 && op.Next != op.Prev) {
          if (ClipperLib2.Clipper.PointsAreClose(op.Pt, op.Prev.Pt, distSqrd)) {
            op = ClipperLib2.Clipper.ExcludeOp(op);
            cnt--;
          } else if (ClipperLib2.Clipper.PointsAreClose(op.Prev.Pt, op.Next.Pt, distSqrd)) {
            ClipperLib2.Clipper.ExcludeOp(op.Next);
            op = ClipperLib2.Clipper.ExcludeOp(op);
            cnt -= 2;
          } else if (ClipperLib2.Clipper.SlopesNearCollinear(op.Prev.Pt, op.Pt, op.Next.Pt, distSqrd)) {
            op = ClipperLib2.Clipper.ExcludeOp(op);
            cnt--;
          } else {
            op.Idx = 1;
            op = op.Next;
          }
        }
        if (cnt < 3)
          cnt = 0;
        var result = new Array(cnt);
        for (var i = 0; i < cnt; ++i) {
          result[i] = new ClipperLib2.IntPoint(op.Pt);
          op = op.Next;
        }
        outPts = null;
        return result;
      };
      ClipperLib2.Clipper.CleanPolygons = function(polys, distance4) {
        var result = new Array(polys.length);
        for (var i = 0, ilen = polys.length; i < ilen; i++)
          result[i] = ClipperLib2.Clipper.CleanPolygon(polys[i], distance4);
        return result;
      };
      ClipperLib2.Clipper.Minkowski = function(pattern, path, IsSum, IsClosed) {
        var delta = IsClosed ? 1 : 0;
        var polyCnt = pattern.length;
        var pathCnt = path.length;
        var result = new Array();
        if (IsSum)
          for (var i = 0; i < pathCnt; i++) {
            var p = new Array(polyCnt);
            for (var j = 0, jlen = pattern.length, ip = pattern[j]; j < jlen; j++, ip = pattern[j])
              p[j] = new ClipperLib2.IntPoint(path[i].X + ip.X, path[i].Y + ip.Y);
            result.push(p);
          }
        else
          for (var i = 0; i < pathCnt; i++) {
            var p = new Array(polyCnt);
            for (var j = 0, jlen = pattern.length, ip = pattern[j]; j < jlen; j++, ip = pattern[j])
              p[j] = new ClipperLib2.IntPoint(path[i].X - ip.X, path[i].Y - ip.Y);
            result.push(p);
          }
        var quads = new Array();
        for (var i = 0; i < pathCnt - 1 + delta; i++)
          for (var j = 0; j < polyCnt; j++) {
            var quad2 = new Array();
            quad2.push(result[i % pathCnt][j % polyCnt]);
            quad2.push(result[(i + 1) % pathCnt][j % polyCnt]);
            quad2.push(result[(i + 1) % pathCnt][(j + 1) % polyCnt]);
            quad2.push(result[i % pathCnt][(j + 1) % polyCnt]);
            if (!ClipperLib2.Clipper.Orientation(quad2))
              quad2.reverse();
            quads.push(quad2);
          }
        var c = new ClipperLib2.Clipper(0);
        c.AddPaths(quads, ClipperLib2.PolyType.ptSubject, true);
        c.Execute(ClipperLib2.ClipType.ctUnion, result, ClipperLib2.PolyFillType.pftNonZero, ClipperLib2.PolyFillType.pftNonZero);
        return result;
      };
      ClipperLib2.Clipper.MinkowskiSum = function() {
        var a = arguments, alen = a.length;
        if (alen == 3) {
          var pattern = a[0], path = a[1], pathIsClosed = a[2];
          return ClipperLib2.Clipper.Minkowski(pattern, path, true, pathIsClosed);
        } else if (alen == 4) {
          var pattern = a[0], paths = a[1], pathFillType = a[2], pathIsClosed = a[3];
          var c = new ClipperLib2.Clipper(), tmp;
          for (var i = 0, ilen = paths.length; i < ilen; ++i) {
            var tmp = ClipperLib2.Clipper.Minkowski(pattern, paths[i], true, pathIsClosed);
            c.AddPaths(tmp, ClipperLib2.PolyType.ptSubject, true);
          }
          if (pathIsClosed)
            c.AddPaths(paths, ClipperLib2.PolyType.ptClip, true);
          var solution = new ClipperLib2.Paths();
          c.Execute(ClipperLib2.ClipType.ctUnion, solution, pathFillType, pathFillType);
          return solution;
        }
      };
      ClipperLib2.Clipper.MinkowskiDiff = function(pattern, path, pathIsClosed) {
        return ClipperLib2.Clipper.Minkowski(pattern, path, false, pathIsClosed);
      };
      ClipperLib2.Clipper.PolyTreeToPaths = function(polytree) {
        var result = new Array();
        ClipperLib2.Clipper.AddPolyNodeToPaths(polytree, ClipperLib2.Clipper.NodeType.ntAny, result);
        return result;
      };
      ClipperLib2.Clipper.AddPolyNodeToPaths = function(polynode, nt, paths) {
        var match = true;
        switch (nt) {
          case ClipperLib2.Clipper.NodeType.ntOpen:
            return;
          case ClipperLib2.Clipper.NodeType.ntClosed:
            match = !polynode.IsOpen;
            break;
          default:
            break;
        }
        if (polynode.m_polygon.length > 0 && match)
          paths.push(polynode.m_polygon);
        for (var $i3 = 0, $t3 = polynode.Childs(), $l3 = $t3.length, pn = $t3[$i3]; $i3 < $l3; $i3++, pn = $t3[$i3])
          ClipperLib2.Clipper.AddPolyNodeToPaths(pn, nt, paths);
      };
      ClipperLib2.Clipper.OpenPathsFromPolyTree = function(polytree) {
        var result = new ClipperLib2.Paths();
        for (var i = 0, ilen = polytree.ChildCount(); i < ilen; i++)
          if (polytree.Childs()[i].IsOpen)
            result.push(polytree.Childs()[i].m_polygon);
        return result;
      };
      ClipperLib2.Clipper.ClosedPathsFromPolyTree = function(polytree) {
        var result = new ClipperLib2.Paths();
        ClipperLib2.Clipper.AddPolyNodeToPaths(polytree, ClipperLib2.Clipper.NodeType.ntClosed, result);
        return result;
      };
      Inherit(ClipperLib2.Clipper, ClipperLib2.ClipperBase);
      ClipperLib2.Clipper.NodeType = {
        ntAny: 0,
        ntOpen: 1,
        ntClosed: 2
      };
      ClipperLib2.ClipperOffset = function(miterLimit, arcTolerance) {
        if (typeof miterLimit == "undefined")
          miterLimit = 2;
        if (typeof arcTolerance == "undefined")
          arcTolerance = ClipperLib2.ClipperOffset.def_arc_tolerance;
        this.m_destPolys = new ClipperLib2.Paths();
        this.m_srcPoly = new ClipperLib2.Path();
        this.m_destPoly = new ClipperLib2.Path();
        this.m_normals = new Array();
        this.m_delta = 0;
        this.m_sinA = 0;
        this.m_sin = 0;
        this.m_cos = 0;
        this.m_miterLim = 0;
        this.m_StepsPerRad = 0;
        this.m_lowest = new ClipperLib2.IntPoint();
        this.m_polyNodes = new ClipperLib2.PolyNode();
        this.MiterLimit = miterLimit;
        this.ArcTolerance = arcTolerance;
        this.m_lowest.X = -1;
      };
      ClipperLib2.ClipperOffset.two_pi = 6.28318530717959;
      ClipperLib2.ClipperOffset.def_arc_tolerance = 0.25;
      ClipperLib2.ClipperOffset.prototype.Clear = function() {
        ClipperLib2.Clear(this.m_polyNodes.Childs());
        this.m_lowest.X = -1;
      };
      ClipperLib2.ClipperOffset.Round = ClipperLib2.Clipper.Round;
      ClipperLib2.ClipperOffset.prototype.AddPath = function(path, joinType, endType) {
        var highI = path.length - 1;
        if (highI < 0)
          return;
        var newNode = new ClipperLib2.PolyNode();
        newNode.m_jointype = joinType;
        newNode.m_endtype = endType;
        if (endType == ClipperLib2.EndType.etClosedLine || endType == ClipperLib2.EndType.etClosedPolygon)
          while (highI > 0 && ClipperLib2.IntPoint.op_Equality(path[0], path[highI]))
            highI--;
        newNode.m_polygon.push(path[0]);
        var j = 0, k = 0;
        for (var i = 1; i <= highI; i++)
          if (ClipperLib2.IntPoint.op_Inequality(newNode.m_polygon[j], path[i])) {
            j++;
            newNode.m_polygon.push(path[i]);
            if (path[i].Y > newNode.m_polygon[k].Y || path[i].Y == newNode.m_polygon[k].Y && path[i].X < newNode.m_polygon[k].X)
              k = j;
          }
        if (endType == ClipperLib2.EndType.etClosedPolygon && j < 2 || endType != ClipperLib2.EndType.etClosedPolygon && j < 0)
          return;
        this.m_polyNodes.AddChild(newNode);
        if (endType != ClipperLib2.EndType.etClosedPolygon)
          return;
        if (this.m_lowest.X < 0)
          this.m_lowest = new ClipperLib2.IntPoint(0, k);
        else {
          var ip = this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
          if (newNode.m_polygon[k].Y > ip.Y || newNode.m_polygon[k].Y == ip.Y && newNode.m_polygon[k].X < ip.X)
            this.m_lowest = new ClipperLib2.IntPoint(this.m_polyNodes.ChildCount() - 1, k);
        }
      };
      ClipperLib2.ClipperOffset.prototype.AddPaths = function(paths, joinType, endType) {
        for (var i = 0, ilen = paths.length; i < ilen; i++)
          this.AddPath(paths[i], joinType, endType);
      };
      ClipperLib2.ClipperOffset.prototype.FixOrientations = function() {
        if (this.m_lowest.X >= 0 && !ClipperLib2.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon)) {
          for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
            var node = this.m_polyNodes.Childs()[i];
            if (node.m_endtype == ClipperLib2.EndType.etClosedPolygon || node.m_endtype == ClipperLib2.EndType.etClosedLine && ClipperLib2.Clipper.Orientation(node.m_polygon))
              node.m_polygon.reverse();
          }
        } else {
          for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
            var node = this.m_polyNodes.Childs()[i];
            if (node.m_endtype == ClipperLib2.EndType.etClosedLine && !ClipperLib2.Clipper.Orientation(node.m_polygon))
              node.m_polygon.reverse();
          }
        }
      };
      ClipperLib2.ClipperOffset.GetUnitNormal = function(pt1, pt2) {
        var dx = pt2.X - pt1.X;
        var dy = pt2.Y - pt1.Y;
        if (dx == 0 && dy == 0)
          return new ClipperLib2.DoublePoint(0, 0);
        var f = 1 / Math.sqrt(dx * dx + dy * dy);
        dx *= f;
        dy *= f;
        return new ClipperLib2.DoublePoint(dy, -dx);
      };
      ClipperLib2.ClipperOffset.prototype.DoOffset = function(delta) {
        this.m_destPolys = new Array();
        this.m_delta = delta;
        if (ClipperLib2.ClipperBase.near_zero(delta)) {
          for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
            var node = this.m_polyNodes.Childs()[i];
            if (node.m_endtype == ClipperLib2.EndType.etClosedPolygon)
              this.m_destPolys.push(node.m_polygon);
          }
          return;
        }
        if (this.MiterLimit > 2)
          this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit);
        else
          this.m_miterLim = 0.5;
        var y;
        if (this.ArcTolerance <= 0)
          y = ClipperLib2.ClipperOffset.def_arc_tolerance;
        else if (this.ArcTolerance > Math.abs(delta) * ClipperLib2.ClipperOffset.def_arc_tolerance)
          y = Math.abs(delta) * ClipperLib2.ClipperOffset.def_arc_tolerance;
        else
          y = this.ArcTolerance;
        var steps = 3.14159265358979 / Math.acos(1 - y / Math.abs(delta));
        this.m_sin = Math.sin(ClipperLib2.ClipperOffset.two_pi / steps);
        this.m_cos = Math.cos(ClipperLib2.ClipperOffset.two_pi / steps);
        this.m_StepsPerRad = steps / ClipperLib2.ClipperOffset.two_pi;
        if (delta < 0)
          this.m_sin = -this.m_sin;
        for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
          var node = this.m_polyNodes.Childs()[i];
          this.m_srcPoly = node.m_polygon;
          var len = this.m_srcPoly.length;
          if (len == 0 || delta <= 0 && (len < 3 || node.m_endtype != ClipperLib2.EndType.etClosedPolygon))
            continue;
          this.m_destPoly = new Array();
          if (len == 1) {
            if (node.m_jointype == ClipperLib2.JoinType.jtRound) {
              var X = 1, Y = 0;
              for (var j = 1; j <= steps; j++) {
                this.m_destPoly.push(new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].X + X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].Y + Y * delta)));
                var X2 = X;
                X = X * this.m_cos - this.m_sin * Y;
                Y = X2 * this.m_sin + Y * this.m_cos;
              }
            } else {
              var X = -1, Y = -1;
              for (var j = 0; j < 4; ++j) {
                this.m_destPoly.push(new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].X + X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].Y + Y * delta)));
                if (X < 0)
                  X = 1;
                else if (Y < 0)
                  Y = 1;
                else
                  X = -1;
              }
            }
            this.m_destPolys.push(this.m_destPoly);
            continue;
          }
          this.m_normals.length = 0;
          for (var j = 0; j < len - 1; j++)
            this.m_normals.push(ClipperLib2.ClipperOffset.GetUnitNormal(this.m_srcPoly[j], this.m_srcPoly[j + 1]));
          if (node.m_endtype == ClipperLib2.EndType.etClosedLine || node.m_endtype == ClipperLib2.EndType.etClosedPolygon)
            this.m_normals.push(ClipperLib2.ClipperOffset.GetUnitNormal(this.m_srcPoly[len - 1], this.m_srcPoly[0]));
          else
            this.m_normals.push(new ClipperLib2.DoublePoint(this.m_normals[len - 2]));
          if (node.m_endtype == ClipperLib2.EndType.etClosedPolygon) {
            var k = len - 1;
            for (var j = 0; j < len; j++)
              k = this.OffsetPoint(j, k, node.m_jointype);
            this.m_destPolys.push(this.m_destPoly);
          } else if (node.m_endtype == ClipperLib2.EndType.etClosedLine) {
            var k = len - 1;
            for (var j = 0; j < len; j++)
              k = this.OffsetPoint(j, k, node.m_jointype);
            this.m_destPolys.push(this.m_destPoly);
            this.m_destPoly = new Array();
            var n = this.m_normals[len - 1];
            for (var j = len - 1; j > 0; j--)
              this.m_normals[j] = new ClipperLib2.DoublePoint(-this.m_normals[j - 1].X, -this.m_normals[j - 1].Y);
            this.m_normals[0] = new ClipperLib2.DoublePoint(-n.X, -n.Y);
            k = 0;
            for (var j = len - 1; j >= 0; j--)
              k = this.OffsetPoint(j, k, node.m_jointype);
            this.m_destPolys.push(this.m_destPoly);
          } else {
            var k = 0;
            for (var j = 1; j < len - 1; ++j)
              k = this.OffsetPoint(j, k, node.m_jointype);
            var pt1;
            if (node.m_endtype == ClipperLib2.EndType.etOpenButt) {
              var j = len - 1;
              pt1 = new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_normals[j].X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_normals[j].Y * delta));
              this.m_destPoly.push(pt1);
              pt1 = new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X - this.m_normals[j].X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y - this.m_normals[j].Y * delta));
              this.m_destPoly.push(pt1);
            } else {
              var j = len - 1;
              k = len - 2;
              this.m_sinA = 0;
              this.m_normals[j] = new ClipperLib2.DoublePoint(-this.m_normals[j].X, -this.m_normals[j].Y);
              if (node.m_endtype == ClipperLib2.EndType.etOpenSquare)
                this.DoSquare(j, k);
              else
                this.DoRound(j, k);
            }
            for (var j = len - 1; j > 0; j--)
              this.m_normals[j] = new ClipperLib2.DoublePoint(-this.m_normals[j - 1].X, -this.m_normals[j - 1].Y);
            this.m_normals[0] = new ClipperLib2.DoublePoint(-this.m_normals[1].X, -this.m_normals[1].Y);
            k = len - 1;
            for (var j = k - 1; j > 0; --j)
              k = this.OffsetPoint(j, k, node.m_jointype);
            if (node.m_endtype == ClipperLib2.EndType.etOpenButt) {
              pt1 = new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].X - this.m_normals[0].X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].Y - this.m_normals[0].Y * delta));
              this.m_destPoly.push(pt1);
              pt1 = new ClipperLib2.IntPoint(ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].X + this.m_normals[0].X * delta), ClipperLib2.ClipperOffset.Round(this.m_srcPoly[0].Y + this.m_normals[0].Y * delta));
              this.m_destPoly.push(pt1);
            } else {
              k = 1;
              this.m_sinA = 0;
              if (node.m_endtype == ClipperLib2.EndType.etOpenSquare)
                this.DoSquare(0, 1);
              else
                this.DoRound(0, 1);
            }
            this.m_destPolys.push(this.m_destPoly);
          }
        }
      };
      ClipperLib2.ClipperOffset.prototype.Execute = function() {
        var a = arguments, ispolytree = a[0] instanceof ClipperLib2.PolyTree;
        if (!ispolytree) {
          var solution = a[0], delta = a[1];
          ClipperLib2.Clear(solution);
          this.FixOrientations();
          this.DoOffset(delta);
          var clpr = new ClipperLib2.Clipper(0);
          clpr.AddPaths(this.m_destPolys, ClipperLib2.PolyType.ptSubject, true);
          if (delta > 0) {
            clpr.Execute(ClipperLib2.ClipType.ctUnion, solution, ClipperLib2.PolyFillType.pftPositive, ClipperLib2.PolyFillType.pftPositive);
          } else {
            var r = ClipperLib2.Clipper.GetBounds(this.m_destPolys);
            var outer = new ClipperLib2.Path();
            outer.push(new ClipperLib2.IntPoint(r.left - 10, r.bottom + 10));
            outer.push(new ClipperLib2.IntPoint(r.right + 10, r.bottom + 10));
            outer.push(new ClipperLib2.IntPoint(r.right + 10, r.top - 10));
            outer.push(new ClipperLib2.IntPoint(r.left - 10, r.top - 10));
            clpr.AddPath(outer, ClipperLib2.PolyType.ptSubject, true);
            clpr.ReverseSolution = true;
            clpr.Execute(ClipperLib2.ClipType.ctUnion, solution, ClipperLib2.PolyFillType.pftNegative, ClipperLib2.PolyFillType.pftNegative);
            if (solution.length > 0)
              solution.splice(0, 1);
          }
        } else {
          var solution = a[0], delta = a[1];
          solution.Clear();
          this.FixOrientations();
          this.DoOffset(delta);
          var clpr = new ClipperLib2.Clipper(0);
          clpr.AddPaths(this.m_destPolys, ClipperLib2.PolyType.ptSubject, true);
          if (delta > 0) {
            clpr.Execute(ClipperLib2.ClipType.ctUnion, solution, ClipperLib2.PolyFillType.pftPositive, ClipperLib2.PolyFillType.pftPositive);
          } else {
            var r = ClipperLib2.Clipper.GetBounds(this.m_destPolys);
            var outer = new ClipperLib2.Path();
            outer.push(new ClipperLib2.IntPoint(r.left - 10, r.bottom + 10));
            outer.push(new ClipperLib2.IntPoint(r.right + 10, r.bottom + 10));
            outer.push(new ClipperLib2.IntPoint(r.right + 10, r.top - 10));
            outer.push(new ClipperLib2.IntPoint(r.left - 10, r.top - 10));
            clpr.AddPath(outer, ClipperLib2.PolyType.ptSubject, true);
            clpr.ReverseSolution = true;
            clpr.Execute(ClipperLib2.ClipType.ctUnion, solution, ClipperLib2.PolyFillType.pftNegative, ClipperLib2.PolyFillType.pftNegative);
            if (solution.ChildCount() == 1 && solution.Childs()[0].ChildCount() > 0) {
              var outerNode = solution.Childs()[0];
              solution.Childs()[0] = outerNode.Childs()[0];
              for (var i = 1; i < outerNode.ChildCount(); i++)
                solution.AddChild(outerNode.Childs()[i]);
            } else
              solution.Clear();
          }
        }
      };
      ClipperLib2.ClipperOffset.prototype.OffsetPoint = function(j, k, jointype) {
        this.m_sinA = this.m_normals[k].X * this.m_normals[j].Y - this.m_normals[j].X * this.m_normals[k].Y;
        if (this.m_sinA < 5e-5 && this.m_sinA > -5e-5)
          return k;
        else if (this.m_sinA > 1)
          this.m_sinA = 1;
        else if (this.m_sinA < -1)
          this.m_sinA = -1;
        if (this.m_sinA * this.m_delta < 0) {
          this.m_destPoly.push(new ClipperLib2.IntPoint(
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_normals[k].X * this.m_delta),
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_normals[k].Y * this.m_delta)
          ));
          this.m_destPoly.push(new ClipperLib2.IntPoint(this.m_srcPoly[j]));
          this.m_destPoly.push(new ClipperLib2.IntPoint(
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_normals[j].X * this.m_delta),
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_normals[j].Y * this.m_delta)
          ));
        } else
          switch (jointype) {
            case ClipperLib2.JoinType.jtMiter: {
              var r = 1 + (this.m_normals[j].X * this.m_normals[k].X + this.m_normals[j].Y * this.m_normals[k].Y);
              if (r >= this.m_miterLim)
                this.DoMiter(j, k, r);
              else
                this.DoSquare(j, k);
              break;
            }
            case ClipperLib2.JoinType.jtSquare:
              this.DoSquare(j, k);
              break;
            case ClipperLib2.JoinType.jtRound:
              this.DoRound(j, k);
              break;
          }
        k = j;
        return k;
      };
      ClipperLib2.ClipperOffset.prototype.DoSquare = function(j, k) {
        var dx = Math.tan(Math.atan2(
          this.m_sinA,
          this.m_normals[k].X * this.m_normals[j].X + this.m_normals[k].Y * this.m_normals[j].Y
        ) / 4);
        this.m_destPoly.push(new ClipperLib2.IntPoint(
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_delta * (this.m_normals[k].X - this.m_normals[k].Y * dx)),
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_delta * (this.m_normals[k].Y + this.m_normals[k].X * dx))
        ));
        this.m_destPoly.push(new ClipperLib2.IntPoint(
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_delta * (this.m_normals[j].X + this.m_normals[j].Y * dx)),
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_delta * (this.m_normals[j].Y - this.m_normals[j].X * dx))
        ));
      };
      ClipperLib2.ClipperOffset.prototype.DoMiter = function(j, k, r) {
        var q = this.m_delta / r;
        this.m_destPoly.push(new ClipperLib2.IntPoint(
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + (this.m_normals[k].X + this.m_normals[j].X) * q),
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + (this.m_normals[k].Y + this.m_normals[j].Y) * q)
        ));
      };
      ClipperLib2.ClipperOffset.prototype.DoRound = function(j, k) {
        var a = Math.atan2(
          this.m_sinA,
          this.m_normals[k].X * this.m_normals[j].X + this.m_normals[k].Y * this.m_normals[j].Y
        );
        var steps = ClipperLib2.Cast_Int32(ClipperLib2.ClipperOffset.Round(this.m_StepsPerRad * Math.abs(a)));
        var X = this.m_normals[k].X, Y = this.m_normals[k].Y, X2;
        for (var i = 0; i < steps; ++i) {
          this.m_destPoly.push(new ClipperLib2.IntPoint(
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + X * this.m_delta),
            ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + Y * this.m_delta)
          ));
          X2 = X;
          X = X * this.m_cos - this.m_sin * Y;
          Y = X2 * this.m_sin + Y * this.m_cos;
        }
        this.m_destPoly.push(new ClipperLib2.IntPoint(
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].X + this.m_normals[j].X * this.m_delta),
          ClipperLib2.ClipperOffset.Round(this.m_srcPoly[j].Y + this.m_normals[j].Y * this.m_delta)
        ));
      };
      ClipperLib2.Error = function(message) {
        try {
          throw new Error(message);
        } catch (err) {
          alert(err.message);
        }
      };
      ClipperLib2.JS = {};
      ClipperLib2.JS.AreaOfPolygon = function(poly, scale2) {
        if (!scale2)
          scale2 = 1;
        return ClipperLib2.Clipper.Area(poly) / (scale2 * scale2);
      };
      ClipperLib2.JS.AreaOfPolygons = function(poly, scale2) {
        if (!scale2)
          scale2 = 1;
        var area = 0;
        for (var i = 0; i < poly.length; i++) {
          area += ClipperLib2.Clipper.Area(poly[i]);
        }
        return area / (scale2 * scale2);
      };
      ClipperLib2.JS.BoundsOfPath = function(path, scale2) {
        return ClipperLib2.JS.BoundsOfPaths([path], scale2);
      };
      ClipperLib2.JS.BoundsOfPaths = function(paths, scale2) {
        if (!scale2)
          scale2 = 1;
        var bounds2 = ClipperLib2.Clipper.GetBounds(paths);
        bounds2.left /= scale2;
        bounds2.bottom /= scale2;
        bounds2.right /= scale2;
        bounds2.top /= scale2;
        return bounds2;
      };
      ClipperLib2.JS.Clean = function(polygon2, delta) {
        if (!(polygon2 instanceof Array))
          return [];
        var isPolygons = polygon2[0] instanceof Array;
        var polygon2 = ClipperLib2.JS.Clone(polygon2);
        if (typeof delta != "number" || delta === null) {
          ClipperLib2.Error("Delta is not a number in Clean().");
          return polygon2;
        }
        if (polygon2.length === 0 || polygon2.length == 1 && polygon2[0].length === 0 || delta < 0)
          return polygon2;
        if (!isPolygons)
          polygon2 = [polygon2];
        var k_length = polygon2.length;
        var len, poly, result, d, p, j, i;
        var results = [];
        for (var k = 0; k < k_length; k++) {
          poly = polygon2[k];
          len = poly.length;
          if (len === 0)
            continue;
          else if (len < 3) {
            result = poly;
            results.push(result);
            continue;
          }
          result = poly;
          d = delta * delta;
          p = poly[0];
          j = 1;
          for (i = 1; i < len; i++) {
            if ((poly[i].X - p.X) * (poly[i].X - p.X) + (poly[i].Y - p.Y) * (poly[i].Y - p.Y) <= d)
              continue;
            result[j] = poly[i];
            p = poly[i];
            j++;
          }
          p = poly[j - 1];
          if ((poly[0].X - p.X) * (poly[0].X - p.X) + (poly[0].Y - p.Y) * (poly[0].Y - p.Y) <= d)
            j--;
          if (j < len)
            result.splice(j, len - j);
          if (result.length)
            results.push(result);
        }
        if (!isPolygons && results.length)
          results = results[0];
        else if (!isPolygons && results.length === 0)
          results = [];
        else if (isPolygons && results.length === 0)
          results = [
            []
          ];
        return results;
      };
      ClipperLib2.JS.Clone = function(polygon2) {
        if (!(polygon2 instanceof Array))
          return [];
        if (polygon2.length === 0)
          return [];
        else if (polygon2.length == 1 && polygon2[0].length === 0)
          return [[]];
        var isPolygons = polygon2[0] instanceof Array;
        if (!isPolygons)
          polygon2 = [polygon2];
        var len = polygon2.length, plen, i, j, result;
        var results = new Array(len);
        for (i = 0; i < len; i++) {
          plen = polygon2[i].length;
          result = new Array(plen);
          for (j = 0; j < plen; j++) {
            result[j] = {
              X: polygon2[i][j].X,
              Y: polygon2[i][j].Y
            };
          }
          results[i] = result;
        }
        if (!isPolygons)
          results = results[0];
        return results;
      };
      ClipperLib2.JS.Lighten = function(polygon2, tolerance) {
        if (!(polygon2 instanceof Array))
          return [];
        if (typeof tolerance != "number" || tolerance === null) {
          ClipperLib2.Error("Tolerance is not a number in Lighten().");
          return ClipperLib2.JS.Clone(polygon2);
        }
        if (polygon2.length === 0 || polygon2.length == 1 && polygon2[0].length === 0 || tolerance < 0) {
          return ClipperLib2.JS.Clone(polygon2);
        }
        if (!(polygon2[0] instanceof Array))
          polygon2 = [polygon2];
        var i, j, poly, k, poly2, plen, A, B, P, d, rem, addlast;
        var bxax, byay, l, ax, ay;
        var len = polygon2.length;
        var toleranceSq = tolerance * tolerance;
        var results = [];
        for (i = 0; i < len; i++) {
          poly = polygon2[i];
          plen = poly.length;
          if (plen == 0)
            continue;
          for (k = 0; k < 1e6; k++) {
            poly2 = [];
            plen = poly.length;
            if (poly[plen - 1].X != poly[0].X || poly[plen - 1].Y != poly[0].Y) {
              addlast = 1;
              poly.push(
                {
                  X: poly[0].X,
                  Y: poly[0].Y
                }
              );
              plen = poly.length;
            } else
              addlast = 0;
            rem = [];
            for (j = 0; j < plen - 2; j++) {
              A = poly[j];
              P = poly[j + 1];
              B = poly[j + 2];
              ax = A.X;
              ay = A.Y;
              bxax = B.X - ax;
              byay = B.Y - ay;
              if (bxax !== 0 || byay !== 0) {
                l = ((P.X - ax) * bxax + (P.Y - ay) * byay) / (bxax * bxax + byay * byay);
                if (l > 1) {
                  ax = B.X;
                  ay = B.Y;
                } else if (l > 0) {
                  ax += bxax * l;
                  ay += byay * l;
                }
              }
              bxax = P.X - ax;
              byay = P.Y - ay;
              d = bxax * bxax + byay * byay;
              if (d <= toleranceSq) {
                rem[j + 1] = 1;
                j++;
              }
            }
            poly2.push(
              {
                X: poly[0].X,
                Y: poly[0].Y
              }
            );
            for (j = 1; j < plen - 1; j++)
              if (!rem[j])
                poly2.push(
                  {
                    X: poly[j].X,
                    Y: poly[j].Y
                  }
                );
            poly2.push(
              {
                X: poly[plen - 1].X,
                Y: poly[plen - 1].Y
              }
            );
            if (addlast)
              poly.pop();
            if (!rem.length)
              break;
            else
              poly = poly2;
          }
          plen = poly2.length;
          if (poly2[plen - 1].X == poly2[0].X && poly2[plen - 1].Y == poly2[0].Y) {
            poly2.pop();
          }
          if (poly2.length > 2)
            results.push(poly2);
        }
        if (!polygon2[0] instanceof Array)
          results = results[0];
        if (typeof results == "undefined")
          results = [
            []
          ];
        return results;
      };
      ClipperLib2.JS.PerimeterOfPath = function(path, closed, scale2) {
        if (typeof path == "undefined")
          return 0;
        var sqrt2 = Math.sqrt;
        var perimeter = 0;
        var p1, p2, p1x = 0, p1y = 0, p2x = 0, p2y = 0;
        var j = path.length;
        if (j < 2)
          return 0;
        if (closed) {
          path[j] = path[0];
          j++;
        }
        while (--j) {
          p1 = path[j];
          p1x = p1.X;
          p1y = p1.Y;
          p2 = path[j - 1];
          p2x = p2.X;
          p2y = p2.Y;
          perimeter += sqrt2((p1x - p2x) * (p1x - p2x) + (p1y - p2y) * (p1y - p2y));
        }
        if (closed)
          path.pop();
        return perimeter / scale2;
      };
      ClipperLib2.JS.PerimeterOfPaths = function(paths, closed, scale2) {
        if (!scale2)
          scale2 = 1;
        var perimeter = 0;
        for (var i = 0; i < paths.length; i++) {
          perimeter += ClipperLib2.JS.PerimeterOfPath(paths[i], closed, scale2);
        }
        return perimeter;
      };
      ClipperLib2.JS.ScaleDownPath = function(path, scale2) {
        var i, p;
        if (!scale2)
          scale2 = 1;
        i = path.length;
        while (i--) {
          p = path[i];
          p.X = p.X / scale2;
          p.Y = p.Y / scale2;
        }
      };
      ClipperLib2.JS.ScaleDownPaths = function(paths, scale2) {
        var i, j, p, round3 = Math.round;
        if (!scale2)
          scale2 = 1;
        i = paths.length;
        while (i--) {
          j = paths[i].length;
          while (j--) {
            p = paths[i][j];
            p.X = p.X / scale2;
            p.Y = p.Y / scale2;
          }
        }
      };
      ClipperLib2.JS.ScaleUpPath = function(path, scale2) {
        var i, p, round3 = Math.round;
        if (!scale2)
          scale2 = 1;
        i = path.length;
        while (i--) {
          p = path[i];
          p.X = round3(p.X * scale2);
          p.Y = round3(p.Y * scale2);
        }
      };
      ClipperLib2.JS.ScaleUpPaths = function(paths, scale2) {
        var i, j, p, round3 = Math.round;
        if (!scale2)
          scale2 = 1;
        i = paths.length;
        while (i--) {
          j = paths[i].length;
          while (j--) {
            p = paths[i][j];
            p.X = round3(p.X * scale2);
            p.Y = round3(p.Y * scale2);
          }
        }
      };
      ClipperLib2.ExPolygons = function() {
        return [];
      };
      ClipperLib2.ExPolygon = function() {
        this.outer = null;
        this.holes = null;
      };
      ClipperLib2.JS.AddOuterPolyNodeToExPolygons = function(polynode, expolygons) {
        var ep = new ClipperLib2.ExPolygon();
        ep.outer = polynode.Contour();
        var childs = polynode.Childs();
        var ilen = childs.length;
        ep.holes = new Array(ilen);
        var node, n, i, j, childs2, jlen;
        for (i = 0; i < ilen; i++) {
          node = childs[i];
          ep.holes[i] = node.Contour();
          for (j = 0, childs2 = node.Childs(), jlen = childs2.length; j < jlen; j++) {
            n = childs2[j];
            ClipperLib2.JS.AddOuterPolyNodeToExPolygons(n, expolygons);
          }
        }
        expolygons.push(ep);
      };
      ClipperLib2.JS.ExPolygonsToPaths = function(expolygons) {
        var a, i, alen, ilen;
        var paths = new ClipperLib2.Paths();
        for (a = 0, alen = expolygons.length; a < alen; a++) {
          paths.push(expolygons[a].outer);
          for (i = 0, ilen = expolygons[a].holes.length; i < ilen; i++) {
            paths.push(expolygons[a].holes[i]);
          }
        }
        return paths;
      };
      ClipperLib2.JS.PolyTreeToExPolygons = function(polytree) {
        var expolygons = new ClipperLib2.ExPolygons();
        var node, i, childs, ilen;
        for (i = 0, childs = polytree.Childs(), ilen = childs.length; i < ilen; i++) {
          node = childs[i];
          ClipperLib2.JS.AddOuterPolyNodeToExPolygons(node, expolygons);
        }
        return expolygons;
      };
      module.exports = ClipperLib2;
    }
  });

  // node_modules/stackblur/index.js
  var require_stackblur = __commonJS({
    "node_modules/stackblur/index.js"(exports, module) {
      var mul_table = [
        512,
        512,
        456,
        512,
        328,
        456,
        335,
        512,
        405,
        328,
        271,
        456,
        388,
        335,
        292,
        512,
        454,
        405,
        364,
        328,
        298,
        271,
        496,
        456,
        420,
        388,
        360,
        335,
        312,
        292,
        273,
        512,
        482,
        454,
        428,
        405,
        383,
        364,
        345,
        328,
        312,
        298,
        284,
        271,
        259,
        496,
        475,
        456,
        437,
        420,
        404,
        388,
        374,
        360,
        347,
        335,
        323,
        312,
        302,
        292,
        282,
        273,
        265,
        512,
        497,
        482,
        468,
        454,
        441,
        428,
        417,
        405,
        394,
        383,
        373,
        364,
        354,
        345,
        337,
        328,
        320,
        312,
        305,
        298,
        291,
        284,
        278,
        271,
        265,
        259,
        507,
        496,
        485,
        475,
        465,
        456,
        446,
        437,
        428,
        420,
        412,
        404,
        396,
        388,
        381,
        374,
        367,
        360,
        354,
        347,
        341,
        335,
        329,
        323,
        318,
        312,
        307,
        302,
        297,
        292,
        287,
        282,
        278,
        273,
        269,
        265,
        261,
        512,
        505,
        497,
        489,
        482,
        475,
        468,
        461,
        454,
        447,
        441,
        435,
        428,
        422,
        417,
        411,
        405,
        399,
        394,
        389,
        383,
        378,
        373,
        368,
        364,
        359,
        354,
        350,
        345,
        341,
        337,
        332,
        328,
        324,
        320,
        316,
        312,
        309,
        305,
        301,
        298,
        294,
        291,
        287,
        284,
        281,
        278,
        274,
        271,
        268,
        265,
        262,
        259,
        257,
        507,
        501,
        496,
        491,
        485,
        480,
        475,
        470,
        465,
        460,
        456,
        451,
        446,
        442,
        437,
        433,
        428,
        424,
        420,
        416,
        412,
        408,
        404,
        400,
        396,
        392,
        388,
        385,
        381,
        377,
        374,
        370,
        367,
        363,
        360,
        357,
        354,
        350,
        347,
        344,
        341,
        338,
        335,
        332,
        329,
        326,
        323,
        320,
        318,
        315,
        312,
        310,
        307,
        304,
        302,
        299,
        297,
        294,
        292,
        289,
        287,
        285,
        282,
        280,
        278,
        275,
        273,
        271,
        269,
        267,
        265,
        263,
        261,
        259
      ];
      var shg_table = [
        9,
        11,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        15,
        15,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
      ];
      function blur(pixels, width, height, radius) {
        if (isNaN(radius) || radius < 1)
          return;
        radius |= 0;
        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
        var div = radius + radius + 1;
        var w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack2 = stackStart;
        for (i = 1; i < div; i++) {
          stack2 = stack2.next = new BlurStack();
          if (i == radiusPlus1)
            var stackEnd = stack2;
        }
        stack2.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        yw = yi = 0;
        var mul_sum = mul_table[radius];
        var shg_sum = shg_table[radius];
        for (y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack2 = stackStart;
          for (i = 0; i < radiusPlus1; i++) {
            stack2.r = pr;
            stack2.g = pg;
            stack2.b = pb;
            stack2.a = pa;
            stack2 = stack2.next;
          }
          for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack2.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack2.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack2.b = pb = pixels[p + 2]) * rbs;
            a_sum += (stack2.a = pa = pixels[p + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack2 = stack2.next;
          }
          stackIn = stackStart;
          stackOut = stackEnd;
          for (x = 0; x < width; x++) {
            pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa != 0) {
              pa = 255 / pa;
              pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            a_in_sum += stackIn.a = pixels[p + 3];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += 4;
          }
          yw += width;
        }
        for (x = 0; x < width; x++) {
          g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack2 = stackStart;
          for (i = 0; i < radiusPlus1; i++) {
            stack2.r = pr;
            stack2.g = pg;
            stack2.b = pb;
            stack2.a = pa;
            stack2 = stack2.next;
          }
          yp = width;
          for (i = 1; i <= radius; i++) {
            yi = yp + x << 2;
            r_sum += (stack2.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack2.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack2.b = pb = pixels[yi + 2]) * rbs;
            a_sum += (stack2.a = pa = pixels[yi + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack2 = stack2.next;
            if (i < heightMinus1) {
              yp += width;
            }
          }
          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;
          for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa > 0) {
              pa = 255 / pa;
              pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            a_sum += a_in_sum += stackIn.a = pixels[p + 3];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += width;
          }
        }
      }
      function BlurStack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
      }
      module.exports = blur;
    }
  });

  // src/g.js
  var g_exports = {};
  __export(g_exports, {
    default: () => g_default
  });

  // src/libraries/vg/index.js
  var vg_exports = {};
  __export(vg_exports, {
    CLOSE: () => CLOSE,
    CURVETO: () => CURVETO,
    Color: () => Color,
    EAST: () => EAST,
    Group: () => Group,
    HORIZONTAL: () => HORIZONTAL,
    LINETO: () => LINETO,
    MOVETO: () => MOVETO,
    Matrix4: () => Matrix4,
    NORTH: () => NORTH,
    Path: () => Path,
    Point: () => Point,
    QUADTO: () => QUADTO,
    Rect: () => Rect,
    SOUTH: () => SOUTH,
    Text: () => Text,
    Transform: () => Transform,
    VERTICAL: () => VERTICAL,
    Vec3: () => Vec3,
    WEST: () => WEST,
    _angleToPoint: () => _angleToPoint,
    _compoundPathKit: () => _compoundPathKit,
    _compoundToPoints: () => _compoundToPoints,
    _distanceToPoint: () => _distanceToPoint,
    _locate: () => _locate,
    _wiggleContours: () => _wiggleContours,
    _wigglePaths: () => _wigglePaths,
    _wigglePoints: () => _wigglePoints,
    _x: () => _x,
    _y: () => _y,
    align: () => align,
    angle: () => angle,
    arc: () => arc,
    bounds: () => bounds,
    centerPoint: () => centerPoint,
    colorize: () => colorize,
    combinePaths: () => combinePaths,
    compound: () => compound,
    connectPoints: () => connectPoints,
    coordinates: () => coordinates,
    copy: () => copy,
    curve: () => curve,
    curveLength: () => curveLength,
    curvePoint: () => curvePoint,
    deletePaths: () => deletePaths,
    deletePoints: () => deletePoints,
    delete_: () => delete_,
    demoEllipse: () => demoEllipse,
    demoRect: () => demoRect,
    distance: () => distance,
    draw: () => draw,
    drawColoredPoints: () => drawColoredPoints,
    drawColors: () => drawColors,
    drawPoints: () => drawPoints,
    drawRectangles: () => drawRectangles,
    ellipse: () => ellipse,
    extrema: () => extrema,
    fit: () => fit,
    fitTo: () => fitTo,
    freehand: () => freehand,
    grid: () => grid,
    group: () => group,
    hex2rgb: () => hex2rgb,
    hsb2rgb: () => hsb2rgb,
    hsl2rgb: () => hsl2rgb,
    isDrawable: () => isDrawable,
    length: () => length,
    line: () => line,
    lineAngle: () => lineAngle,
    lineLength: () => lineLength,
    linePoint: () => linePoint,
    link: () => link,
    makeCenteredRect: () => makeCenteredRect,
    makePoint: () => makePoint,
    makeRect: () => makeRect,
    math: () => math_exports,
    merge: () => merge,
    mirror: () => mirror,
    namedColors: () => namedColors,
    nonEmpty: () => nonEmpty,
    pathLength: () => pathLength,
    point: () => point,
    pointInPolygon: () => pointInPolygon,
    pointOnPath: () => pointOnPath,
    polygon: () => polygon,
    quad: () => quad,
    rect: () => rect,
    resampleByAmount: () => resampleByAmount,
    resampleByLength: () => resampleByLength,
    rgb2hex: () => rgb2hex,
    rgb2hsb: () => rgb2hsb,
    rgb2hsl: () => rgb2hsl,
    rgba2hex: () => rgba2hex,
    rotate: () => rotate,
    roundedRect: () => roundedRect,
    roundedSegments: () => roundedSegments,
    scale: () => scale,
    scatterPoints: () => scatterPoints,
    segmentLengths: () => segmentLengths,
    shapeOnPath: () => shapeOnPath,
    shapePoints: () => shapePoints,
    shapeSort: () => shapeSort,
    skew: () => skew,
    snap: () => snap2,
    star: () => star,
    stripCommas: () => stripCommas,
    svg: () => svg_exports,
    text: () => text,
    toPoints: () => toPoints,
    toSVG: () => toSVG,
    translate: () => translate,
    ungroup: () => ungroup,
    wiggleContours: () => wiggleContours,
    wigglePaths: () => wigglePaths,
    wigglePoints: () => wigglePoints
  });

  // src/libraries/vg/util/math.js
  var math_exports = {};
  __export(math_exports, {
    clamp: () => clamp,
    degrees: () => degrees,
    dot: () => dot,
    lerp: () => lerp,
    mix: () => mix,
    noise: () => noise,
    radians: () => radians,
    round: () => round,
    sign: () => sign,
    snap: () => snap,
    sum: () => sum
  });
  function sum(values) {
    let i, n = values.length, total2 = 0;
    for (i = 0; i < n; i += 1) {
      total2 += values[i];
    }
    return total2;
  }
  function round(x, decimals) {
    return !decimals ? Math.round(x) : Math.round(x * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }
  function sign(x) {
    if (x < 0) {
      return -1;
    }
    if (x > 0) {
      return 1;
    }
    return 0;
  }
  function degrees(radians4) {
    return radians4 * 180 / Math.PI;
  }
  function radians(degrees3) {
    return degrees3 / 180 * Math.PI;
  }
  function clamp(v, min2, max2) {
    if (min2 < max2) {
      return v < min2 ? min2 : v > max2 ? max2 : v;
    } else {
      return v < max2 ? max2 : v > min2 ? min2 : v;
    }
  }
  function snap(v, distance4, strength) {
    strength = strength !== void 0 ? strength : 1;
    return v * (1 - strength) + strength * Math.round(v / distance4) * distance4;
  }
  function dot(a, b) {
    let m = Math.min(a.length, b.length), n = 0, i;
    for (i = 0; i < m; i += 1) {
      n += a[i] * b[i];
    }
    return n;
  }
  function lerp(from, to, t, clamp5) {
    if (clamp5) {
      if (t < 0) {
        return from;
      }
      if (t > 1) {
        return to;
      }
    }
    return from + (to - from) * t;
  }
  var mix = lerp;
  function _fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function _grad(hash, x, y, z) {
    let h, u, v;
    h = hash & 15;
    u = h < 8 ? x : y;
    v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
  function _scale(n) {
    return (1 + n) / 2;
  }
  var _permutation = function() {
    let permutation, p, i;
    permutation = [
      151,
      160,
      137,
      91,
      90,
      15,
      131,
      13,
      201,
      95,
      96,
      53,
      194,
      233,
      7,
      225,
      140,
      36,
      103,
      30,
      69,
      142,
      8,
      99,
      37,
      240,
      21,
      10,
      23,
      190,
      6,
      148,
      247,
      120,
      234,
      75,
      0,
      26,
      197,
      62,
      94,
      252,
      219,
      203,
      117,
      35,
      11,
      32,
      57,
      177,
      33,
      88,
      237,
      149,
      56,
      87,
      174,
      20,
      125,
      136,
      171,
      168,
      68,
      175,
      74,
      165,
      71,
      134,
      139,
      48,
      27,
      166,
      77,
      146,
      158,
      231,
      83,
      111,
      229,
      122,
      60,
      211,
      133,
      230,
      220,
      105,
      92,
      41,
      55,
      46,
      245,
      40,
      244,
      102,
      143,
      54,
      65,
      25,
      63,
      161,
      1,
      216,
      80,
      73,
      209,
      76,
      132,
      187,
      208,
      89,
      18,
      169,
      200,
      196,
      135,
      130,
      116,
      188,
      159,
      86,
      164,
      100,
      109,
      198,
      173,
      186,
      3,
      64,
      52,
      217,
      226,
      250,
      124,
      123,
      5,
      202,
      38,
      147,
      118,
      126,
      255,
      82,
      85,
      212,
      207,
      206,
      59,
      227,
      47,
      16,
      58,
      17,
      182,
      189,
      28,
      42,
      223,
      183,
      170,
      213,
      119,
      248,
      152,
      2,
      44,
      154,
      163,
      70,
      221,
      153,
      101,
      155,
      167,
      43,
      172,
      9,
      129,
      22,
      39,
      253,
      19,
      98,
      108,
      110,
      79,
      113,
      224,
      232,
      178,
      185,
      112,
      104,
      218,
      246,
      97,
      228,
      251,
      34,
      242,
      193,
      238,
      210,
      144,
      12,
      191,
      179,
      162,
      241,
      81,
      51,
      145,
      235,
      249,
      14,
      239,
      107,
      49,
      192,
      214,
      31,
      181,
      199,
      106,
      157,
      184,
      84,
      204,
      176,
      115,
      121,
      50,
      45,
      127,
      4,
      150,
      254,
      138,
      236,
      205,
      93,
      222,
      114,
      67,
      29,
      24,
      72,
      243,
      141,
      128,
      195,
      78,
      66,
      215,
      61,
      156,
      180
    ];
    p = new Uint8Array(512);
    for (i = 0; i < 256; i += 1) {
      p[256 + i] = p[i] = permutation[i];
    }
    return p;
  }();
  function noise(x, y, z) {
    const p = _permutation;
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = _fade(x);
    const v = _fade(y);
    const w = _fade(z);
    const A = p[X] + Y;
    const AA = p[A] + Z;
    const AB = p[A + 1] + Z;
    const B = p[X + 1] + Y;
    const BA = p[B] + Z;
    const BB = p[B + 1] + Z;
    return _scale(
      lerp(
        lerp(
          lerp(_grad(p[AA], x, y, z), _grad(p[BA], x - 1, y, z), u),
          lerp(_grad(p[AB], x, y - 1, z), _grad(p[BB], x - 1, y - 1, z), u),
          v
        ),
        lerp(
          lerp(
            _grad(p[AA + 1], x, y, z - 1),
            _grad(p[BA + 1], x - 1, y, z - 1),
            u
          ),
          lerp(
            _grad(p[AB + 1], x, y - 1, z - 1),
            _grad(p[BB + 1], x - 1, y - 1, z - 1),
            u
          ),
          v
        ),
        w
      )
    );
  }

  // src/libraries/vg/objects/point.js
  var Point = class {
    constructor(x, y) {
      this.x = x !== void 0 ? x : 0;
      this.y = y !== void 0 ? y : 0;
    }
    static read(x, y) {
      if (arguments.length === 2) {
        return new Point(x, y);
      }
      const arg = x;
      if (arg instanceof Point) {
        return arg;
      } else if (typeof arg === "number") {
        return new Point(arg, arg);
      } else if (Array.isArray(arg)) {
        if (arg.length === 0) {
          return Point.ZERO;
        }
        x = arg[0];
        y = arg.length > 1 ? arg[1] : x;
        return new Point(x, y);
      } else if (arg.x !== void 0 && arg.y !== void 0) {
        return new Point(arg.x, arg.y);
      } else {
        return Point.ZERO;
      }
    }
    clone() {
      return new Point(this.x, this.y);
    }
    add(v) {
      return new Point(this.x + v.x, this.y + v.y);
    }
    sub(v) {
      return new Point(this.x - v.x, this.y - v.y);
    }
    divide(n) {
      return new Point(this.x / n, this.y / n);
    }
    multiply(n) {
      return new Point(this.x * n, this.y * n);
    }
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    magnitudeSquared() {
      return this.x * this.x + this.y * this.y;
    }
    heading() {
      return Math.atan2(this.y, this.x);
    }
    distanceTo(v) {
      const dx = this.x - v.x, dy = this.y - v.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    normalize() {
      const m = this.magnitude();
      if (m !== 0) {
        return this.divide(m);
      } else {
        return Point.ZERO;
      }
    }
    limit(speed) {
      if (this.magnitudeSquared() > speed * speed) {
        return this.normalize().multiply(speed);
      }
      return this;
    }
    translate(tx, ty) {
      return new Point(this.x + tx, this.y + ty);
    }
    scale(sx, sy) {
      sy = sy !== void 0 ? sy : sx;
      return new Point(this.x * sx, this.y * sy);
    }
    toString() {
      return "[" + this.x + ", " + this.y + "]";
    }
  };
  Object.defineProperty(Point.prototype, "xy", {
    get: function() {
      return [this.x, this.y];
    }
  });
  Point.ZERO = new Point(0, 0);
  Point.prototype.subtract = Point.prototype.sub;

  // src/libraries/vg/objects/rect.js
  var Rect = class {
    constructor(x, y, width, height) {
      this.x = x !== void 0 ? x : 0;
      this.y = y !== void 0 ? y : 0;
      this.width = width !== void 0 ? width : 0;
      this.height = height !== void 0 ? height : 0;
    }
    // Returns a new rectangle where width and height are guaranteed to be positive values.
    normalize() {
      let x = this.x, y = this.y, width = this.width, height = this.height;
      if (width < 0) {
        x += width;
        width = -width;
      }
      if (height < 0) {
        y += height;
        height = -height;
      }
      return new Rect(x, y, width, height);
    }
    containsPoint(x, y) {
      if (arguments.length === 1) {
        y = x.y;
        x = x.x;
      }
      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
    containsRect(r) {
      return r.x >= this.x && r.x + r.width <= this.x + this.width && r.y >= this.y && r.y + r.height <= this.y + this.height;
    }
    grow(dx, dy) {
      const x = this.x - dx, y = this.y - dy, width = this.width + dx * 2, height = this.height + dy * 2;
      return new Rect(x, y, width, height);
    }
    unite(r) {
      const x = Math.min(this.x, r.x), y = Math.min(this.y, r.y), width = Math.max(this.x + this.width, r.x + r.width) - x, height = Math.max(this.y + this.height, r.y + r.height) - y;
      return new Rect(x, y, width, height);
    }
    addPoint(x, y) {
      let dx, dy, _x2 = this.x, _y2 = this.y, width = this.width, height = this.height;
      if (x < this.x) {
        dx = this.x - x;
        _x2 = x;
        width += dx;
      } else if (x > this.x + this.width) {
        dx = x - (this.x + this.width);
        width += dx;
      }
      if (y < this.y) {
        dy = this.y - y;
        _y2 = y;
        height += dy;
      } else if (y > this.y + this.height) {
        dy = y - (this.y + this.height);
        height += dy;
      }
      return new Rect(_x2, _y2, width, height);
    }
    centerPoint() {
      return new Point(this.x + this.width / 2, this.y + this.height / 2);
    }
  };
  Object.defineProperty(Rect.prototype, "xywh", {
    get: function() {
      return [this.x, this.y, this.width, this.height];
    }
  });

  // src/libraries/vg/util/bezier.js
  var MOVETO = "M";
  var LINETO = "L";
  var QUADTO = "Q";
  var CURVETO = "C";
  var CLOSE = "Z";
  function linePoint(t, x0, y0, x1, y1) {
    const x = x0 + t * (x1 - x0), y = y0 + t * (y1 - y0);
    return { type: LINETO, x, y };
  }
  function lineLength(x0, y0, x1, y1) {
    const a = Math.pow(Math.abs(x0 - x1), 2), b = Math.pow(Math.abs(y0 - y1), 2);
    return Math.sqrt(a + b);
  }
  function curvePoint(t, x0, y0, x1, y1, x2, y2, x3, y3) {
    const dt = 1 - t, x01 = x0 * dt + x1 * t, y01 = y0 * dt + y1 * t, x12 = x1 * dt + x2 * t, y12 = y1 * dt + y2 * t, x23 = x2 * dt + x3 * t, y23 = y2 * dt + y3 * t, h1x = x01 * dt + x12 * t, h1y = y01 * dt + y12 * t, h2x = x12 * dt + x23 * t, h2y = y12 * dt + y23 * t, x = h1x * dt + h2x * t, y = h1y * dt + h2y * t;
    return { type: CURVETO, x1: h1x, y1: h1y, x2: h2x, y2: h2y, x, y };
  }
  function curveLength(x0, y0, x1, y1, x2, y2, x3, y3, n) {
    if (n === void 0) {
      n = 20;
    }
    let i, t, cmd, length2 = 0, xi = x0, yi = y0;
    for (i = 0; i < n; i += 1) {
      t = (i + 1) / n;
      cmd = curvePoint(t, x0, y0, x1, y1, x2, y2, x3, y3);
      length2 += Math.sqrt(
        Math.pow(Math.abs(xi - cmd.x), 2) + Math.pow(Math.abs(yi - cmd.y), 2)
      );
      xi = cmd.x;
      yi = cmd.y;
    }
    return length2;
  }
  function segmentLengths(commands, relative, n) {
    relative = relative !== void 0 ? relative : false;
    if (n === void 0) {
      n = 20;
    }
    let i, cmd, type, closeX, closeY, x0, y0, s, lengths, ll;
    lengths = [];
    for (i = 0; i < commands.length; i += 1) {
      cmd = commands[i];
      type = cmd.type;
      if (i === 0) {
        closeX = cmd.x;
        closeY = cmd.y;
      } else if (type === MOVETO) {
        closeX = cmd.x;
        closeY = cmd.y;
        lengths.push(0);
      } else if (type === CLOSE) {
        lengths.push(lineLength(x0, y0, closeX, closeY));
      } else if (type === LINETO) {
        lengths.push(lineLength(x0, y0, cmd.x, cmd.y));
      } else if (type === CURVETO) {
        lengths.push(
          curveLength(x0, y0, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y, n)
        );
      }
      if (type !== CLOSE) {
        x0 = cmd.x;
        y0 = cmd.y;
      }
    }
    if (relative === true) {
      s = sum(lengths);
      ll = [];
      ll.length = lengths.length;
      if (s > 0) {
        for (i = 0; i < lengths.length; i += 1) {
          ll[i] = lengths[i] / s;
        }
      } else {
        for (i = 0; i < lengths.length; i += 1) {
          ll[i] = 0;
        }
      }
      return ll;
    }
    return lengths;
  }
  function length(path, n) {
    n = n || 20;
    return sum(segmentLengths(path.commands, false, n));
  }
  function _locate(path, t, segmentLengths2) {
    let i, cmd, closeTo;
    if (segmentLengths2 === void 0) {
      segmentLengths2 = segmentLengths2(path.commands, true);
    }
    for (i = 0; i < path.commands.length; i += 1) {
      cmd = path.commands[i];
      if (i === 0 || cmd.type === MOVETO) {
        closeTo = new Point(cmd.x, cmd.y);
      }
      if (t <= segmentLengths2[i] || i === segmentLengths2.length - 1) {
        break;
      }
      t -= segmentLengths2[i];
    }
    if (segmentLengths2[i] !== 0) {
      t /= segmentLengths2[i];
    }
    if (i === segmentLengths2.length - 1 && segmentLengths2[i] === 0) {
      i -= 1;
    }
    return [i, t, closeTo];
  }
  function point(path, t, segmentLengths2) {
    let loc, i, closeTo, x0, y0, cmd;
    loc = _locate(path, t, segmentLengths2);
    i = loc[0];
    t = loc[1];
    closeTo = loc[2];
    x0 = path.commands[i].x;
    y0 = path.commands[i].y;
    cmd = path.commands[i + 1];
    if (cmd.type === LINETO || cmd.type === CLOSE) {
      cmd = cmd.type === CLOSE ? linePoint(t, x0, y0, closeTo.x, closeTo.y) : linePoint(t, x0, y0, cmd.x, cmd.y);
    } else if (cmd.type === CURVETO) {
      cmd = curvePoint(t, x0, y0, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
    }
    return cmd;
  }
  function fuzzyCompare(p1, p2) {
    return Math.abs(p1 - p2) <= 1e-12 * Math.min(Math.abs(p1), Math.abs(p2));
  }
  function coefficients(t) {
    let mT, a, b, c, d;
    mT = 1 - t;
    b = mT * mT;
    c = t * t;
    d = c * t;
    a = b * mT;
    b *= 3 * t;
    c *= 3 * mT;
    return [a, b, c, d];
  }
  function pointAt(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    let a, b, c, d, coeff;
    coeff = coefficients(t);
    a = coeff[0];
    b = coeff[1];
    c = coeff[2];
    d = coeff[3];
    return {
      x: a * x1 + b * x2 + c * x3 + d * x4,
      y: a * y1 + b * y2 + c * y3 + d * y4
    };
  }
  function extrema(x1, y1, x2, y2, x3, y3, x4, y4) {
    let minX, maxX, minY, maxY, ax, bx, cx, ay, by, cy, temp, rcp, tx, ty;
    function bezierCheck(t) {
      if (t >= 0 && t <= 1) {
        const p = pointAt(x1, y1, x2, y2, x3, y3, x4, y4, t);
        if (p.x < minX) {
          minX = p.x;
        } else if (p.x > maxX) {
          maxX = p.x;
        }
        if (p.y < minY) {
          minY = p.y;
        } else if (p.y > maxY) {
          maxY = p.y;
        }
      }
    }
    if (x1 < x4) {
      minX = x1;
      maxX = x4;
    } else {
      minX = x4;
      maxX = x1;
    }
    if (y1 < y4) {
      minY = y1;
      maxY = y4;
    } else {
      minY = y4;
      maxY = y1;
    }
    ax = 3 * (-x1 + 3 * x2 - 3 * x3 + x4);
    bx = 6 * (x1 - 2 * x2 + x3);
    cx = 3 * (-x1 + x2);
    if (fuzzyCompare(ax + 1, 1)) {
      if (!fuzzyCompare(bx + 1, 1)) {
        bezierCheck(-cx / bx);
      }
    } else {
      tx = bx * bx - 4 * ax * cx;
      if (tx >= 0) {
        temp = Math.sqrt(tx);
        rcp = 1 / (2 * ax);
        bezierCheck((-bx + temp) * rcp);
        bezierCheck((-bx - temp) * rcp);
      }
    }
    ay = 3 * (-y1 + 3 * y2 - 3 * y3 + y4);
    by = 6 * (y1 - 2 * y2 + y3);
    cy = 3 * (-y1 + y2);
    if (fuzzyCompare(ay + 1, 1)) {
      if (!fuzzyCompare(by + 1, 1)) {
        bezierCheck(-cy / by);
      }
    } else {
      ty = by * by - 4 * ay * cy;
      if (ty > 0) {
        temp = Math.sqrt(ty);
        rcp = 1 / (2 * ay);
        bezierCheck((-by + temp) * rcp);
        bezierCheck((-by - temp) * rcp);
      }
    }
    return new Rect(minX, minY, maxX - minX, maxY - minY);
  }

  // src/libraries/vg/util/color.js
  var namedColors = {
    lightpink: [1, 0.71, 0.76],
    pink: [1, 0.75, 0.8],
    crimson: [0.86, 0.08, 0.24],
    lavenderblush: [1, 0.94, 0.96],
    palevioletred: [0.86, 0.44, 0.58],
    hotpink: [1, 0.41, 0.71],
    deeppink: [1, 0.08, 0.58],
    mediumvioletred: [0.78, 0.08, 0.52],
    orchid: [0.85, 0.44, 0.84],
    thistle: [0.85, 0.75, 0.85],
    plum: [0.87, 0.63, 0.87],
    violet: [0.93, 0.51, 0.93],
    fuchsia: [1, 0, 1],
    darkmagenta: [0.55, 0, 0.55],
    purple: [0.5, 0, 0.5],
    mediumorchid: [0.73, 0.33, 0.83],
    darkviolet: [0.58, 0, 0.83],
    darkorchid: [0.6, 0.2, 0.8],
    indigo: [0.29, 0, 0.51],
    blueviolet: [0.54, 0.17, 0.89],
    mediumpurple: [0.58, 0.44, 0.86],
    mediumslateblue: [0.48, 0.41, 0.93],
    slateblue: [0.42, 0.35, 0.8],
    darkslateblue: [0.28, 0.24, 0.55],
    ghostwhite: [0.97, 0.97, 1],
    lavender: [0.9, 0.9, 0.98],
    blue: [0, 0, 1],
    mediumblue: [0, 0, 0.8],
    darkblue: [0, 0, 0.55],
    navy: [0, 0, 0.5],
    midnightblue: [0.1, 0.1, 0.44],
    royalblue: [0.25, 0.41, 0.88],
    cornflowerblue: [0.39, 0.58, 0.93],
    lightsteelblue: [0.69, 0.77, 0.87],
    lightslategray: [0.47, 0.53, 0.6],
    slategray: [0.44, 0.5, 0.56],
    dodgerblue: [0.12, 0.56, 1],
    aliceblue: [0.94, 0.97, 1],
    steelblue: [0.27, 0.51, 0.71],
    lightskyblue: [0.53, 0.81, 0.98],
    skyblue: [0.53, 0.81, 0.92],
    deepskyblue: [0, 0.75, 1],
    lightblue: [0.68, 0.85, 0.9],
    powderblue: [0.69, 0.88, 0.9],
    cadetblue: [0.37, 0.62, 0.63],
    darkturquoise: [0, 0.81, 0.82],
    azure: [0.94, 1, 1],
    lightcyan: [0.88, 1, 1],
    paleturquoise: [0.69, 0.93, 0.93],
    aqua: [0, 1, 1],
    darkcyan: [0, 0.55, 0.55],
    teal: [0, 0.5, 0.5],
    darkslategray: [0.18, 0.31, 0.31],
    mediumturquoise: [0.28, 0.82, 0.8],
    lightseagreen: [0.13, 0.7, 0.67],
    turquoise: [0.25, 0.88, 0.82],
    aquamarine: [0.5, 1, 0.83],
    mediumaquamarine: [0.4, 0.8, 0.67],
    mediumspringgreen: [0, 0.98, 0.6],
    mintcream: [0.96, 1, 0.98],
    springgreen: [0, 1, 0.5],
    mediumseagreen: [0.24, 0.7, 0.44],
    seagreen: [0.18, 0.55, 0.34],
    honeydew: [0.94, 1, 0.94],
    darkseagreen: [0.56, 0.74, 0.56],
    palegreen: [0.6, 0.98, 0.6],
    lightgreen: [0.56, 0.93, 0.56],
    limegreen: [0.2, 0.8, 0.2],
    lime: [0, 1, 0],
    forestgreen: [0.13, 0.55, 0.13],
    green: [0, 0.5, 0],
    darkgreen: [0, 0.39, 0],
    lawngreen: [0.49, 0.99, 0],
    chartreuse: [0.5, 1, 0],
    greenyellow: [0.68, 1, 0.18],
    darkolivegreen: [0.33, 0.42, 0.18],
    yellowgreen: [0.6, 0.8, 0.2],
    olivedrab: [0.42, 0.56, 0.14],
    ivory: [1, 1, 0.94],
    beige: [0.96, 0.96, 0.86],
    lightyellow: [1, 1, 0.88],
    lightgoldenrodyellow: [0.98, 0.98, 0.82],
    yellow: [1, 1, 0],
    olive: [0.5, 0.5, 0],
    darkkhaki: [0.74, 0.72, 0.42],
    palegoldenrod: [0.93, 0.91, 0.67],
    lemonchiffon: [1, 0.98, 0.8],
    khaki: [0.94, 0.9, 0.55],
    gold: [1, 0.84, 0],
    cornsilk: [1, 0.97, 0.86],
    goldenrod: [0.85, 0.65, 0.13],
    darkgoldenrod: [0.72, 0.53, 0.04],
    floralwhite: [1, 0.98, 0.94],
    oldlace: [0.99, 0.96, 0.9],
    wheat: [0.96, 0.87, 0.07],
    orange: [1, 0.65, 0],
    moccasin: [1, 0.89, 0.71],
    papayawhip: [1, 0.94, 0.84],
    blanchedalmond: [1, 0.92, 0.8],
    navajowhite: [1, 0.87, 0.68],
    antiquewhite: [0.98, 0.92, 0.84],
    tan: [0.82, 0.71, 0.55],
    burlywood: [0.87, 0.72, 0.53],
    darkorange: [1, 0.55, 0],
    bisque: [1, 0.89, 0.77],
    linen: [0.98, 0.94, 0.9],
    peru: [0.8, 0.52, 0.25],
    peachpuff: [1, 0.85, 0.73],
    sandybrown: [0.96, 0.64, 0.38],
    chocolate: [0.82, 0.41, 0.12],
    saddlebrown: [0.55, 0.27, 0.07],
    seashell: [1, 0.96, 0.93],
    sienna: [0.63, 0.32, 0.18],
    lightsalmon: [1, 0.63, 0.48],
    coral: [1, 0.5, 0.31],
    orangered: [1, 0.27, 0],
    darksalmon: [0.91, 0.59, 0.48],
    tomato: [1, 0.39, 0.28],
    salmon: [0.98, 0.5, 0.45],
    mistyrose: [1, 0.89, 0.88],
    lightcoral: [0.94, 0.5, 0.5],
    snow: [1, 0.98, 0.98],
    rosybrown: [0.74, 0.56, 0.56],
    indianred: [0.8, 0.36, 0.36],
    red: [1, 0, 0],
    brown: [0.65, 0.16, 0.16],
    firebrick: [0.7, 0.13, 0.13],
    darkred: [0.55, 0, 0],
    maroon: [0.5, 0, 0],
    white: [1, 1, 1],
    whitesmoke: [0.96, 0.96, 0.96],
    gainsboro: [0.86, 0.86, 0.86],
    lightgrey: [0.83, 0.83, 0.83],
    silver: [0.75, 0.75, 0.75],
    darkgray: [0.66, 0.66, 0.66],
    gray: [0.5, 0.5, 0.5],
    grey: [0.5, 0.5, 0.5],
    dimgray: [0.41, 0.41, 0.41],
    dimgrey: [0.41, 0.41, 0.41],
    black: [0, 0, 0],
    cyan: [0, 0.68, 0.94],
    transparent: [0, 0, 0, 0],
    bark: [0.25, 0.19, 0.13]
  };
  function toHex(i) {
    let s;
    if (i === 0) {
      return "00";
    } else {
      s = i.toString(16).toUpperCase();
      if (s.length < 2) {
        s = "0" + s;
      }
      return s;
    }
  }
  function rgb2hex(r, g2, b) {
    return "#" + toHex(Math.round(r * 255)) + toHex(Math.round(g2 * 255)) + toHex(Math.round(b * 255));
  }
  function rgba2hex(r, g2, b, a) {
    return "#" + toHex(Math.round(r * 255)) + toHex(Math.round(g2 * 255)) + toHex(Math.round(b * 255)) + toHex(Math.round(a * 255));
  }
  function hex2rgb(hex) {
    let r, g2, b;
    hex = hex.replace(/^#/, "");
    if (hex.length !== 3 && hex.length !== 6 || !/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Invalid hex value: #" + hex);
    }
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    r = parseInt(hex.substr(0, 2), 16) / 255;
    g2 = parseInt(hex.substr(2, 2), 16) / 255;
    b = parseInt(hex.substr(4, 2), 16) / 255;
    return [r, g2, b];
  }
  function rgb2hsb(r, g2, b) {
    let h = 0, s = 0, v = Math.max(r, g2, b), d = v - Math.min(r, g2, b);
    if (v !== 0) {
      s = d / v;
    }
    if (s !== 0) {
      if (r === v) {
        h = 0 + (g2 - b) / d;
      } else if (g2 === v) {
        h = 2 + (b - r) / d;
      } else {
        h = 4 + (r - g2) / d;
      }
    }
    h = h * (60 / 360);
    if (h < 0) {
      h += 1;
    }
    return [h, s, v];
  }
  function hsb2rgb(h, s, v) {
    if (s === 0) {
      return [v, v, v];
    }
    h = h % 1 * 6;
    const i = Math.floor(h), f = h - i, x = v * (1 - s), y = v * (1 - s * f), z = v * (1 - s * (1 - f));
    if (i > 4) {
      return [v, x, y];
    }
    return [
      [v, z, x],
      [y, v, x],
      [x, v, z],
      [x, y, v],
      [z, x, v]
    ][parseInt(i, 10)];
  }
  function rgb2hsl(r, g2, b) {
    let min2 = Math.min(r, g2, b), max2 = Math.max(r, g2, b), delta = max2 - min2, h, s, l;
    if (max2 === min2) {
      h = 0;
    } else if (r === max2) {
      h = (g2 - b) / delta;
    } else if (g2 === max2) {
      h = 2 + (b - r) / delta;
    } else if (b === max2) {
      h = 4 + (r - g2) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    l = (min2 + max2) / 2;
    if (max2 === min2) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max2 + min2);
    } else {
      s = delta / (2 - max2 - min2);
    }
    return [h / 360, s, l];
  }
  function hsl2rgb(h, s, l) {
    let t1, t2, t3, rgb, val;
    if (s === 0) {
      val = l;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    t1 = 2 * l - t2;
    rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3 += 1;
      }
      if (t3 > 1) {
        t3 -= 1;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val;
    }
    return rgb;
  }

  // src/libraries/vg/util/geo.js
  function angle(x0, y0, x1, y1) {
    return degrees(Math.atan2(y1 - y0, x1 - x0));
  }
  function distance(x0, y0, x1, y1) {
    return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
  }
  function coordinates(x0, y0, angle3, distance4) {
    const x = x0 + Math.cos(radians(angle3)) * distance4, y = y0 + Math.sin(radians(angle3)) * distance4;
    return new Point(x, y);
  }
  function pointInPolygon(points, x, y) {
    let i, j, x0, y0, x1, y1, odd2 = false, n = points.length;
    for (i = 0; i < n; i += 1) {
      j = i < n - 1 ? i + 1 : 0;
      x0 = points[i].x;
      y0 = points[i].y;
      x1 = points[j].x;
      y1 = points[j].y;
      if (y0 < y && y1 >= y || y1 < y && y0 >= y) {
        if (x0 + (y - y0) / (y1 - y0) * (x1 - x0) < x) {
          odd2 = !odd2;
        }
      }
    }
    return odd2;
  }

  // src/libraries/vg/util/svg.js
  var svg_exports = {};
  __export(svg_exports, {
    interpret: () => interpret,
    parseString: () => parseString
  });
  var import_xmldom = __toESM(require_lib(), 1);

  // src/libraries/math.js
  var math_exports2 = {};
  __export(math_exports2, {
    abs: () => abs,
    accumulate: () => accumulate,
    add: () => add,
    and: () => and,
    average: () => average,
    boolean: () => boolean,
    ceil: () => ceil,
    clamp: () => clamp2,
    compare: () => compare,
    cos: () => cos,
    degrees: () => degrees2,
    divide: () => divide,
    e: () => e,
    even: () => even,
    floor: () => floor,
    integer: () => integer,
    log: () => log,
    makeNumbers: () => makeNumbers,
    max: () => max,
    min: () => min,
    mod: () => mod,
    multiply: () => multiply,
    negate: () => negate,
    not: () => not,
    number: () => number,
    odd: () => odd,
    or: () => or,
    perlinNoise: () => perlinNoise,
    pi: () => pi,
    pow: () => pow,
    radians: () => radians2,
    randomNumbers: () => randomNumbers,
    range: () => range,
    round: () => round2,
    sample: () => sample,
    sawtoothWave: () => sawtoothWave,
    sign: () => sign2,
    sin: () => sin,
    sineWave: () => sineWave,
    sqrt: () => sqrt,
    squareWave: () => squareWave,
    subtract: () => subtract,
    tan: () => tan,
    total: () => total,
    triangleWave: () => triangleWave,
    xor: () => xor
  });

  // src/libraries/random.js
  function generator(seed) {
    if (seed < 0) {
      const gen = generator(Math.abs(seed));
      for (let i = 0; i < 23; i += 1) {
        gen();
      }
      return generator(gen(0, 1e4));
    }
    return function(min2, max2) {
      min2 = min2 || 0;
      max2 = max2 || 1;
      seed = (seed * 9301 + 49297) % 233280;
      const v = seed / 233280;
      return min2 + v * (max2 - min2);
    };
  }

  // src/libraries/math.js
  var TWO_PI = Math.PI * 2;
  var abs = Math.abs;
  function _checkIfFirstArgIsArray(args) {
    if (args.length === 1 && Array.isArray(args[0])) {
      args = args[0];
    }
    return args;
  }
  function accumulate(...args) {
    args = _checkIfFirstArgIsArray(args);
    if (!args || args.length === 0) {
      return [0];
    }
    const result = [];
    let sum2 = 0;
    for (let i = 0; i < args.length; i++) {
      result.push(sum2);
      sum2 += args[i];
    }
    return result;
  }
  function add(...args) {
    if (args.length === 2) {
      return args[0] + args[1];
    }
    return args.reduce((a, b) => a + b, 0);
  }
  function and(...args) {
    const argLength = args.length;
    if (argLength === 2) {
      return args[0] && args[1];
    } else if (argLength === 1) {
      return !!args[0];
    } else if (argLength === 0) {
      throw new Error("Wrong number of arguments");
    }
    return args.reduce((a, b) => a && b, true);
  }
  function average(...args) {
    args = _checkIfFirstArgIsArray(args);
    if (args.length === 0) {
      return 0;
    }
    return args.reduce((a, b) => a + b, 0) / args.length;
  }
  function boolean(v) {
    return !!v;
  }
  var ceil = Math.ceil;
  function clamp2(v, min2, max2) {
    min2 = typeof min2 === "number" ? min2 : 0;
    max2 = typeof max2 === "number" ? max2 : 1;
    return v < min2 ? min2 : v > max2 ? max2 : v;
  }
  function compare(v1, v2, comparator) {
    if (comparator === "<") {
      return v1 < v2;
    } else if (comparator === ">") {
      return v1 > v2;
    } else if (comparator === "<=") {
      return v1 <= v2;
    } else if (comparator === ">=") {
      return v1 >= v2;
    } else if (comparator === "==") {
      return v1 === v2;
    } else if (comparator === "!=") {
      return v1 !== v2;
    }
    throw new Error("Unknown comparison operation " + comparator);
  }
  var cos = Math.cos;
  function degrees2(radians4) {
    return radians4 * 180 / Math.PI;
  }
  function divide(...args) {
    const argLength = args.length;
    function checkIfZero(arg) {
      if (arg === 0) {
        throw new Error("Divide by zero");
      }
    }
    if (argLength === 2) {
      checkIfZero(args[1]);
      return args[0] / args[1];
    } else if (argLength === 1) {
      checkIfZero(args[0]);
      return 1 / args[0];
    } else if (argLength === 0) {
      throw new Error("Wrong number of arguments");
    }
    return args.reduce((a, b) => {
      checkIfZero(b);
      return a / b;
    });
  }
  function e() {
    return Math.E;
  }
  function even(v) {
    return v % 2 === 0;
  }
  var floor = Math.floor;
  function integer(v) {
    return v | 0;
  }
  function log(v) {
    return v > 0 ? Math.log(v) : -Math.log(-v);
  }
  function makeNumbers(s, separator) {
    if (!s) {
      return [];
    }
    if (!separator) {
      separator = "";
    }
    let i, num, numbers = [], strings = s.split(separator);
    for (i = 0; i < strings.length; i += 1) {
      num = parseFloat(strings[i]);
      if (num === 0 || num) {
        numbers.push(num);
      }
    }
    return numbers;
  }
  function max(...args) {
    args = _checkIfFirstArgIsArray(args);
    if (args.length === 0) {
      return 0;
    }
    return Math.max.apply(null, args);
  }
  function min(...args) {
    args = _checkIfFirstArgIsArray(args);
    if (args.length === 0) {
      return 0;
    }
    return Math.min.apply(null, args);
  }
  function mod(a, b) {
    return a % b;
  }
  function multiply(...args) {
    const argLength = args.length;
    if (argLength === 2) {
      return args[0] * args[1];
    } else if (argLength === 1) {
      return args[0];
    }
    return args.reduce((a, b) => a * b, 1);
  }
  function negate(v) {
    return -v;
  }
  function not(bool) {
    return !bool;
  }
  function number(v) {
    return v;
  }
  function odd(v) {
    return v % 2 !== 0;
  }
  function or(...args) {
    const argLength = args.length;
    if (argLength === 2) {
      return args[0] || args[1];
    } else if (argLength === 1) {
      return !!args[0];
    } else if (argLength === 0) {
      throw new Error("Wrong number of arguments");
    }
    return args.reduce((a, b) => a || b, false);
  }
  function perlinNoise(x, y, z) {
    return noise(x, y, z);
  }
  function pi() {
    return Math.PI;
  }
  var pow = Math.pow;
  function radians2(degrees3) {
    return degrees3 * Math.PI / 180;
  }
  function randomNumbers(amount, min2, max2, seed) {
    const argLength = arguments.length;
    if (argLength < 4 || !seed && seed !== 0) {
      seed = Math.random();
    }
    if (argLength === 3 || argLength === 4) {
      min2 = min2 || 0;
      max2 = max2 || (max2 === 0 ? 0 : 1);
    } else if (argLength === 2) {
      max2 = min2 || (min2 === 0 ? 0 : 1);
      min2 = 0;
    } else if (argLength === 1) {
      min2 = 0;
      max2 = 1;
    }
    if (max2 < min2) {
      const tmp = max2;
      max2 = min2;
      min2 = tmp;
    }
    let v;
    const delta = max2 - min2;
    const numbers = [];
    const rand = generator(seed || 0);
    for (let i = 0; i < amount; i += 1) {
      v = min2 + rand(0, 1) * delta;
      numbers.push(v);
    }
    return numbers;
  }
  function range(min2, max2, step, includeMax) {
    if (min2 === max2) {
      return [];
    }
    if (step !== 0) {
      step = step || (min2 < max2 ? 1 : -1);
    }
    if (step > 0 && min2 > max2) {
      return [];
    }
    if (step < 0 && min2 < max2) {
      return [];
    }
    if (step === 0) {
      return [];
    }
    const values = [];
    let i;
    if (min2 < max2) {
      if (includeMax) {
        for (i = min2; i <= max2; i += step) {
          values.push(i);
        }
      } else {
        for (i = min2; i < max2; i += step) {
          values.push(i);
        }
      }
    } else {
      if (includeMax) {
        for (i = min2; i >= max2; i += step) {
          values.push(i);
        }
      } else {
        for (i = min2; i > max2; i += step) {
          values.push(i);
        }
      }
    }
    return values;
  }
  function round2(v, a) {
    a = a | 0;
    if (!a) {
      return Math.round(v);
    }
    return Math.round(v / a) * a;
  }
  function sample(amount, min2, max2, circular) {
    let d, values = [], i;
    values.length = amount;
    if (circular) {
      d = (max2 - min2) / amount;
    } else {
      d = (max2 - min2) / (amount - 1);
    }
    for (i = 0; i < amount; i += 1) {
      values[i] = min2 + i * d;
    }
    return values;
  }
  function sineWave(v, min2, max2, period, offset) {
    if (min2 === void 0) {
      min2 = -1;
    }
    if (max2 === void 0) {
      max2 = 1;
    }
    if (period === void 0) {
      period = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    const amplitude = (max2 - min2) / 2;
    return min2 + amplitude + Math.sin((offset + v) * TWO_PI / period) * amplitude;
  }
  function squareWave(v, min2, max2, period, offset) {
    if (min2 === void 0) {
      min2 = -1;
    }
    if (max2 === void 0) {
      max2 = 1;
    }
    if (period === void 0) {
      period = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    const halfPeriod = period / 2;
    const d = (v + offset) % period;
    if (d < halfPeriod) {
      return max2;
    } else {
      return min2;
    }
  }
  function triangleWave(v, min2, max2, period, offset) {
    if (min2 === void 0) {
      min2 = -1;
    }
    if (max2 === void 0) {
      max2 = 1;
    }
    if (period === void 0) {
      period = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    let amplitude = (max2 - min2) / 2, frequency = TWO_PI / period, phase = 0, time = v + offset + period / 4;
    if (time % period !== 0) {
      phase = time * frequency % TWO_PI;
    }
    if (phase < 0) {
      phase += TWO_PI;
    }
    return 2 * amplitude * (1 + -Math.abs(phase / TWO_PI * 2 - 1)) + min2;
  }
  function sawtoothWave(v, min2, max2, period, offset) {
    if (min2 === void 0) {
      min2 = -1;
    }
    if (max2 === void 0) {
      max2 = 1;
    }
    if (period === void 0) {
      period = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    let amplitude = (max2 - min2) / 2, frequency = TWO_PI / period, phase = 0, time = v + offset;
    if (time % period !== 0) {
      phase = time * frequency % TWO_PI;
    }
    if (phase < 0) {
      phase += TWO_PI;
    }
    return 2 * (phase / TWO_PI) * amplitude + min2;
  }
  function sign2(v) {
    if (v > 0) {
      return 1;
    } else if (v === 0) {
      return 0;
    } else {
      return -1;
    }
  }
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  function subtract(...args) {
    const argLength = args.length;
    if (argLength === 2) {
      return args[0] - args[1];
    } else if (argLength === 1) {
      return -args[0];
    } else if (argLength === 0) {
      throw new Error("Wrong number of arguments");
    }
    return args.reduce((total2, n) => total2 - n);
  }
  var tan = Math.tan;
  function total(...args) {
    args = _checkIfFirstArgIsArray(args);
    return args.reduce((a, b) => a + b, 0);
  }
  function xor(bool1, bool2) {
    const argLength = arguments.length;
    if (argLength === 2) {
      return !!(bool1 ^ bool2);
    } else {
      throw new Error("Wrong number of arguments");
    }
  }

  // src/libraries/vg/util/js.js
  function defineAlias(cls, origProperty, newProperty) {
    Object.defineProperty(cls.prototype, newProperty, {
      get: function() {
        return this[origProperty];
      },
      set: function(v) {
        this[origProperty] = v;
      }
    });
  }
  function defineGetter(cls, property, getterFn) {
    Object.defineProperty(cls.prototype, property, {
      get: getterFn
    });
  }

  // src/libraries/vg/objects/color.js
  var HSB = "HSB";
  var HSL = "HSL";
  var HEX = "HEX";
  var Color = class {
    constructor(v1, v2, v3, v4, v5) {
      let _r, _g, _b, _a, rgb, options;
      if (v1 === void 0) {
        _r = _g = _b = 0;
        _a = 1;
      } else if (Array.isArray(v1)) {
        options = v2 || {};
        _r = v1[0] !== void 0 ? v1[0] : 0;
        _g = v1[1] !== void 0 ? v1[1] : 0;
        _b = v1[2] !== void 0 ? v1[2] : 0;
        _a = v1[3] !== void 0 ? v1[3] : options.range || 1;
      } else if (v1.r !== void 0) {
        options = v2 || {};
        _r = v1.r;
        _g = v1.g;
        _b = v1.b;
        _a = v1.a !== void 0 ? v1.a : options.range || 1;
      } else if (typeof v1 === "string") {
        rgb = hex2rgb(v1);
        _r = rgb[0];
        _g = rgb[1];
        _b = rgb[2];
        _a = 1;
      } else if (typeof v1 === "number") {
        if (arguments.length === 1) {
          _r = _g = _b = v1;
          _a = 1;
        } else if (arguments.length === 2) {
          _r = _g = _b = v1;
          if (typeof v2 === "number") {
            _a = v2;
          } else {
            options = v2;
            _a = options.range || 1;
          }
        } else if (arguments.length === 3) {
          if (typeof v3 === "number") {
            _r = v1;
            _g = v2;
            _b = v3;
            _a = 1;
          } else {
            _r = _g = _b = v1;
            _a = v2;
            options = v3;
          }
        } else if (arguments.length === 4) {
          _r = v1;
          _g = v2;
          _b = v3;
          if (typeof v4 === "number") {
            _a = v4;
          } else {
            options = v4;
            _a = options.range || 1;
          }
        } else {
          _r = v1;
          _g = v2;
          _b = v3;
          _a = v4;
          options = v5;
        }
      }
      options = options || {};
      if (options.range !== void 0) {
        _r /= options.range;
        _g /= options.range;
        _b /= options.range;
        _a /= options.range;
        if (options.mode === HSB) {
          v1 /= options.range;
          v2 /= options.range;
          v3 /= options.range;
        }
      }
      if (options.mode === HSB) {
        v1 = clamp2(v1, 0, 1);
        v2 = clamp2(v2, 0, 1);
        v3 = clamp2(v3, 0, 1);
        rgb = hsb2rgb(v1, v2, v3);
        _r = rgb[0];
        _g = rgb[1];
        _b = rgb[2];
      } else if (options.mode === HSL) {
        v1 = clamp2(v1, 0, 1);
        v2 = clamp2(v2, 0, 1);
        v3 = clamp2(v3, 0, 1);
        rgb = hsl2rgb(v1, v2, v3);
        _r = rgb[0];
        _g = rgb[1];
        _b = rgb[2];
      } else if (options.mode === HEX) {
        rgb = hex2rgb(v1);
        _r = rgb[0];
        _g = rgb[1];
        _b = rgb[2];
        _a = 1;
      }
      this.r = clamp2(_r, 0, 1);
      this.g = clamp2(_g, 0, 1);
      this.b = clamp2(_b, 0, 1);
      this.a = clamp2(_a, 0, 1);
    }
    static clone(c) {
      if (c === null || c === void 0) {
        return null;
      } else if (typeof c === "string") {
        return c;
      } else {
        return new Color(c.r, c.g, c.b, c.a);
      }
    }
    static toCSS(c) {
      if (c === null) {
        return "none";
      } else if (c === void 0) {
        return "black";
      } else if (typeof c === "string") {
        return c;
      } else if (c instanceof Color) {
        const r255 = Math.round(c.r * 255), g255 = Math.round(c.g * 255), b255 = Math.round(c.b * 255);
        return "rgba(" + r255 + ", " + g255 + ", " + b255 + ", " + c.a + ")";
      } else if (c.r !== void 0 && c.g !== void 0 && c.b !== void 0) {
        const r255 = Math.round(c.r * 255), g255 = Math.round(c.g * 255), b255 = Math.round(c.b * 255);
        if (c.a === void 0) {
          return "rgb(" + r255 + ", " + g255 + ", " + b255 + ")";
        } else {
          return "rgba(" + r255 + ", " + g255 + ", " + b255 + ", " + c.a + ")";
        }
      } else {
        throw new Error("Don't know how to convert " + c + " to CSS.");
      }
    }
    static toHex(c, ignoreAlpha) {
      return Color.parse(c, ignoreAlpha).toHex();
    }
    static make(...args) {
      return new Color(...args);
    }
    static parse(s) {
      function startsWith2(s2, value) {
        if (!s2 || !value) {
          return false;
        }
        s2 = String(s2);
        return s2.indexOf(value) === 0;
      }
      let m;
      if (s === void 0 || s === null) {
        return new Color(0, 0, 0, 0);
      } else if (s instanceof Color) {
        return s;
      } else if (namedColors[s]) {
        return Color.make.apply(null, namedColors[s]);
      } else if (s[0] === "#") {
        return new Color(s, 0, 0, 0, { mode: HEX });
      } else if (startsWith2(s, "rgba")) {
        m = s.match(
          /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+|\d+.\d+)\s*\)$/i
        );
        if (m) {
          return new Color(
            parseInt(m[1]) / 255,
            parseInt(m[2]) / 255,
            parseInt(m[3]) / 255,
            parseFloat(m[4])
          );
        } else {
          m = s.match(
            /^rgba\s*\(\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)\s*\)$/i
          );
          if (m) {
            return new Color(
              parseFloat(m[1]) / 100,
              parseFloat(m[2]) / 100,
              parseFloat(m[3]) / 100,
              parseFloat(m[4])
            );
          }
        }
        return new Color(0, 0, 0, 0);
      } else if (startsWith2(s, "rgb")) {
        m = s.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (m) {
          return new Color(
            parseInt(m[1]) / 255,
            parseInt(m[2]) / 255,
            parseInt(m[3]) / 255
          );
        } else {
          m = s.match(
            /^rgb\s*\(\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*\)$/i
          );
          if (m) {
            return new Color(
              parseFloat(m[1]) / 100,
              parseFloat(m[2]) / 100,
              parseFloat(m[3]) / 100
            );
          }
        }
        return new Color(0, 0, 0, 0);
      } else if (startsWith2(s, "hsla")) {
        m = s.match(
          /^hsla\s*\(\s*(\d+|\d+.\d+)\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)\s*\)$/i
        );
        if (m) {
          return new Color(
            parseFloat(m[1]) / 360,
            parseFloat(m[2]) / 100,
            parseFloat(m[3]) / 100,
            parseFloat(m[4])
          );
        }
        return new Color(0, 0, 0, 0);
      } else if (startsWith2(s, "hsl")) {
        m = s.match(
          /^hsl\s*\(\s*(\d+|\d+.\d+)\s*,\s*(\d+|\d+.\d+)%\s*,\s*(\d+|\d+.\d+)%\s*\)$/i
        );
        if (m) {
          return new Color(
            parseFloat(m[1]) / 360,
            parseFloat(m[2]) / 100,
            parseFloat(m[3]) / 100
          );
        }
        return new Color(0, 0, 0, 0);
      } else if (s === "none" || s === "null" || startsWith2(s, "url(")) {
        return new Color(0, 0, 0, 0);
      } else {
        throw new Error("Color " + s + "can not be parsed");
      }
    }
    static gray(gray, alpha, range3) {
      range3 = Math.max(range3, 1);
      return new Color(gray / range3, gray / range3, gray / range3, alpha / range3);
    }
    static rgb(red, green, blue, alpha, range3) {
      range3 = Math.max(range3, 1);
      return new Color(red / range3, green / range3, blue / range3, alpha / range3);
    }
    static hsb(hue, saturation, brightness, alpha, range3) {
      range3 = Math.max(range3, 1);
      return new Color(
        hue / range3,
        saturation / range3,
        brightness / range3,
        alpha / range3,
        { mode: HSB }
      );
    }
    static hsl(hue, saturation, lightness, alpha, range3) {
      range3 = Math.max(range3, 1);
      return new Color(
        hue / range3,
        saturation / range3,
        lightness / range3,
        alpha / range3,
        { mode: HSL }
      );
    }
    desaturate(options) {
      if (this.r === this.g && this.g === this.b) {
        return this;
      }
      let rCoeff, gCoeff, bCoeff;
      if (options === void 0 || !options.method || options.method === "ITU-R BT.601") {
        rCoeff = 0.3;
        gCoeff = 0.59;
        bCoeff = 0.11;
      } else if (options.method === "ITU-R BT.709") {
        rCoeff = 0.2125;
        gCoeff = 0.7154;
        bCoeff = 0.0721;
      }
      const gray = this.r * rCoeff + this.g * gCoeff + this.b * bCoeff;
      return new Color(gray, gray, gray, this.a);
    }
    invert() {
      return new Color(1 - this.r, 1 - this.g, 1 - this.b, this.a);
    }
  };
  Color.BLACK = new Color(0);
  Color.WHITE = new Color(1);
  defineAlias(Color, "r", "red");
  defineAlias(Color, "g", "green");
  defineAlias(Color, "b", "blue");
  defineAlias(Color, "a", "alpha");
  defineGetter(Color, "h", function() {
    return rgb2hsl(this.r, this.g, this.b)[0];
  });
  defineGetter(Color, "s", function() {
    return rgb2hsl(this.r, this.g, this.b)[1];
  });
  defineGetter(Color, "l", function() {
    return rgb2hsl(this.r, this.g, this.b)[2];
  });
  defineAlias(Color, "h", "hue");
  defineAlias(Color, "s", "saturation");
  defineAlias(Color, "l", "lightness");
  defineGetter(Color, "rgb", function() {
    return [this.r, this.g, this.b];
  });
  defineGetter(Color, "rgba", function() {
    return [this.r, this.g, this.b, this.a];
  });
  defineGetter(Color, "hsb", function() {
    return rgb2hsb(this.r, this.g, this.b);
  });
  defineGetter(Color, "hsba", function() {
    return rgb2hsb(this.r, this.g, this.b).concat([this.a]);
  });
  defineGetter(Color, "hsl", function() {
    return rgb2hsl(this.r, this.g, this.b);
  });
  defineGetter(Color, "hsla", function() {
    return rgb2hsl(this.r, this.g, this.b).concat([this.a]);
  });
  Color.prototype.toCSS = function() {
    return Color.toCSS(this);
  };
  Color.prototype.toHex = function(ignoreAlpha) {
    if (ignoreAlpha || this.a >= 1) {
      return rgb2hex(this.r, this.g, this.b);
    } else {
      return rgba2hex(this.r, this.g, this.b, this.a);
    }
  };

  // src/libraries/util.js
  var util_exports = {};
  __export(util_exports, {
    flatten: () => flatten
  });
  function flatten(arg) {
    const arr = Array.prototype.slice.call(arg);
    const args = [];
    for (let i = 0; i < arr.length; i += 1) {
      const o = arr[i];
      if (Array.isArray(o)) {
        for (let j = 0; j < o.length; j += 1) {
          args.push(o[j]);
        }
      } else {
        args.push(o);
      }
    }
    return args;
  }

  // src/libraries/vg/objects/path.js
  var CLOSE_COMMAND = Object.freeze({ type: CLOSE });
  var KAPPA = 0.5522847498307936;
  function _roundCoord(n, fractionDigits = 3) {
    if (n % 1 === 0) {
      return n;
    }
    return n.toFixed(fractionDigits);
  }
  function _cloneCommand(cmd) {
    const newCmd = { type: cmd.type };
    if (newCmd.type !== CLOSE) {
      newCmd.x = cmd.x;
      newCmd.y = cmd.y;
    }
    if (newCmd.type === QUADTO) {
      newCmd.x1 = cmd.x1;
      newCmd.y1 = cmd.y1;
    } else if (newCmd.type === CURVETO) {
      newCmd.x1 = cmd.x1;
      newCmd.y1 = cmd.y1;
      newCmd.x2 = cmd.x2;
      newCmd.y2 = cmd.y2;
    }
    return newCmd;
  }
  var Path = class {
    constructor(commands, fill, stroke, strokeWidth) {
      this.commands = commands !== void 0 ? commands : [];
      this.fill = fill !== void 0 ? fill : "black";
      this.stroke = stroke !== void 0 ? stroke : null;
      this.strokeWidth = strokeWidth !== void 0 ? strokeWidth : 1;
    }
    static combine() {
      const shapes = flatten(arguments);
      let shape, commands = [];
      for (let i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        if (shape.commands) {
          commands = commands.concat(shape.commands);
        } else if (shape.shapes) {
          commands = commands.concat(Path.combine(shape.shapes).commands);
        }
      }
      return new Path(commands);
    }
    clone() {
      let p = new Path(), n = this.commands.length, i;
      p.commands.length = this.commands.length;
      for (i = 0; i < n; i += 1) {
        p.commands[i] = _cloneCommand(this.commands[i]);
      }
      p.fill = Color.clone(this.fill);
      p.stroke = Color.clone(this.stroke);
      p.strokeWidth = this.strokeWidth;
      return p;
    }
    extend(commandsOrPath) {
      const commands = commandsOrPath.commands || commandsOrPath;
      Array.prototype.push.apply(this.commands, commands);
    }
    moveTo(x, y) {
      this.commands.push({ type: MOVETO, x, y });
    }
    lineTo(x, y) {
      this.commands.push({ type: LINETO, x, y });
    }
    curveTo(x1, y1, x2, y2, x, y) {
      this.commands.push({
        type: CURVETO,
        x1,
        y1,
        x2,
        y2,
        x,
        y
      });
    }
    quadTo(x1, y1, x, y) {
      const prevX = this.commands[this.commands.length - 1].x, prevY = this.commands[this.commands.length - 1].y, cp1x = prevX + 2 / 3 * (x1 - prevX), cp1y = prevY + 2 / 3 * (y1 - prevY), cp2x = cp1x + 1 / 3 * (x - prevX), cp2y = cp1y + 1 / 3 * (y - prevY);
      this.curveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    close() {
      this.commands.push(CLOSE_COMMAND);
    }
    isClosed() {
      if (this.commands.length === 0) {
        return false;
      }
      return this.commands[this.commands.length - 1].type === CLOSE;
    }
    addRect(x, y, width, height) {
      this.moveTo(x, y);
      this.lineTo(x + width, y);
      this.lineTo(x + width, y + height);
      this.lineTo(x, y + height);
      this.close();
    }
    addRoundedRect(cx, cy, width, height, rx, ry) {
      let ONE_MINUS_QUARTER = 1 - 0.552, dx = rx, dy = ry, left = cx, right = cx + width, top = cy, bottom = cy + height;
      dx = Math.min(dx, width * 0.5);
      dy = Math.min(dy, height * 0.5);
      this.moveTo(left + dx, top);
      if (dx < width * 0.5) {
        this.lineTo(right - rx, top);
      }
      this.curveTo(
        right - dx * ONE_MINUS_QUARTER,
        top,
        right,
        top + dy * ONE_MINUS_QUARTER,
        right,
        top + dy
      );
      if (dy < height * 0.5) {
        this.lineTo(right, bottom - dy);
      }
      this.curveTo(
        right,
        bottom - dy * ONE_MINUS_QUARTER,
        right - dx * ONE_MINUS_QUARTER,
        bottom,
        right - dx,
        bottom
      );
      if (dx < width * 0.5) {
        this.lineTo(left + dx, bottom);
      }
      this.curveTo(
        left + dx * ONE_MINUS_QUARTER,
        bottom,
        left,
        bottom - dy * ONE_MINUS_QUARTER,
        left,
        bottom - dy
      );
      if (dy < height * 0.5) {
        this.lineTo(left, top + dy);
      }
      this.curveTo(
        left,
        top + dy * ONE_MINUS_QUARTER,
        left + dx * ONE_MINUS_QUARTER,
        top,
        left + dx,
        top
      );
      this.close();
    }
    addEllipse(x, y, width, height) {
      const dx = KAPPA * 0.5 * width;
      const dy = KAPPA * 0.5 * height;
      const x0 = x + 0.5 * width;
      const y0 = y + 0.5 * height;
      const x1 = x + width;
      const y1 = y + height;
      this.moveTo(x, y0);
      this.curveTo(x, y0 - dy, x0 - dx, y, x0, y);
      this.curveTo(x0 + dx, y, x1, y0 - dy, x1, y0);
      this.curveTo(x1, y0 + dy, x0 + dx, y1, x0, y1);
      this.curveTo(x0 - dx, y1, x, y0 + dy, x, y0);
      this.close();
    }
    addLine(x1, y1, x2, y2) {
      this.moveTo(x1, y1);
      this.lineTo(x2, y2);
    }
    addQuad(x1, y1, x2, y2, x3, y3, x4, y4) {
      this.moveTo(x1, y1);
      this.lineTo(x2, y2);
      this.lineTo(x3, y3);
      this.lineTo(x4, y4);
      this.close();
    }
    addArc(x, y, width, height, startAngle, degrees3, arcType) {
      arcType = arcType || "pie";
      let w, h, angStRad, ext, arcSegs, increment, cv, lineSegs, index2, angle3, relX, relY, coords;
      w = width / 2;
      h = height / 2;
      angStRad = radians(startAngle);
      ext = degrees3;
      if (ext >= 360 || ext <= -360) {
        arcSegs = 4;
        increment = Math.PI / 2;
        cv = 0.5522847498307933;
        if (ext < 0) {
          increment = -increment;
          cv = -cv;
        }
      } else {
        arcSegs = Math.ceil(Math.abs(ext) / 90);
        increment = radians(ext / arcSegs);
        cv = 4 / 3 * Math.sin(increment / 2) / (1 + Math.cos(increment / 2));
        if (cv === 0) {
          arcSegs = 0;
        }
      }
      if (arcType === "open") {
        lineSegs = 0;
      } else if (arcType === "chord") {
        lineSegs = 1;
      } else if (arcType === "pie") {
        lineSegs = 2;
      }
      if (w < 0 || h < 0) {
        arcSegs = lineSegs = -1;
      }
      index2 = 0;
      while (index2 <= arcSegs + lineSegs) {
        angle3 = angStRad;
        if (index2 === 0) {
          this.moveTo(x + Math.cos(angle3) * w, y + Math.sin(angle3) * h);
        } else if (index2 > arcSegs) {
          if (index2 === arcSegs + lineSegs) {
            this.close();
          } else {
            this.lineTo(x, y);
          }
        } else {
          angle3 += increment * (index2 - 1);
          relX = Math.cos(angle3);
          relY = Math.sin(angle3);
          coords = [];
          coords.push(x + (relX - cv * relY) * w);
          coords.push(y + (relY + cv * relX) * h);
          angle3 += increment;
          relX = Math.cos(angle3);
          relY = Math.sin(angle3);
          coords.push(x + (relX + cv * relY) * w);
          coords.push(y + (relY - cv * relX) * h);
          coords.push(x + relX * w);
          coords.push(y + relY * h);
          Path.prototype.curveTo.apply(this, coords);
        }
        index2 += 1;
      }
    }
    colorize(options) {
      const args = arguments;
      if (typeof options !== "object" || options instanceof Color) {
        options = {};
        if (args[0] !== void 0) {
          options.fill = args[0];
        }
        if (args[1] !== void 0) {
          options.stroke = args[1];
        }
        if (args[2] !== void 0) {
          options.strokeWidth = args[2];
        }
      }
      const p = this.clone();
      if (options.fill) {
        p.fill = Color.clone(options.fill);
      }
      if (options.stroke) {
        p.stroke = Color.clone(options.stroke);
      }
      if (options.strokeWidth || options.strokeWidth === 0) {
        p.strokeWidth = options.strokeWidth;
      }
      return p;
    }
    desaturate(options) {
      const p = this.clone();
      let fill = p.fill;
      let stroke = p.stroke;
      if (!(fill instanceof Color)) {
        fill = Color.parse(fill);
      }
      if (!(stroke instanceof Color)) {
        stroke = Color.parse(stroke);
      }
      p.fill = fill.desaturate(options);
      p.stroke = stroke.desaturate(options);
      return p;
    }
    invert() {
      const p = this.clone();
      let fill = p.fill;
      let stroke = p.stroke;
      if (!(fill instanceof Color)) {
        fill = Color.parse(fill);
      }
      if (!(stroke instanceof Color)) {
        stroke = Color.parse(stroke);
      }
      p.fill = fill.invert();
      p.stroke = stroke.invert();
      return p;
    }
    contours() {
      let contours = [], currentContour = [];
      let cmd;
      for (let i = 0; i < this.commands.length; i += 1) {
        cmd = this.commands[i];
        if (cmd.type === MOVETO) {
          if (currentContour.length !== 0) {
            contours.push(currentContour);
          }
          currentContour = [cmd];
        } else {
          currentContour.push(cmd);
        }
      }
      if (currentContour.length !== 0) {
        contours.push(currentContour);
      }
      return contours;
    }
    bounds() {
      if (this._bounds) {
        return this._bounds;
      }
      if (this.commands.length === 0) {
        return new Rect(0, 0, 0, 0);
      }
      let px, py, prev, right, bottom, minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = -Number.MAX_VALUE, maxY = -Number.MAX_VALUE;
      let cmd;
      for (let i = 0; i < this.commands.length; i += 1) {
        cmd = this.commands[i];
        if (cmd.type === MOVETO || cmd.type === LINETO) {
          px = cmd.x;
          py = cmd.y;
          if (px < minX) {
            minX = px;
          }
          if (py < minY) {
            minY = py;
          }
          if (px > maxX) {
            maxX = px;
          }
          if (py > maxY) {
            maxY = py;
          }
          prev = cmd;
        } else if (cmd.type === CURVETO) {
          const r = extrema(
            prev.x,
            prev.y,
            cmd.x1,
            cmd.y1,
            cmd.x2,
            cmd.y2,
            cmd.x,
            cmd.y
          );
          right = r.x + r.width;
          bottom = r.y + r.height;
          if (r.x < minX) {
            minX = r.x;
          }
          if (right > maxX) {
            maxX = right;
          }
          if (r.y < minY) {
            minY = r.y;
          }
          if (bottom > maxY) {
            maxY = bottom;
          }
          prev = cmd;
        }
      }
      return new Rect(minX, minY, maxX - minX, maxY - minY);
    }
    // Returns the DynamicPathElement at time t (0.0-1.0) on the path.
    point(t, segmentLengths2) {
      if (segmentLengths2 === void 0) {
        segmentLengths2 = segmentLengths(this.commands, true, 10);
      }
      return point(this, t, segmentLengths2);
    }
    // Returns an array of DynamicPathElements along the path.
    // To omit the last point on closed paths: {end: 1-1.0/amount}
    points(amount, options) {
      const start = options && options.start !== void 0 ? options.start : 0;
      const end = options && options.end !== void 0 ? options.end : 1;
      if (this.commands.length === 0) {
        return [];
      }
      amount = Math.round(amount);
      let d;
      if (options && options.closed) {
        d = amount > 1 ? (end - start) / amount : end - start;
      } else {
        d = amount > 1 ? (end - start) / (amount - 1) : end - start;
      }
      const pts = [];
      const segmentLengths2 = segmentLengths(this.commands, true, 10);
      for (let i = 0; i < amount; i += 1) {
        pts.push(this.point(start + d * i, segmentLengths2));
      }
      return pts;
    }
    // Returns an approximation of the total length of the path.
    length(precision) {
      if (precision === void 0) {
        precision = 20;
      }
      return length(this, precision);
    }
    // Returns true when point (x,y) falls within the contours of the path.
    contains(x, y, precision) {
      const points = this.points(precision !== void 0 ? precision : 100);
      return pointInPolygon(points, x, y);
    }
    resampleByAmount(points, perContour) {
      const subPaths = perContour ? this.contours() : [this.commands];
      const p = new Path([], this.fill, this.stroke, this.strokeWidth);
      for (let j = 0; j < subPaths.length; j += 1) {
        const subPath = new Path(subPaths[j]);
        const options = {};
        if (subPath.isClosed()) {
          options.closed = true;
        }
        const pts = subPath.points(points, options);
        for (let i = 0; i < pts.length; i += 1) {
          if (i === 0) {
            p.moveTo(pts[i].x, pts[i].y);
          } else {
            p.lineTo(pts[i].x, pts[i].y);
          }
        }
        if (subPath.isClosed()) {
          p.close();
        }
      }
      return p;
    }
    resampleByLength(segmentLength, options) {
      options = options || {};
      const force = options.force || false;
      const subPaths = this.contours();
      let commands = [];
      if (!force) {
        segmentLength = Math.max(segmentLength, 1);
      }
      for (let i = 0; i < subPaths.length; i += 1) {
        const subPath = new Path(subPaths[i]);
        const contourLength = subPath.length();
        const amount = Math.ceil(contourLength / segmentLength);
        commands = commands.concat(subPath.resampleByAmount(amount).commands);
      }
      return new Path(commands, this.fill, this.stroke, this.strokeWidth);
    }
    toPathData(fractionDigits = 3) {
      let i, d, cmd, x, y, x1, y1, x2, y2;
      d = "";
      for (i = 0; i < this.commands.length; i += 1) {
        cmd = this.commands[i];
        if (cmd.x !== void 0) {
          x = _roundCoord(clamp(cmd.x, -9999, 9999), fractionDigits);
          y = _roundCoord(clamp(cmd.y, -9999, 9999), fractionDigits);
        }
        if (cmd.x1 !== void 0) {
          x1 = _roundCoord(clamp(cmd.x1, -9999, 9999), fractionDigits);
          y1 = _roundCoord(clamp(cmd.y1, -9999, 9999), fractionDigits);
        }
        if (cmd.x2 !== void 0) {
          x2 = _roundCoord(clamp(cmd.x2, -9999, 9999), fractionDigits);
          y2 = _roundCoord(clamp(cmd.y2, -9999, 9999), fractionDigits);
        }
        if (cmd.type === MOVETO) {
          if (!isNaN(x) && !isNaN(y)) {
            d += "M" + x + " " + y;
          }
        } else if (cmd.type === LINETO) {
          if (!isNaN(x) && !isNaN(y)) {
            d += "L" + x + " " + y;
          }
        } else if (cmd.type === QUADTO) {
          if (!isNaN(x) && !isNaN(y) && !isNaN(x1) && !isNaN(y1)) {
            d += "Q" + x1 + " " + y1 + " " + x + " " + y;
          }
        } else if (cmd.type === CURVETO) {
          if (!isNaN(x) && !isNaN(y) && !isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
            d += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x + " " + y;
          }
        } else if (cmd.type === CLOSE) {
          d += "Z";
        }
      }
      return d;
    }
    // Output the path as an SVG string.
    toSVG() {
      let svg = '<path d="';
      svg += this.toPathData();
      svg += '"';
      let style = "";
      let fill;
      let fillOpacity;
      if (this.fill) {
        fill = Color.parse(this.fill);
        if (fill.a < 1) {
          fillOpacity = fill.a;
        }
        fill = Color.toHex(fill).substring(0, 7);
      }
      if (fill !== "black" && fill !== "#000000") {
        if (fill === null || fill === void 0) {
          style += "fill:none;";
        } else {
          style += "fill:" + fill + ";";
        }
      }
      if (fillOpacity !== void 0) {
        style += "fill-opacity:" + fillOpacity + ";";
      }
      let stroke;
      let strokeOpacity;
      if (this.stroke) {
        stroke = Color.parse(this.stroke);
        if (stroke.a < 1) {
          strokeOpacity = stroke.a;
        }
        stroke = Color.toHex(stroke).substring(0, 7);
      }
      if (stroke) {
        style += "stroke:" + stroke + ";";
        style += "stroke-width:" + this.strokeWidth + ";";
      }
      if (strokeOpacity !== void 0) {
        style += "stroke-opacity:" + strokeOpacity + ";";
      }
      if (style) {
        svg += ' style="' + style + '"';
      }
      svg += "/>";
      return svg;
    }
    // Draw the path to a 2D context.
    draw(ctx) {
      let nCommands, i, cmd;
      ctx.beginPath();
      nCommands = this.commands.length;
      for (i = 0; i < nCommands; i += 1) {
        cmd = this.commands[i];
        if (cmd.type === MOVETO) {
          ctx.moveTo(cmd.x, cmd.y);
        } else if (cmd.type === LINETO) {
          ctx.lineTo(cmd.x, cmd.y);
        } else if (cmd.type === QUADTO) {
          ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
        } else if (cmd.type === CURVETO) {
          ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        } else if (cmd.type === CLOSE) {
          ctx.closePath();
        }
      }
      if (this.fill !== null && this.fill !== void 0) {
        ctx.fillStyle = Color.toCSS(this.fill);
        ctx.fill();
      }
      if (this.stroke !== null && this.stroke !== void 0 && this.strokeWidth !== null && this.strokeWidth > 0) {
        ctx.strokeStyle = Color.toCSS(this.stroke);
        ctx.lineWidth = this.strokeWidth;
        ctx.stroke();
      }
    }
  };
  Path.prototype.closePath = Path.prototype.close;

  // src/libraries/vg/objects/group.js
  var Group = class {
    constructor(shapes) {
      if (!shapes) {
        this.shapes = [];
      } else if (shapes.shapes || shapes.commands) {
        this.shapes = [shapes];
      } else if (shapes) {
        this.shapes = shapes;
      }
    }
    add(shape) {
      this.shapes.push(shape);
    }
    clone() {
      let newShapes = [], n = this.shapes.length, i;
      newShapes.length = n;
      for (i = 0; i < n; i += 1) {
        newShapes[i] = this.shapes[i].clone();
      }
      return new Group(newShapes);
    }
    colorize(options) {
      const args = arguments;
      if (typeof options !== "object" || options instanceof Color) {
        options = {};
        if (args[0] !== void 0) {
          options.fill = args[0];
        }
        if (args[1] !== void 0) {
          options.stroke = args[1];
        }
        if (args[2] !== void 0) {
          options.strokeWidth = args[2];
        }
      }
      const shapes = [];
      shapes.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        shapes[i] = this.shapes[i].colorize(options);
      }
      return new Group(shapes);
    }
    desaturate(options) {
      const shapes = [];
      shapes.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        shapes[i] = this.shapes[i].desaturate(options);
      }
      return new Group(shapes);
    }
    invert() {
      const shapes = [];
      shapes.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        shapes[i] = this.shapes[i].invert();
      }
      return new Group(shapes);
    }
    bounds() {
      if (this.shapes.length === 0) {
        return new Rect(0, 0, 0, 0);
      }
      let i, r, shape, shapes = this.shapes;
      for (i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        if (r === void 0) {
          r = shape.bounds();
        }
        if (shape.shapes && shape.shapes.length !== 0 || shape.commands && shape.commands.length !== 0) {
          r = r.unite(shape.bounds());
        }
      }
      return r !== void 0 ? r : new Rect(0, 0, 0, 0);
    }
    // Returns true when point (x,y) falls within the contours of the group.
    contains(x, y, precision) {
      if (precision === void 0) {
        precision = 100;
      }
      let i, shapes = this.shapes;
      for (i = 0; i < shapes.length; i += 1) {
        if (shapes[i].contains(x, y, precision)) {
          return true;
        }
      }
      return false;
    }
    length(precision) {
      if (precision === void 0) {
        precision = 10;
      }
      let sum2 = 0;
      const shapes = this.shapes;
      for (let i = 0; i < shapes.length; i += 1) {
        sum2 += shapes[i].length(precision);
      }
      return sum2;
    }
    resampleByAmount(points, perContour) {
      let path;
      if (!perContour) {
        path = new Path.combine(this);
        return path.resampleByAmount(points, perContour);
      }
      const shapes = [];
      shapes.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        shapes[i] = this.shapes[i].resampleByAmount(points, perContour);
      }
      return new Group(shapes);
    }
    resampleByLength(length2) {
      const shapes = [];
      shapes.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        shapes[i] = this.shapes[i].resampleByLength(length2);
      }
      return new Group(shapes);
    }
    toSVG() {
      const l = [];
      l.length = this.shapes.length;
      for (let i = 0; i < this.shapes.length; i += 1) {
        l[i] = this.shapes[i].toSVG();
      }
      return "<g>" + l.join("") + "</g>";
    }
    // Draw the group to a 2D context.
    draw(ctx) {
      let i, shapes = this.shapes, nShapes = shapes.length;
      for (i = 0; i < nShapes; i += 1) {
        shapes[i].draw(ctx);
      }
    }
  };

  // src/libraries/vg/objects/transform.js
  var Transform = class {
    constructor(m) {
      if (m !== void 0) {
        this.m = m;
      } else {
        this.m = [1, 0, 0, 1, 0, 0];
      }
    }
    static identity() {
      return new Transform();
    }
    // Returns the 3x3 matrix multiplication of A and B.
    // Note that scale(), translate(), rotate() work with premultiplication,
    // e.g. the matrix A followed by B = BA and not AB.
    static _mmult(a, b) {
      if (a.m !== void 0) {
        a = a.m;
      }
      if (b.m !== void 0) {
        b = b.m;
      }
      return new Transform([
        a[0] * b[0] + a[1] * b[2],
        a[0] * b[1] + a[1] * b[3],
        a[2] * b[0] + a[3] * b[2],
        a[2] * b[1] + a[3] * b[3],
        a[4] * b[0] + a[5] * b[2] + b[4],
        a[4] * b[1] + a[5] * b[3] + b[5]
      ]);
    }
    isIdentity() {
      const m = this.m;
      return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
    }
    prepend(matrix) {
      return Transform._mmult(this.m, matrix.m);
    }
    append(matrix) {
      return Transform._mmult(matrix.m, this.m);
    }
    inverse() {
      const m = this.m, d = m[0] * m[3] - m[1] * m[2];
      return new Transform([
        m[3] / d,
        -m[1] / d,
        -m[2] / d,
        m[0] / d,
        (m[2] * m[5] - m[3] * m[4]) / d,
        -(m[0] * m[5] - m[1] * m[4]) / d
      ]);
    }
    scale(x, y) {
      if (y === void 0) {
        y = x;
      }
      return Transform._mmult([x, 0, 0, y, 0, 0], this.m);
    }
    translate(x, y) {
      return Transform._mmult([1, 0, 0, 1, x, y], this.m);
    }
    rotate(angle3) {
      const c = Math.cos(radians(angle3)), s = Math.sin(radians(angle3));
      return Transform._mmult([c, s, -s, c, 0, 0], this.m);
    }
    skew(x, y) {
      const kx = Math.PI * x / 180, ky = Math.PI * y / 180;
      return Transform._mmult([1, Math.tan(ky), -Math.tan(kx), 1, 0, 0], this.m);
    }
    // Returns the new coordinates of the given point (x,y) after transformation.
    transformPoint(point2) {
      const x = point2.x, y = point2.y, m = this.m;
      return new Point(x * m[0] + y * m[2] + m[4], x * m[1] + y * m[3] + m[5]);
    }
    transformPoints(points) {
      const transformedPoints = [];
      for (let i = 0; i < points.length; i += 1) {
        transformedPoints.push(this.transformPoint(points[i]));
      }
      return transformedPoints;
    }
    transformPath(path) {
      const m = this.m;
      const commands = [];
      commands.length = path.commands.length;
      for (let i = 0, l = path.commands.length; i < l; i++) {
        const cmd = path.commands[i];
        switch (cmd.type) {
          case MOVETO:
          case LINETO:
            commands[i] = {
              type: cmd.type,
              x: cmd.x * m[0] + cmd.y * m[2] + m[4],
              y: cmd.x * m[1] + cmd.y * m[3] + m[5]
            };
            break;
          case QUADTO:
            commands[i] = {
              type: QUADTO,
              x: cmd.x * m[0] + cmd.y * m[2] + m[4],
              y: cmd.x * m[1] + cmd.y * m[3] + m[5],
              x1: cmd.x1 * m[0] + cmd.y1 * m[2] + m[4],
              y1: cmd.x1 * m[1] + cmd.y1 * m[3] + m[5]
            };
            break;
          case CURVETO:
            commands[i] = {
              type: CURVETO,
              x: cmd.x * m[0] + cmd.y * m[2] + m[4],
              y: cmd.x * m[1] + cmd.y * m[3] + m[5],
              x1: cmd.x1 * m[0] + cmd.y1 * m[2] + m[4],
              y1: cmd.x1 * m[1] + cmd.y1 * m[3] + m[5],
              x2: cmd.x2 * m[0] + cmd.y2 * m[2] + m[4],
              y2: cmd.x2 * m[1] + cmd.y2 * m[3] + m[5]
            };
            break;
          case CLOSE:
            commands[i] = { type: CLOSE };
            break;
          default:
            throw new Error("Unknown command type " + cmd);
        }
      }
      return new Path(commands, path.fill, path.stroke, path.strokeWidth);
    }
    transformText(text2) {
      const t = text2.clone();
      t.transform = this.append(t.transform);
      return t;
    }
    transformGroup(group2) {
      const transformedShapes = [];
      for (let i = 0; i < group2.shapes.length; i += 1) {
        transformedShapes.push(this.transformShape(group2.shapes[i]));
      }
      return new Group(transformedShapes);
    }
    transformShape(shape) {
      let fn;
      if (shape.shapes) {
        fn = this.transformGroup;
      } else if (shape.commands) {
        fn = this.transformPath;
      } else if (shape.text) {
        fn = this.transformText;
      } else if (shape.x !== void 0 && shape.y !== void 0) {
        fn = this.transformPoint;
      } else if (shape._transform !== void 0) {
        return shape._transform(this.m);
      } else if (Array.isArray(shape) && shape.length > 0) {
        if (shape[0].x !== void 0 && shape[0].y !== void 0) {
          fn = this.transformPoints;
        } else {
          const l = [];
          for (let i = 0; i < shape.length; i += 1) {
            l.push(this.transformShape(shape[i]));
          }
          return l;
        }
      } else {
        throw new Error("Don't know how to transform " + shape);
      }
      return fn.call(this, shape);
    }
  };
  Transform.IDENTITY = new Transform();

  // src/libraries/vg/util/svg.js
  function trim(s) {
    return s.replace(/^\s+|\s+$/g, "");
  }
  function compressSpaces(s) {
    return s.replace(/[\s\r\t\n]+/gm, " ");
  }
  function toNumberArray(s) {
    let i, a = trim(compressSpaces((s || "").replace(/,/g, " "))).split(" ");
    for (i = 0; i < a.length; i += 1) {
      a[i] = parseFloat(a[i]);
    }
    return a;
  }
  function readSvgAttributes(node, parentAttributes) {
    let fill, fillOpacity, stroke, strokeOpacity, strokeWidth, opacity, color, transforms, types, transform4, i, attributes;
    if (parentAttributes) {
      attributes = Object.create(parentAttributes);
    } else {
      attributes = {};
    }
    transforms = [];
    types = {};
    types.translate = function(s2) {
      const a = toNumberArray(s2), tx = a[0], ty = a[1] || 0;
      return new Transform().translate(tx, ty);
    };
    types.scale = function(s2) {
      const a = toNumberArray(s2), sx = a[0], sy = a[1] || sx;
      return new Transform().scale(sx, sy);
    };
    types.rotate = function(s2) {
      let t, a = toNumberArray(s2), r = a[0], tx = a[1] || 0, ty = a[2] || 0;
      t = new Transform();
      t = t.translate(tx, ty);
      t = t.rotate(r);
      t = t.translate(-tx, -ty);
      return t;
    };
    types.matrix = function(s2) {
      const m = toNumberArray(s2);
      return new Transform([m[0], m[1], 0, m[2], m[3], 0, m[4], m[5], 1]);
    };
    let v, data, type, s, d, elems, el;
    for (let j = 0; j < node.attributes.length; j += 1) {
      v = node.attributes[j];
      switch (v.nodeName) {
        case "transform":
          data = trim(compressSpaces(v.nodeValue)).replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
          for (i = 0; i < data.length; i += 1) {
            type = trim(data[i].split("(")[0]);
            s = data[i].split("(")[1].replace(")", "");
            transform4 = types[type](s);
            transforms.push(transform4);
          }
          break;
        case "visibility":
          break;
        case "stroke-linecap":
          break;
        case "stroke-linejoin":
          break;
        case "stroke-miterlimit":
          break;
        case "stroke-width":
          strokeWidth = parseFloat(v.nodeValue);
          break;
        case "stroke-opacity":
          strokeOpacity = parseFloat(v.nodeValue);
          break;
        case "fill-opacity":
          fillOpacity = parseFloat(v.nodeValue);
          break;
        case "fill":
          fill = v.nodeValue;
          break;
        case "stroke":
          stroke = v.nodeValue;
          break;
        case "opacity":
          opacity = parseFloat(v.nodeValue);
          break;
        case "color":
          color = v.nodeValue;
          break;
        case "style":
          d = {};
          elems = v.nodeValue.split(";");
          for (i = 0; i < elems.length; i += 1) {
            el = elems[i].split(":");
            d[el[0].trim()] = el[1];
          }
          if (d.fill) {
            fill = d.fill;
          }
          if (d.stroke) {
            stroke = d.stroke;
          }
          if (d["stroke-width"] !== void 0) {
            strokeWidth = parseFloat(d["stroke-width"]);
          }
          if (d["stroke-opacity"] !== void 0) {
            strokeOpacity = parseFloat(d["stroke-opacity"]);
          }
          if (d["fill-opacity"] !== void 0) {
            fillOpacity = parseFloat(d["fill-opacity"]);
          }
          if (d.opacity !== void 0) {
            opacity = parseFloat(d.opacity);
          }
          if (d.color) {
            color = d.color;
          }
          break;
      }
    }
    if (fill !== void 0) {
      attributes.fill = fill;
    }
    if (stroke !== void 0) {
      attributes.stroke = stroke;
    }
    if (fillOpacity !== void 0) {
      attributes.fillOpacity = fillOpacity;
    }
    if (strokeOpacity !== void 0) {
      attributes.strokeOpacity = strokeOpacity;
    }
    if (strokeWidth !== void 0) {
      attributes.strokeWidth = strokeWidth;
    }
    if (opacity !== void 0) {
      attributes.opacity = opacity;
    }
    if (color !== void 0 && color !== "currentColor") {
      attributes.color = color;
    }
    if (transforms.length > 0) {
      transform4 = new Transform();
      for (i = 0; i < transforms.length; i += 1) {
        transform4 = transform4.append(transforms[i]);
      }
      if (!transform4.isIdentity()) {
        if (attributes.transform) {
          attributes.transform = attributes.transform.append(transform4);
        } else {
          attributes.transform = transform4;
        }
      }
    }
    return attributes;
  }
  function applySvgAttributes(shape, attributes) {
    let fill = attributes.fill;
    if (shape.commands && shape.commands.length > 0 && fill === void 0) {
      fill = "black";
    }
    const fillOpacity = attributes.fillOpacity;
    let stroke = attributes.stroke;
    const strokeOpacity = attributes.strokeOpacity;
    const opacity = attributes.opacity;
    const strokeWidth = attributes.strokeWidth;
    const transform4 = attributes.transform;
    const color = attributes.color;
    if (fill === "currentColor") {
      fill = color === void 0 ? "black" : color;
    }
    if (fill !== void 0) {
      fill = Color.parse(fill);
      if (fillOpacity !== void 0) {
        fill.a *= fillOpacity;
      }
      if (opacity !== void 0) {
        fill.a *= opacity;
      }
    }
    if (stroke === "currentColor") {
      stroke = color === void 0 ? "black" : color;
    }
    if (stroke !== void 0) {
      stroke = Color.parse(stroke);
      if (strokeOpacity !== void 0) {
        stroke.a *= strokeOpacity;
      }
      if (opacity !== void 0) {
        stroke.a *= opacity;
      }
    }
    let commands;
    if (transform4) {
      commands = transform4.transformShape(shape).commands;
    } else {
      commands = shape.commands;
    }
    let f = fill === void 0 ? shape.fill : fill, s = stroke === void 0 ? shape.stroke : stroke, sw = strokeWidth === void 0 ? shape.strokeWidth : strokeWidth;
    if (sw !== void 0 && transform4 !== void 0) {
      sw *= transform4.m[0];
    }
    return new Path(commands, f, s, sw);
  }
  function arcToSegments(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
    let th, sinTh, cosTh, px, py, pl, a00, a01, a10, a11, x0, y0, x1, y1, d, sFactorSq, sFactor, xc, yc, th0, th1, thArc, segments, result, th2, th3, i;
    th = rotateX * (Math.PI / 180);
    sinTh = Math.sin(th);
    cosTh = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    px = cosTh * (ox - x) * 0.5 + sinTh * (oy - y) * 0.5;
    py = cosTh * (oy - y) * 0.5 - sinTh * (ox - x) * 0.5;
    pl = px * px / (rx * rx) + py * py / (ry * ry);
    if (pl > 1) {
      pl = Math.sqrt(pl);
      rx *= pl;
      ry *= pl;
    }
    a00 = cosTh / rx;
    a01 = sinTh / rx;
    a10 = -sinTh / ry;
    a11 = cosTh / ry;
    x0 = a00 * ox + a01 * oy;
    y0 = a10 * ox + a11 * oy;
    x1 = a00 * x + a01 * y;
    y1 = a10 * x + a11 * y;
    d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
    sFactorSq = 1 / d - 0.25;
    if (sFactorSq < 0) {
      sFactorSq = 0;
    }
    sFactor = Math.sqrt(sFactorSq);
    if (sweep === large) {
      sFactor = -sFactor;
    }
    xc = 0.5 * (x0 + x1) - sFactor * (y1 - y0);
    yc = 0.5 * (y0 + y1) + sFactor * (x1 - x0);
    th0 = Math.atan2(y0 - yc, x0 - xc);
    th1 = Math.atan2(y1 - yc, x1 - xc);
    thArc = th1 - th0;
    if (thArc < 0 && sweep === 1) {
      thArc += 2 * Math.PI;
    } else if (thArc > 0 && sweep === 0) {
      thArc -= 2 * Math.PI;
    }
    segments = Math.ceil(Math.abs(thArc / (Math.PI * 0.5 + 1e-3)));
    result = [];
    for (i = 0; i < segments; i += 1) {
      th2 = th0 + i * thArc / segments;
      th3 = th0 + (i + 1) * thArc / segments;
      result[i] = [xc, yc, th2, th3, rx, ry, sinTh, cosTh];
    }
    return result;
  }
  function segmentToBezier(cx, cy, th0, th1, rx, ry, sinTh, cosTh) {
    const a00 = cosTh * rx, a01 = -sinTh * ry, a10 = sinTh * rx, a11 = cosTh * ry, thHalf = 0.5 * (th1 - th0), t = 8 / 3 * Math.sin(thHalf * 0.5) * Math.sin(thHalf * 0.5) / Math.sin(thHalf), x1 = cx + Math.cos(th0) - t * Math.sin(th0), y1 = cy + Math.sin(th0) + t * Math.cos(th0), x3 = cx + Math.cos(th1), y3 = cy + Math.sin(th1), x2 = x3 + t * Math.sin(th1), y2 = y3 - t * Math.cos(th1);
    return [
      a00 * x1 + a01 * y1,
      a10 * x1 + a11 * y1,
      a00 * x2 + a01 * y2,
      a10 * x2 + a11 * y2,
      a00 * x3 + a01 * y3,
      a10 * x3 + a11 * y3
    ];
  }
  var read = {
    svg: function() {
      return read.g.apply(this, arguments);
    },
    g: function(node, parentAttributes) {
      const shapes = [];
      const attributes = readSvgAttributes(node, parentAttributes);
      let n, tag, tagName, o;
      for (let i = 0; i < node.childNodes.length; i += 1) {
        n = node.childNodes[i];
        tag = n.nodeName;
        if (!tag) {
          return;
        }
        tagName = tag.replace(/svg:/gi, "").toLowerCase();
        if (read[tagName] !== void 0) {
          o = read[tagName].call(this, n, attributes);
          shapes.push(o);
        }
      }
      return new Group(shapes);
    },
    _polyline: function(node) {
      const points = node.getAttribute("points");
      const p = new Path();
      points.replace(/([\d.?]+),([\d.?]+)/g, function(match, p1, p2) {
        const x = parseFloat(p1);
        const y = parseFloat(p2);
        if (p.commands.length === 0) {
          p.moveTo(x, y);
        } else {
          p.lineTo(x, y);
        }
      });
      return p;
    },
    polygon: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      const p = read._polyline(node);
      p.close();
      return applySvgAttributes(p, attributes);
    },
    polyline: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      const p = read._polyline(node);
      return applySvgAttributes(p, attributes);
    },
    rect: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      let x = parseFloat(node.getAttribute("x"));
      let y = parseFloat(node.getAttribute("y"));
      if (!x) {
        x = 0;
      }
      if (!y) {
        y = 0;
      }
      let width = parseFloat(node.getAttribute("width"));
      let height = parseFloat(node.getAttribute("height"));
      if (!width) {
        width = 0;
      }
      if (!height) {
        height = 0;
      }
      if (width < 0) {
        console.error(
          'Error: invalid negative value for <rect> attribute width="' + width + '"'
        );
        width = 0;
      }
      if (height < 0) {
        console.error(
          'Error: invalid negative value for <rect> attribute height="' + height + '"'
        );
        height = 0;
      }
      let rx = parseFloat(node.getAttribute("rx"));
      let ry = parseFloat(node.getAttribute("ry"));
      if (!rx) {
        rx = 0;
      }
      if (!ry) {
        ry = 0;
      }
      if (rx < 0) {
        console.error(
          'Error: invalid negative value for <rect> attribute rx="' + rx + '"'
        );
        rx = 0;
      }
      if (ry < 0) {
        console.error(
          'Error: invalid negative value for <rect> attribute ry="' + ry + '"'
        );
        ry = 0;
      }
      if (!rx || !ry) {
        rx = ry = Math.max(rx, ry);
      }
      if (rx > width / 2) {
        rx = width / 2;
      }
      if (ry > height / 2) {
        ry = height / 2;
      }
      const p = new Path();
      if (rx && ry) {
        p.addRoundedRect(x, y, width, height, rx, ry);
      } else {
        p.addRect(x, y, width, height);
      }
      return applySvgAttributes(p, attributes);
    },
    ellipse: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      let cx = parseFloat(node.getAttribute("cx"));
      let cy = parseFloat(node.getAttribute("cy"));
      if (!cx) {
        cx = 0;
      }
      if (!cy) {
        cy = 0;
      }
      let rx = parseFloat(node.getAttribute("rx"));
      let ry = parseFloat(node.getAttribute("ry"));
      if (!rx) {
        rx = 0;
      }
      if (!ry) {
        ry = 0;
      }
      if (rx < 0) {
        console.error(
          'Error: invalid negative value for <ellipse> attribute rx="' + rx + '"'
        );
        rx = 0;
      }
      if (ry < 0) {
        console.error(
          'Error: invalid negative value for <ellipse> attribute ry="' + ry + '"'
        );
        ry = 0;
      }
      const p = new Path();
      p.addEllipse(cx - rx, cy - ry, rx * 2, ry * 2);
      return applySvgAttributes(p, attributes);
    },
    circle: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      let cx = parseFloat(node.getAttribute("cx"));
      let cy = parseFloat(node.getAttribute("cy"));
      if (!cx) {
        cx = 0;
      }
      if (!cy) {
        cy = 0;
      }
      let r = parseFloat(node.getAttribute("r"));
      if (!r) {
        r = 0;
      }
      if (r < 0) {
        console.error(
          'Error: invalid negative value for <circle> attribute r="' + r + '"'
        );
        r = 0;
      }
      const p = new Path();
      p.addEllipse(cx - r, cy - r, r * 2, r * 2);
      return applySvgAttributes(p, attributes);
    },
    line: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      let x1 = parseFloat(node.getAttribute("x1"));
      let y1 = parseFloat(node.getAttribute("y1"));
      let x2 = parseFloat(node.getAttribute("x2"));
      let y2 = parseFloat(node.getAttribute("y2"));
      if (!x1) {
        x1 = 0;
      }
      if (!y1) {
        y1 = 0;
      }
      if (!x2) {
        x2 = 0;
      }
      if (!y2) {
        y2 = 0;
      }
      const p = new Path();
      p.addLine(x1, y1, x2, y2);
      return applySvgAttributes(p, attributes);
    },
    path: function(node, parentAttributes) {
      const attributes = readSvgAttributes(node, parentAttributes);
      let d, PathParser, pp, pt, newP, curr, p1, cntrl, cp, cp1x, cp1y, cp2x, cp2y, rx, ry, rot, large, sweep, ex, ey, segs, i, bez;
      d = node.getAttribute("d");
      d = d.replace(/,/gm, " ");
      d = d.replace(
        /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
        "$1 $2"
      );
      d = d.replace(
        /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
        "$1 $2"
      );
      d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
      d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2");
      d = d.replace(/([0-9])([+-])/gm, "$1 $2");
      d = d.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
      d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ");
      d = compressSpaces(d);
      d = trim(d);
      PathParser = function(d2) {
        this.tokens = d2.split(" ");
        this.reset = function() {
          this.i = -1;
          this.command = "";
          this.previousCommand = "";
          this.start = new Point(0, 0);
          this.control = new Point(0, 0);
          this.current = new Point(0, 0);
          this.points = [];
          this.angles = [];
        };
        this.isEnd = function() {
          return this.i >= this.tokens.length - 1;
        };
        this.isCommandOrEnd = function() {
          if (this.isEnd()) {
            return true;
          }
          return this.tokens[this.i + 1].match(/^[A-Za-z]$/) !== null;
        };
        this.isRelativeCommand = function() {
          switch (this.command) {
            case "m":
            case "l":
            case "h":
            case "v":
            case "c":
            case "s":
            case "q":
            case "t":
            case "a":
            case "z":
              return true;
          }
          return false;
        };
        this.getToken = function() {
          this.i += 1;
          return this.tokens[this.i];
        };
        this.getScalar = function() {
          return parseFloat(this.getToken());
        };
        this.nextCommand = function() {
          this.previousCommand = this.command;
          this.command = this.getToken();
        };
        this.getPoint = function() {
          const pt2 = new Point(this.getScalar(), this.getScalar());
          return this.makeAbsolute(pt2);
        };
        this.getAsControlPoint = function() {
          const pt2 = this.getPoint();
          this.control = pt2;
          return pt2;
        };
        this.getAsCurrentPoint = function() {
          const pt2 = this.getPoint();
          this.current = pt2;
          return pt2;
        };
        this.getReflectedControlPoint = function() {
          if (this.previousCommand.toLowerCase() !== "c" && this.previousCommand.toLowerCase() !== "s" && this.previousCommand.toLowerCase() !== "q" && this.previousCommand.toLowerCase() !== "t") {
            return this.current;
          }
          const pt2 = new Point(
            2 * this.current.x - this.control.x,
            2 * this.current.y - this.control.y
          );
          return pt2;
        };
        this.makeAbsolute = function(pt2) {
          if (this.isRelativeCommand()) {
            return new Point(pt2.x + this.current.x, pt2.y + this.current.y);
          }
          return pt2;
        };
      };
      const p = new Path();
      pp = new PathParser(d);
      pp.reset();
      while (!pp.isEnd()) {
        pp.nextCommand();
        switch (pp.command) {
          case "M":
          case "m":
            pt = pp.getAsCurrentPoint();
            p.moveTo(pt.x, pt.y);
            pp.start = pp.current;
            while (!pp.isCommandOrEnd()) {
              pt = pp.getAsCurrentPoint();
              p.lineTo(pt.x, pt.y);
            }
            break;
          case "L":
          case "l":
            while (!pp.isCommandOrEnd()) {
              pt = pp.getAsCurrentPoint();
              p.lineTo(pt.x, pt.y);
            }
            break;
          case "H":
          case "h":
            while (!pp.isCommandOrEnd()) {
              newP = new Point(
                (pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(),
                pp.current.y
              );
              pp.current = newP;
              p.lineTo(pp.current.x, pp.current.y);
            }
            break;
          case "V":
          case "v":
            while (!pp.isCommandOrEnd()) {
              newP = new Point(
                pp.current.x,
                (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar()
              );
              pp.current = newP;
              p.lineTo(pp.current.x, pp.current.y);
            }
            break;
          case "C":
          case "c":
            while (!pp.isCommandOrEnd()) {
              p1 = pp.getPoint();
              cntrl = pp.getAsControlPoint();
              cp = pp.getAsCurrentPoint();
              p.curveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
          case "S":
          case "s":
            while (!pp.isCommandOrEnd()) {
              p1 = pp.getReflectedControlPoint();
              cntrl = pp.getAsControlPoint();
              cp = pp.getAsCurrentPoint();
              p.curveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
          case "Q":
          case "q":
            while (!pp.isCommandOrEnd()) {
              curr = pp.current;
              cntrl = pp.getAsControlPoint();
              cp = pp.getAsCurrentPoint();
              cp1x = curr.x + 2 / 3 * (cntrl.x - curr.x);
              cp1y = curr.y + 2 / 3 * (cntrl.y - curr.y);
              cp2x = cp1x + 1 / 3 * (cp.x - curr.x);
              cp2y = cp1y + 1 / 3 * (cp.y - curr.y);
              p.curveTo(cp1x, cp1y, cp2x, cp2y, cp.x, cp.y);
            }
            break;
          case "T":
          case "t":
            while (!pp.isCommandOrEnd()) {
              curr = pp.current;
              cntrl = pp.getReflectedControlPoint();
              pp.control = cntrl;
              cp = pp.getAsCurrentPoint();
              cp1x = curr.x + 2 / 3 * (cntrl.x - curr.x);
              cp1y = curr.y + 2 / 3 * (cntrl.y - curr.y);
              cp2x = cp1x + 1 / 3 * (cp.x - curr.x);
              cp2y = cp1y + 1 / 3 * (cp.y - curr.y);
              p.curveTo(cp1x, cp1y, cp2x, cp2y, cp.x, cp.y);
            }
            break;
          case "A":
          case "a":
            while (!pp.isCommandOrEnd()) {
              curr = pp.current;
              rx = pp.getScalar();
              ry = pp.getScalar();
              rot = pp.getScalar();
              large = pp.getScalar();
              sweep = pp.getScalar();
              cp = pp.getAsCurrentPoint();
              ex = cp.x;
              ey = cp.y;
              segs = arcToSegments(
                ex,
                ey,
                rx,
                ry,
                large,
                sweep,
                rot,
                curr.x,
                curr.y
              );
              for (i = 0; i < segs.length; i += 1) {
                bez = segmentToBezier.apply(this, segs[i]);
                p.curveTo.apply(p, bez);
              }
            }
            break;
          case "Z":
          case "z":
            p.close();
            pp.current = pp.start;
            break;
        }
      }
      return applySvgAttributes(p, attributes);
    }
  };
  function interpret(svgNode) {
    let node, tag = svgNode.tagName.toLowerCase();
    if (read[tag] === void 0) {
      return null;
    }
    node = read[tag].call(this, svgNode);
    return node;
  }
  function parseString(s) {
    const doc = new import_xmldom.DOMParser({
      errorHandler: function(key, msg) {
        throw new Error('Could not parse string "' + String(s) + '": ' + msg);
      }
    }).parseFromString(s);
    if (doc) {
      return interpret(doc.documentElement);
    } else {
      return null;
    }
  }

  // src/libraries/vg/objects/vec3.js
  var Vec3 = class {
    constructor(x, y, z) {
      this.x = x === void 0 ? 0 : x;
      this.y = y === void 0 ? 0 : y;
      this.z = z === void 0 ? 0 : z;
    }
    static up() {
      return new Vec3(0, 1, 0);
    }
    // Generate the dot product of two vectors.
    static dot(a, b) {
      return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    // Generate the cross product of two vectors.
    static cross(a, b) {
      return new Vec3(
        a.y * b.z - a.z * b.y,
        a.z * b.x - a.x * b.z,
        a.x * b.y - a.y * b.x
      );
    }
    // Convert this vector to a string representation.
    toString() {
      return "[" + this.x + ", " + this.y + ", " + this.z + "]";
    }
    // Convert this vector to an array.
    toArray() {
      const array = [];
      array.push(this.x);
      array.push(this.y);
      array.push(this.z);
      return array;
    }
    // Calculate the length of this vector.
    getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    // Create a new vector that is this vector, normalized.
    normalize() {
      let len, c;
      len = this.getLength();
      if (len === 0) {
        return this;
      }
      c = 1 / len;
      return new Vec3(this.x * c, this.y * c, this.z * c);
    }
    // Create a new vector that is the addition of this vector and the given vector.
    add(o) {
      return new Vec3(this.x + o.x, this.y + o.y, this.z + o.z);
    }
    // Create a new vector that is the subtraction of this vector and the given vector.
    subtract(o) {
      return new Vec3(this.x - o.x, this.y - o.y, this.z - o.z);
    }
    // Transform the vector according to the matrix and return the result.
    // A new vector is created, nothing is modified.
    transform(matrix4) {
      let x, y, z, w, matrix;
      matrix = matrix4;
      x = this.x * matrix.m[0] + this.y * matrix.m[4] + this.z * matrix.m[8] + matrix.m[12];
      y = this.x * matrix.m[1] + this.y * matrix.m[5] + this.z * matrix.m[9] + matrix.m[13];
      z = this.x * matrix.m[2] + this.y * matrix.m[6] + this.z * matrix.m[10] + matrix.m[14];
      w = this.x * matrix.m[3] + this.y * matrix.m[7] + this.z * matrix.m[11] + matrix.m[15];
      return new Vec3(x / w, y / w, z / w);
    }
  };
  Vec3.ZERO = new Vec3(0, 0, 0);

  // src/libraries/vg/objects/matrix4.js
  var Matrix4 = class {
    constructor(m) {
      if (m !== void 0) {
        this.m = m;
      } else {
        m = new Float32Array(16);
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = 1;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = 1;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        this.m = m;
      }
    }
    // Create a perspective matrix transformation.
    static perspective(fov, aspect, zNear, zFar) {
      const m = new Float32Array(Matrix4.IDENTITY.m), tan2 = 1 / Math.tan(fov * 0.5);
      m[0] = tan2 / aspect;
      m[1] = m[2] = m[3] = 0;
      m[5] = tan2;
      m[4] = m[6] = m[7] = 0;
      m[8] = m[9] = 0;
      m[10] = -zFar / (zNear - zFar);
      m[11] = 1;
      m[12] = m[13] = m[15] = 0;
      m[14] = zNear * zFar / (zNear - zFar);
      return new Matrix4(m);
    }
    static lookAt(eye, target, up) {
      let m, zAxis, xAxis, yAxis, ex, ey, ez;
      m = new Float32Array(16);
      zAxis = target.subtract(eye).normalize();
      xAxis = Vec3.cross(up, zAxis).normalize();
      yAxis = Vec3.cross(zAxis, xAxis).normalize();
      ex = -Vec3.dot(xAxis, eye);
      ey = -Vec3.dot(yAxis, eye);
      ez = -Vec3.dot(zAxis, eye);
      m[0] = xAxis.x;
      m[1] = yAxis.x;
      m[2] = zAxis.x;
      m[3] = 0;
      m[4] = xAxis.y;
      m[5] = yAxis.y;
      m[6] = zAxis.y;
      m[7] = 0;
      m[8] = xAxis.z;
      m[9] = yAxis.z;
      m[10] = zAxis.z;
      m[11] = 0;
      m[12] = ex;
      m[13] = ey;
      m[14] = ez;
      m[15] = 1;
      return new Matrix4(m);
    }
    // Return a new matrix with the inversion of this matrix.
    invert() {
      let l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24, l25, l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, m;
      l1 = this.m[0];
      l2 = this.m[1];
      l3 = this.m[2];
      l4 = this.m[3];
      l5 = this.m[4];
      l6 = this.m[5];
      l7 = this.m[6];
      l8 = this.m[7];
      l9 = this.m[8];
      l10 = this.m[9];
      l11 = this.m[10];
      l12 = this.m[11];
      l13 = this.m[12];
      l14 = this.m[13];
      l15 = this.m[14];
      l16 = this.m[15];
      l17 = l11 * l16 - l12 * l15;
      l18 = l10 * l16 - l12 * l14;
      l19 = l10 * l15 - l11 * l14;
      l20 = l9 * l16 - l12 * l13;
      l21 = l9 * l15 - l11 * l13;
      l22 = l9 * l14 - l10 * l13;
      l23 = l6 * l17 - l7 * l18 + l8 * l19;
      l24 = -(l5 * l17 - l7 * l20 + l8 * l21);
      l25 = l5 * l18 - l6 * l20 + l8 * l22;
      l26 = -(l5 * l19 - l6 * l21 + l7 * l22);
      l27 = 1 / (l1 * l23 + l2 * l24 + l3 * l25 + l4 * l26);
      l28 = l7 * l16 - l8 * l15;
      l29 = l6 * l16 - l8 * l14;
      l30 = l6 * l15 - l7 * l14;
      l31 = l5 * l16 - l8 * l13;
      l32 = l5 * l15 - l7 * l13;
      l33 = l5 * l14 - l6 * l13;
      l34 = l7 * l12 - l8 * l11;
      l35 = l6 * l12 - l8 * l10;
      l36 = l6 * l11 - l7 * l10;
      l37 = l5 * l12 - l8 * l9;
      l38 = l5 * l11 - l7 * l9;
      l39 = l5 * l10 - l6 * l9;
      m = new Float32Array(16);
      m[0] = l23 * l27;
      m[4] = l24 * l27;
      m[8] = l25 * l27;
      m[12] = l26 * l27;
      m[1] = -(l2 * l17 - l3 * l18 + l4 * l19) * l27;
      m[5] = (l1 * l17 - l3 * l20 + l4 * l21) * l27;
      m[9] = -(l1 * l18 - l2 * l20 + l4 * l22) * l27;
      m[13] = (l1 * l19 - l2 * l21 + l3 * l22) * l27;
      m[2] = (l2 * l28 - l3 * l29 + l4 * l30) * l27;
      m[6] = -(l1 * l28 - l3 * l31 + l4 * l32) * l27;
      m[10] = (l1 * l29 - l2 * l31 + l4 * l33) * l27;
      m[14] = -(l1 * l30 - l2 * l32 + l3 * l33) * l27;
      m[3] = -(l2 * l34 - l3 * l35 + l4 * l36) * l27;
      m[7] = (l1 * l34 - l3 * l37 + l4 * l38) * l27;
      m[11] = -(l1 * l35 - l2 * l37 + l4 * l39) * l27;
      m[15] = (l1 * l36 - l2 * l38 + l3 * l39) * l27;
      return new Matrix4(m);
    }
    multiply(other) {
      const m = new Float32Array(16);
      m[0] = this.m[0] * other.m[0] + this.m[1] * other.m[4] + this.m[2] * other.m[8] + this.m[3] * other.m[12];
      m[1] = this.m[0] * other.m[1] + this.m[1] * other.m[5] + this.m[2] * other.m[9] + this.m[3] * other.m[13];
      m[2] = this.m[0] * other.m[2] + this.m[1] * other.m[6] + this.m[2] * other.m[10] + this.m[3] * other.m[14];
      m[3] = this.m[0] * other.m[3] + this.m[1] * other.m[7] + this.m[2] * other.m[11] + this.m[3] * other.m[15];
      m[4] = this.m[4] * other.m[0] + this.m[5] * other.m[4] + this.m[6] * other.m[8] + this.m[7] * other.m[12];
      m[5] = this.m[4] * other.m[1] + this.m[5] * other.m[5] + this.m[6] * other.m[9] + this.m[7] * other.m[13];
      m[6] = this.m[4] * other.m[2] + this.m[5] * other.m[6] + this.m[6] * other.m[10] + this.m[7] * other.m[14];
      m[7] = this.m[4] * other.m[3] + this.m[5] * other.m[7] + this.m[6] * other.m[11] + this.m[7] * other.m[15];
      m[8] = this.m[8] * other.m[0] + this.m[9] * other.m[4] + this.m[10] * other.m[8] + this.m[11] * other.m[12];
      m[9] = this.m[8] * other.m[1] + this.m[9] * other.m[5] + this.m[10] * other.m[9] + this.m[11] * other.m[13];
      m[10] = this.m[8] * other.m[2] + this.m[9] * other.m[6] + this.m[10] * other.m[10] + this.m[11] * other.m[14];
      m[11] = this.m[8] * other.m[3] + this.m[9] * other.m[7] + this.m[10] * other.m[11] + this.m[11] * other.m[15];
      m[12] = this.m[12] * other.m[0] + this.m[13] * other.m[4] + this.m[14] * other.m[8] + this.m[15] * other.m[12];
      m[13] = this.m[12] * other.m[1] + this.m[13] * other.m[5] + this.m[14] * other.m[9] + this.m[15] * other.m[13];
      m[14] = this.m[12] * other.m[2] + this.m[13] * other.m[6] + this.m[14] * other.m[10] + this.m[15] * other.m[14];
      m[15] = this.m[12] * other.m[3] + this.m[13] * other.m[7] + this.m[14] * other.m[11] + this.m[15] * other.m[15];
      return new Matrix4(m);
    }
    translate(tx, ty, tz) {
      const m = new Float32Array(this.m);
      m[12] += tx;
      m[13] += ty;
      m[14] += tz;
      return new Matrix4(m);
    }
  };
  Matrix4.IDENTITY = new Matrix4();

  // src/libraries/vg/objects/text.js
  var _dummyContext = null;
  var Text = class {
    constructor(text2) {
      let args = Array.prototype.slice.call(arguments, 1), secondArg = arguments[1], thirdArg = arguments[2], lastArg = arguments[arguments.length - 1], options;
      this.text = String(text2);
      if (typeof secondArg === "number") {
        this._x = secondArg;
        this._y = thirdArg;
        args = args.slice(2);
      } else if (Array.isArray(secondArg)) {
        this._x = secondArg[0];
        this._y = secondArg[1];
        args = args.slice(1);
      } else if (typeof secondArg === "object") {
        this._x = secondArg.x !== void 0 ? secondArg.x : 0;
        this._y = secondArg.y !== void 0 ? secondArg.y : 0;
        args = args.slice(1);
      } else {
        this._x = 0;
        this._y = 0;
      }
      if (typeof lastArg === "object") {
        options = lastArg;
        if (secondArg !== lastArg) {
          args = args.slice(0, args.length - 1);
        }
      } else {
        options = {};
      }
      if (args.length) {
        this.fontFamily = args.shift();
      } else {
        this.fontFamily = options.fontFamily || options.fontName || options.font || "sans-serif";
      }
      if (args.length) {
        this.fontSize = args.shift();
      } else {
        this.fontSize = options.fontSize || 24;
      }
      if (args.length) {
        this.textAlign = args.shift();
      } else {
        this.textAlign = options.align || options.textAlign || "left";
      }
      if (args.length) {
        this.fill = args.shift();
      } else {
        this.fill = options.fill || "black";
      }
      this.transform = new Transform();
    }
    // The `measureWidth` function requires a canvas, so we set up a dummy one
    // that we re-use for the duration of the page.
    static _getDummyContext() {
      if (!_dummyContext) {
        if (typeof document !== "undefined") {
          _dummyContext = document.createElement("canvas").getContext("2d");
        } else {
          _dummyContext = {
            font: "10px sans-serif",
            measureText: function(text2) {
              const fontSize = parseFloat(this.font);
              return { width: text2.length * fontSize * 0.6 };
            }
          };
        }
      }
      return _dummyContext;
    }
    clone() {
      const t = new Text();
      t.text = this.text;
      t._x = this._x;
      t._y = this._y;
      t.fontFamily = this.fontFamily;
      t.fontSize = this.fontSize;
      t.textAlign = this.textAlign;
      t.fill = Color.clone(this.fill);
      t.transform = this.transform;
      return t;
    }
    _getFont() {
      return this.fontSize + "px " + this.fontFamily;
    }
    colorize(fill) {
      const t = this.clone();
      t.fill = Color.clone(fill);
      return t;
    }
    draw(ctx) {
      ctx.save();
      ctx.font = this._getFont();
      ctx.textAlign = this.textAlign;
      const m = this.transform.m;
      ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      ctx.fillStyle = Color.toCSS(this.fill);
      ctx.fillText(this.text, this._x, this._y);
      ctx.restore();
    }
    bounds() {
      let ctx = Text._getDummyContext(), metrics, x = this._x;
      ctx.font = this._getFont();
      metrics = ctx.measureText(this.text);
      if (this.textAlign === "center") {
        x = this._x - metrics.width / 2;
      } else if (this.textAlign === "right") {
        x = this._x - metrics.width;
      }
      return new Rect(
        x,
        this._y - this.fontSize,
        metrics.width,
        this.fontSize * 1.2
      );
    }
    toSVG() {
      let svg = "<text";
      svg += ' x="' + this._x + '"';
      svg += ' y="' + this._y + '"';
      svg += ' font-family="' + this.fontFamily + '"';
      svg += ' font-size="' + this.fontSize + '"';
      let textAnchor;
      if (this.textAlign === "left") {
        textAnchor = "start";
      } else if (this.textAlign === "center") {
        textAnchor = "middle";
      } else if (this.textAlign === "right") {
        textAnchor = "end";
      }
      svg += ' text-anchor="' + textAnchor + '"';
      if (this.fill !== "black") {
        const fill = Color.parse(this.fill);
        svg += ' fill="' + fill.toHex(true) + '"';
        if (fill.a < 1) {
          svg += ' opacity="' + fill.a + '"';
        }
      }
      if (!this.transform.isIdentity()) {
        svg += ' transform="matrix(' + this.transform.m.join(",") + ')"';
      }
      svg += ">";
      svg += this.text;
      svg += "</text>";
      return svg;
    }
  };

  // src/libraries/vg/objects/transformable.js
  var Transformable = {
    translate: function(position) {
      if (!position) {
        position = Point.ZERO;
      }
      const t = new Transform().translate(position.x, position.y);
      return t.transformShape(this);
    },
    scale: function(scale2, origin) {
      if (!origin) {
        origin = Point.ZERO;
      }
      let sx, sy;
      if (typeof scale2 === "number") {
        sx = scale2;
        sy = scale2;
      } else {
        sx = scale2.x;
        sy = scale2.y;
      }
      let t = new Transform();
      t = t.translate(origin.x, origin.y);
      t = t.scale(sx, sy);
      t = t.translate(-origin.x, -origin.y);
      return t.transformShape(this);
    },
    rotate: function(angle3, origin) {
      if (!origin) {
        origin = Point.ZERO;
      }
      let t = new Transform();
      t = t.translate(origin.x, origin.y);
      t = t.rotate(angle3);
      t = t.translate(-origin.x, -origin.y);
      return t.transformShape(this);
    },
    skew: function(skew2, origin) {
      if (!origin) {
        origin = Point.ZERO;
      }
      let t = new Transform();
      t = t.translate(origin.x, origin.y);
      t = t.skew(skew2.x, skew2.y);
      t = t.translate(-origin.x, -origin.y);
      return t.transformShape(this);
    }
  };
  var transformable_default = Transformable;

  // src/libraries/vg/commands/draw.js
  function isDrawable(o) {
    if (Array.isArray(o)) {
      o = o[0];
    }
    if (!o) {
      return false;
    } else if (typeof o.draw === "function") {
      return true;
    } else if (typeof o.x === "number" && typeof o.y === "number") {
      return true;
    } else if (typeof o.r === "number" && typeof o.g === "number" && typeof o.b === "number") {
      return true;
    } else {
      return false;
    }
  }
  function drawPoints(ctx, points) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    let pt;
    for (let i = 0; i < points.length; i += 1) {
      pt = points[i];
      ctx.moveTo(pt.x, pt.y);
      ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2, false);
    }
    ctx.fill();
  }
  function drawColoredPoints(ctx, points) {
    let pt;
    for (let i = 0, n = points.length; i < n; i += 1) {
      pt = points[i];
      ctx.fillStyle = Color.toCSS(pt);
      ctx.fillRect(pt.x - 2, pt.y - 2, 4, 4);
    }
  }
  function drawRectangles(ctx, rectangles) {
    ctx.save();
    let r;
    for (let i = 0; i < rectangles.length; i += 1) {
      r = rectangles[i];
      ctx.strokeStyle = "black";
      ctx.strokeWidth = 1;
      ctx.rect(r.x, r.y, r.width, r.height);
      ctx.stroke();
    }
    ctx.restore();
  }
  function drawColors(ctx, colors2) {
    ctx.save();
    let c;
    for (let i = 0; i < colors2.length; i += 1) {
      c = colors2[i];
      ctx.fillStyle = Color.toCSS(c);
      ctx.fillRect(0, 0, 30, 30);
      ctx.translate(30, 0);
    }
    ctx.restore();
  }
  function draw(ctx, o) {
    let k = o;
    let isArray = false;
    if (Array.isArray(o)) {
      k = o[0];
      isArray = true;
    }
    if (k) {
      if (typeof k.draw === "function") {
        if (isArray) {
          for (let i = 0, n = o.length; i < n; i += 1) {
            draw(ctx, o[i]);
          }
        } else {
          o.draw(ctx);
        }
      } else if (typeof k.x === "number" && typeof k.y === "number") {
        if (typeof k.r === "number" && typeof k.g === "number" && typeof k.b === "number") {
          drawColoredPoints(ctx, isArray ? o : [o]);
        } else if (typeof k.width === "number" && typeof k.height === "number") {
          drawRectangles(ctx, isArray ? o : [o]);
        } else {
          drawPoints(ctx, isArray ? o : [o]);
        }
      } else if (typeof k.r === "number" && typeof k.g === "number" && typeof k.b === "number") {
        drawColors(ctx, isArray ? o : [o]);
      }
    }
  }
  function toSVG(o, options) {
    options = options || {};
    const includeHeader = options.header === true;
    const x = options.x !== void 0 ? options.x : 0;
    const y = options.y !== void 0 ? options.y : 0;
    const width = options.width !== void 0 ? options.width : 500;
    const height = options.height !== void 0 ? options.height : 500;
    let svg = "";
    if (o) {
      if (typeof o.toSVG === "function") {
        svg = o.toSVG();
      } else if (Array.isArray(o)) {
        svg = "<g>\n";
        for (let i = 0, n = o.length; i < n; i += 1) {
          svg += toSVG(o[i]) + "\n";
        }
        svg += "</g>\n";
      }
    }
    if (includeHeader) {
      svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="${x}" y="${y}" width="${width}px" height="${height}px" viewBox="${x} ${y} ${width} ${height}">
` + svg + `
</svg>
`;
    }
    return svg;
  }

  // src/libraries/vg/commands/filters.js
  var import_js_clipper = __toESM(require_clipper(), 1);
  function _cloneCommand2(cmd) {
    const newCmd = { type: cmd.type };
    if (newCmd.type !== CLOSE) {
      newCmd.x = cmd.x;
      newCmd.y = cmd.y;
    }
    if (newCmd.type === QUADTO) {
      newCmd.x1 = cmd.x1;
      newCmd.y1 = cmd.y1;
    } else if (newCmd.type === CURVETO) {
      newCmd.x1 = cmd.x1;
      newCmd.y1 = cmd.y1;
      newCmd.x2 = cmd.x2;
      newCmd.y2 = cmd.y2;
    }
    return newCmd;
  }
  var HORIZONTAL = "horizontal";
  var VERTICAL = "vertical";
  var EAST = "e";
  var WEST = "w";
  var NORTH = "n";
  var SOUTH = "s";
  function bounds(o) {
    let r, i, n;
    if (!o) {
      return new Rect();
    } else if (typeof o.bounds === "function") {
      return o.bounds();
    } else if (o.x !== void 0 && o.y !== void 0) {
      if (o.width !== void 0 && o.height !== void 0) {
        return new Rect(o.x, o.y, o.width, o.height);
      } else {
        return new Rect(o.x, o.y, 0, 0);
      }
    } else if (o.r !== void 0 && o.g !== void 0 && o.b !== void 0) {
      return new Rect(0, 0, 30, 30);
    } else if (Array.isArray(o)) {
      r = null;
      n = o.length;
      if (n > 0 && o[0].r !== void 0 && o[0].g !== void 0 && o[0].b !== void 0) {
        return new Rect(0, 0, o.length * 30, 30);
      }
      for (i = 0; i < n; i += 1) {
        if (!r) {
          r = bounds(o[i]);
        } else {
          r = r.unite(bounds(o[i]));
        }
      }
      return r || new Rect();
    } else {
      return new Rect();
    }
  }
  function makeCenteredRect(cx, cy, width, height) {
    const x = cx - width / 2, y = cy - height / 2;
    return new Rect(x, y, width, height);
  }
  function makePoint(x, y) {
    return new Point(x, y);
  }
  function makeRect(x, y, width, height) {
    return new Rect(x, y, width, height);
  }
  function merge() {
    const args = flatten(arguments);
    const shapes = [];
    for (let i = 0; i < args.length; i += 1) {
      if (args[i] && args[i].length !== 0) {
        shapes.push(args[i]);
      }
    }
    return new Group(shapes);
  }
  function combinePaths(shape) {
    return Path.combine(shape);
  }
  function toPoints(shape) {
    if (!shape) {
      return [];
    }
    let i;
    if (shape.commands) {
      let cmd, commands = [];
      for (i = 0; i < shape.commands.length; i += 1) {
        cmd = shape.commands[i];
        if (cmd.x !== void 0) {
          commands.push(new Point(cmd.x, cmd.y));
        }
      }
      return commands;
    }
    let points = [];
    for (i = 0; i < shape.shapes.length; i += 1) {
      points = points.concat(shapePoints(shape.shapes[i]));
    }
    return points;
  }
  var shapePoints = toPoints;
  function colorize(shape, fill, stroke, strokeWidth) {
    if (!shape) {
      return null;
    }
    return shape.colorize(fill, stroke, strokeWidth);
  }
  function translate(shape, position) {
    if (!shape) {
      return null;
    }
    if (shape.translate) {
      return shape.translate(position);
    }
    return transformable_default.translate.apply(shape, [position]);
  }
  function scale(shape, scale2, origin) {
    if (!shape) {
      return null;
    }
    if (shape.scale) {
      return shape.scale(scale2, origin);
    }
    return transformable_default.scale.apply(shape, [scale2, origin]);
  }
  function rotate(shape, angle3, origin) {
    if (!shape) {
      return null;
    }
    if (shape.rotate) {
      return shape.rotate(angle3, origin);
    }
    return transformable_default.rotate.apply(shape, [angle3, origin]);
  }
  function skew(shape, skew2, origin) {
    if (!shape) {
      return null;
    }
    if (shape.skew) {
      return shape.skew(skew2, origin);
    }
    return transformable_default.skew.apply(shape, [skew2, origin]);
  }
  function copy(shape, copies, order, translate2, rotate2, scale2) {
    let i, t, j, op, shapes = [], tx = 0, ty = 0, r = 0, sx = 1, sy = 1;
    for (i = 0; i < copies; i += 1) {
      t = new Transform();
      for (j = 0; j < order.length; j += 1) {
        op = order[j];
        if (op === "t") {
          t = t.translate(tx, ty);
        } else if (op === "r") {
          t = t.rotate(r);
        } else if (op === "s") {
          t = t.scale(sx, sy);
        }
      }
      if (Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
        shapes = shapes.concat(t.transformShape(shape));
      } else {
        shapes.push(t.transformShape(shape));
      }
      tx += translate2.x;
      ty += translate2.y;
      r += rotate2;
      sx += scale2.x;
      sy += scale2.y;
    }
    return shapes;
  }
  function fit(shape, position, width, height, stretch) {
    if (!shape) {
      return null;
    }
    stretch = stretch !== void 0 ? stretch : false;
    let t, sx, sy, bounds2 = bounds(shape), bx = bounds2.x, by = bounds2.y, bw = bounds2.width, bh = bounds2.height;
    bw = bw > 1e-12 ? bw : 0;
    bh = bh > 1e-12 ? bh : 0;
    t = new Transform();
    t = t.translate(position.x, position.y);
    if (!stretch) {
      sx = bw > 0 ? width / bw : Number.MAX_VALUE;
      sy = bh > 0 ? height / bh : Number.MAX_VALUE;
      sx = sy = Math.min(sx, sy);
    } else {
      sx = bw > 0 ? width / bw : 1;
      sy = bh > 0 ? height / bh : 1;
    }
    t = t.scale(sx, sy);
    t = t.translate(-bw / 2 - bx, -bh / 2 - by);
    return t.transformShape(shape);
  }
  function fitTo(shape, bounding, stretch) {
    if (!shape) {
      return null;
    }
    if (!bounding) {
      return shape;
    }
    const bounds2 = bounds(bounding), bx = bounds2.x, by = bounds2.y, bw = bounds2.width, bh = bounds2.height;
    return fit(shape, { x: bx + bw / 2, y: by + bh / 2 }, bw, bh, stretch);
  }
  function mirror(shape, angle3, origin, keepOriginal) {
    if (!shape) {
      return null;
    }
    let t = new Transform();
    t = t.translate(origin.x, origin.y);
    t = t.rotate(angle3 * 2 - 180);
    t = t.scale(-1, 1);
    t = t.translate(-origin.x, -origin.y);
    const newShape = t.transformShape(shape);
    if (keepOriginal) {
      if (Array.isArray(shape) && shape.length > 0) {
        return shape.concat(newShape);
      }
      return new Group([shape, newShape]);
    } else {
      return newShape;
    }
  }
  function pathLength(shape, options) {
    if (!shape) {
      return 0;
    }
    let precision = 20;
    if (options && options.precision) {
      precision = options.precision;
    }
    return shape.length(precision);
  }
  function resampleByLength(shape, maxLength) {
    if (!shape) {
      return null;
    }
    return shape.resampleByLength(maxLength);
  }
  function resampleByAmount(shape, amount, perContour) {
    if (!shape) {
      return null;
    }
    return shape.resampleByAmount(amount, perContour);
  }
  function _wigglePoints(shape, offset, rand) {
    let i, dx, dy;
    if (shape.commands) {
      const p = new Path([], shape.fill, shape.stroke, shape.strokeWidth);
      for (i = 0; i < shape.commands.length; i += 1) {
        dx = (rand(0, 1) - 0.5) * offset.x * 2;
        dy = (rand(0, 1) - 0.5) * offset.y * 2;
        const cmd = shape.commands[i];
        if (cmd.type === MOVETO) {
          p.moveTo(cmd.x + dx, cmd.y + dy);
        } else if (cmd.type === LINETO) {
          p.lineTo(cmd.x + dx, cmd.y + dy);
        } else if (cmd.type === CURVETO) {
          p.curveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x + dx, cmd.y + dy);
        } else if (cmd.type === CLOSE) {
          p.close();
        }
      }
      return p;
    } else if (shape.shapes) {
      const wShapes = [];
      wShapes.length = shape.shapes.length;
      for (i = 0; i < shape.shapes.length; i += 1) {
        wShapes[i] = _wigglePoints(shape.shapes[i], offset, rand);
      }
      return new Group(wShapes);
    } else if (Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
      const wPoints = [];
      wPoints.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        dx = (rand(0, 1) - 0.5) * offset.x * 2;
        dy = (rand(0, 1) - 0.5) * offset.y * 2;
        wPoints[i] = new Point(shape[i].x + dx, shape[i].y + dy);
      }
      return wPoints;
    } else {
      const w = [];
      w.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        w[i] = _wigglePoints(shape[i], offset, rand);
      }
      return w;
    }
  }
  function wigglePoints(shape, offset, seed) {
    if (!shape) {
      return null;
    }
    seed = seed !== void 0 ? seed : Math.random();
    const rand = generator(seed);
    if (offset === void 0) {
      offset = { x: 10, y: 10 };
    } else if (typeof offset === "number") {
      offset = { x: offset, y: offset };
    }
    return _wigglePoints(shape, offset, rand);
  }
  function _wiggleContours(shape, offset, rand) {
    let i;
    if (shape.commands) {
      let dx, dy, t, subPaths = shape.contours(), commands = [];
      for (i = 0; i < subPaths.length; i += 1) {
        dx = (rand(0, 1) - 0.5) * offset.x * 2;
        dy = (rand(0, 1) - 0.5) * offset.y * 2;
        t = new Transform().translate(dx, dy);
        commands = commands.concat(
          t.transformShape(new Path(subPaths[i])).commands
        );
      }
      return new Path(commands, shape.fill, shape.stroke, shape.strokeWidth);
    } else if (shape.shapes) {
      const wShapes = [];
      wShapes.length = shape.shapes.length;
      for (i = 0; i < shape.shapes.length; i += 1) {
        wShapes[i] = _wiggleContours(shape.shapes[i], offset, rand);
      }
      return new Group(wShapes);
    } else {
      const w = [];
      w.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        w[i] = _wiggleContours(shape[i], offset, rand);
      }
      return w;
    }
  }
  function wiggleContours(shape, offset, seed) {
    if (!shape) {
      return null;
    }
    seed = seed !== void 0 ? seed : Math.random();
    const rand = generator(seed);
    if (offset === void 0) {
      offset = { x: 10, y: 10 };
    } else if (typeof offset === "number") {
      offset = { x: offset, y: offset };
    }
    return _wiggleContours(shape, offset, rand);
  }
  function _wigglePaths(shape, offset, rand) {
    if (shape.commands) {
      return shape;
    } else if (shape.shapes) {
      return new Group(_wigglePaths(shape.shapes, offset, rand));
    } else if (Array.isArray(shape)) {
      let subShape, dx, dy, t, newShapes = [];
      for (let i = 0; i < shape.length; i += 1) {
        subShape = shape[i];
        if (subShape.commands) {
          dx = (rand(0, 1) - 0.5) * offset.x * 2;
          dy = (rand(0, 1) - 0.5) * offset.y * 2;
          t = new Transform().translate(dx, dy);
          newShapes.push(t.transformShape(subShape));
        } else if (subShape.shapes) {
          newShapes.push(_wigglePaths(subShape, offset, rand));
        }
      }
      return newShapes;
    }
  }
  function wigglePaths(shape, offset, seed) {
    if (!shape) {
      return null;
    }
    seed = seed !== void 0 ? seed : Math.random();
    const rand = generator(seed);
    if (offset === void 0) {
      offset = { x: 10, y: 10 };
    } else if (typeof offset === "number") {
      offset = { x: offset, y: offset };
    }
    return _wigglePaths(shape, offset, rand);
  }
  function scatterPoints(shape, amount, seed) {
    if (!shape) {
      return [];
    }
    seed = seed !== void 0 ? seed : Math.random();
    let i, j, contourPath, nrKeypoints, tries, inContourCount, x, y, rand = generator(seed), bounds2 = shape.bounds(), bx = bounds2.x, by = bounds2.y, bw = bounds2.width, bh = bounds2.height, contours = shape.contours(), paths = [], points = [], POINTS_PER_SEGMENT = 5;
    for (i = 0; i < contours.length; i++) {
      contourPath = new Path(contours[i]);
      nrKeypoints = contourPath.commands.length;
      paths.push(
        contourPath.points(nrKeypoints * POINTS_PER_SEGMENT, { closed: true })
      );
    }
    for (i = 0; i < amount; i += 1) {
      tries = 100;
      while (tries > 0) {
        inContourCount = 0;
        x = bx + rand(0, 1) * bw;
        y = by + rand(0, 1) * bh;
        for (j = 0; j < paths.length; j++) {
          if (pointInPolygon(paths[j], x, y)) {
            inContourCount += 1;
          }
        }
        if (inContourCount % 2) {
          points.push(new Point(x, y));
          break;
        }
        tries -= 1;
      }
    }
    return points;
  }
  function connectPoints(points, closed) {
    if (!points) {
      return null;
    }
    let pt, p = new Path();
    for (let i = 0; i < points.length; i += 1) {
      pt = points[i];
      if (i === 0) {
        p.moveTo(pt.x, pt.y);
      } else {
        p.lineTo(pt.x, pt.y);
      }
    }
    if (closed) {
      p.close();
    }
    p.fill = null;
    p.stroke = Color.BLACK;
    return p;
  }
  function align(shape, position, hAlign, vAlign) {
    if (!shape) {
      return null;
    }
    let dx, dy, t, x = position.x, y = position.y, bounds2 = bounds(shape);
    if (hAlign === "left") {
      dx = x - bounds2.x;
    } else if (hAlign === "right") {
      dx = x - bounds2.x - bounds2.width;
    } else if (hAlign === "center") {
      dx = x - bounds2.x - bounds2.width / 2;
    } else {
      dx = 0;
    }
    if (vAlign === "top") {
      dy = y - bounds2.y;
    } else if (vAlign === "bottom") {
      dy = y - bounds2.y - bounds2.height;
    } else if (vAlign === "middle") {
      dy = y - bounds2.y - bounds2.height / 2;
    } else {
      dy = 0;
    }
    t = new Transform().translate(dx, dy);
    return t.transformShape(shape);
  }
  function snap2(shape, distance4, strength, center) {
    if (!shape) {
      return null;
    }
    strength = strength !== void 0 ? strength : 1;
    center = center || Point.ZERO;
    let i, x, y;
    if (shape.commands) {
      const p = new Path([], shape.fill, shape.stroke, shape.strokeWidth);
      let cmd, x1, y1, x2, y2;
      for (i = 0; i < shape.commands.length; i += 1) {
        cmd = shape.commands[i];
        if (cmd.type === MOVETO || cmd.type === LINETO || cmd.type === CURVETO) {
          x = snap(cmd.x + center.x, distance4, strength) - center.x;
          y = snap(cmd.y + center.y, distance4, strength) - center.y;
          if (cmd.type === MOVETO) {
            p.moveTo(x, y);
          } else if (cmd.type === LINETO) {
            p.lineTo(x, y);
          } else if (cmd.type === CURVETO) {
            x1 = snap(cmd.x1 + center.x, distance4, strength) - center.x;
            y1 = snap(cmd.y1 + center.y, distance4, strength) - center.y;
            x2 = snap(cmd.x2 + center.x, distance4, strength) - center.x;
            y2 = snap(cmd.y2 + center.y, distance4, strength) - center.y;
            p.curveTo(x1, y1, x2, y2, x, y);
          }
        } else if (cmd.type === CLOSE) {
          p.close();
        } else {
          throw new Error("Invalid path command " + cmd);
        }
      }
      return p;
    } else if (shape.shapes) {
      const sShapes = [];
      sShapes.length = shape.shapes.length;
      for (i = 0; i < shape.shapes.length; i += 1) {
        sShapes[i] = snap2(shape.shapes[i], distance4, strength, center);
      }
      return new Group(sShapes);
    } else if (Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
      let point2, sPoints = [];
      sPoints.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        point2 = shape[i];
        x = snap(point2.x + center.x, distance4, strength) - center.x;
        y = snap(point2.y + center.y, distance4, strength) - center.y;
        sPoints[i] = new Point(x, y);
      }
      return sPoints;
    } else {
      const s = [];
      s.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        s[i] = snap2(shape[i], distance4, strength, center);
      }
      return s;
    }
  }
  function deletePoints(shape, bounding, invert2) {
    if (!shape) {
      return null;
    }
    if (!bounding) {
      return shape;
    }
    let i, cmd, commands = [];
    let pt, points = [];
    if (shape.commands) {
      let newCurve = true;
      for (i = 0; i < shape.commands.length; i += 1) {
        cmd = _cloneCommand2(shape.commands[i]);
        if (cmd.x === void 0 || invert2 && bounding.contains(cmd.x, cmd.y) || !invert2 && !bounding.contains(cmd.x, cmd.y)) {
          if (newCurve && cmd.type !== MOVETO) {
            cmd.type = MOVETO;
          }
          commands.push(cmd);
          if (cmd.type === MOVETO) {
            newCurve = false;
          } else if (cmd.type === CLOSE) {
            newCurve = true;
          }
        }
      }
      return new Path(commands, shape.fill, shape.stroke, shape.strokeWidth);
    } else if (shape.shapes) {
      const dShapes = [];
      dShapes.length = shape.shapes.length;
      for (i = 0; i < shape.shapes.length; i += 1) {
        dShapes[i] = deletePoints(shape.shapes[i], bounding, invert2);
      }
      return new Group(dShapes);
    } else if (Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
      for (i = 0; i < shape.length; i += 1) {
        pt = shape[i];
        if (invert2 && bounding.contains(pt.x, pt.y) || !invert2 && !bounding.contains(pt.x, pt.y)) {
          points.push(_cloneCommand2(pt));
        }
      }
      return points;
    } else {
      const d = [];
      d.length = shape.length;
      for (i = 0; i < shape.length; i += 1) {
        d[i] = deletePoints(shape[i], bounding, invert2);
      }
      return d;
    }
  }
  function deletePaths(shape, bounding, invert2) {
    if (!shape || shape.commands) {
      return null;
    } else if (shape.shapes) {
      return new Group(deletePaths(shape.shapes, bounding, invert2));
    } else if (Array.isArray(shape)) {
      if (!bounding) {
        return shape;
      }
      let j, s, selected, cmd, subShapes, newShapes = [];
      const shapes = shape;
      for (let i = 0; i < shapes.length; i += 1) {
        s = shapes[i];
        if (s.commands) {
          selected = false;
          for (j = 0; j < s.commands.length; j += 1) {
            cmd = s.commands[j];
            if (cmd.x !== void 0 && bounding.contains(cmd.x, cmd.y)) {
              selected = true;
              break;
            }
          }
          if (!(invert2 && !selected || selected && !invert2)) {
            newShapes.push(s);
          }
        } else if (s.shapes) {
          subShapes = deletePaths(s, bounding, invert2);
          if (subShapes.length !== 0) {
            newShapes.push(subShapes);
          }
        }
      }
      return newShapes;
    }
  }
  function delete_(shape, bounding, scope, invert2) {
    if (shape === null || bounding === null) {
      return null;
    }
    if (scope === "points") {
      return deletePoints(shape, bounding, invert2);
    }
    if (scope === "paths") {
      return deletePaths(shape, bounding, invert2);
    }
    throw new Error("Invalid scope.");
  }
  function pointOnPath(shape, t) {
    if (!shape) {
      return Point.ZERO;
    }
    if (shape.shapes) {
      shape = new Path(combinePaths(shape));
    }
    t = t % 1;
    if (t < 0) {
      t = 1 + t;
    }
    const pt = shape.point(t);
    return new Point(pt.x, pt.y);
  }
  function shapeOnPath(shapes, path, amount, alignment, spacing, margin, baselineOffset) {
    if (!shapes) {
      return [];
    }
    if (path === null) {
      return [];
    }
    if (alignment === "trailing") {
      shapes = shapes.slice();
      shapes.reverse();
    }
    let i, pos, p1, p2, a, t, length2 = path.length() - margin, m = margin / path.length(), c = 0, newShapes = [];
    function putOnPath(shape) {
      if (alignment === "distributed") {
        const p = length2 / (amount * shapes.length - 1);
        pos = c * p / length2;
        pos = m + pos * (1 - 2 * m);
      } else {
        pos = c * spacing % length2 / length2;
        pos = m + pos * (1 - m);
        if (alignment === "trailing") {
          pos = 1 - pos;
        }
      }
      p1 = path.point(pos);
      p2 = path.point(pos + 1e-7);
      a = angle(p1.x, p1.y, p2.x, p2.y);
      if (baselineOffset) {
        p1 = coordinates(p1.x, p1.y, a - 90, baselineOffset);
      }
      t = new Transform();
      t = t.translate(p1.x, p1.y);
      t = t.rotate(a);
      newShapes.push(t.transformShape(shape));
      c += 1;
    }
    for (i = 0; i < amount; i += 1) {
      shapes.forEach(putOnPath);
    }
    return newShapes;
  }
  function _x(shape) {
    if (shape.x !== void 0) {
      return shape.x;
    } else {
      return shape.bounds().x;
    }
  }
  function _y(shape) {
    if (shape.y !== void 0) {
      return shape.y;
    } else {
      return shape.bounds().y;
    }
  }
  function _angleToPoint(point2) {
    return function(shape) {
      if (shape.x !== void 0 && shape.y !== void 0) {
        return angle(shape.x, shape.y, point2.x, point2.y);
      } else {
        const centerPoint2 = shape.bounds().centerPoint();
        return angle(centerPoint2.x, centerPoint2.y, point2.x, point2.y);
      }
    };
  }
  function _distanceToPoint(point2) {
    return function(shape) {
      if (shape.x !== void 0 && shape.y !== void 0) {
        return distance(shape.x, shape.y, point2.x, point2.y);
      } else {
        const centerPoint2 = shape.bounds().centerPoint();
        return distance(centerPoint2.x, centerPoint2.y, point2.x, point2.y);
      }
    };
  }
  function shapeSort(shapes, method, origin) {
    if (!shapes) {
      return null;
    }
    origin = origin || Point.ZERO;
    const methods = {
      x: _x,
      y: _y,
      angle: _angleToPoint(origin),
      distance: _distanceToPoint(origin)
    };
    method = methods[method];
    if (method === void 0) {
      return shapes;
    }
    const newShapes = shapes.slice(0);
    newShapes.sort(function(a, b) {
      const _a = method(a), _b = method(b);
      if (_a < _b) {
        return -1;
      }
      if (_a > _b) {
        return 1;
      }
      return 0;
    });
    return newShapes;
  }
  function group() {
    return new Group(flatten(arguments));
  }
  function ungroup(shape) {
    if (!shape) {
      return [];
    } else if (shape.shapes) {
      let i, s, shapes = [];
      for (i = 0; i < shape.shapes.length; i += 1) {
        s = shape.shapes[i];
        if (s.commands) {
          shapes.push(s);
        } else if (s.shapes) {
          shapes = shapes.concat(ungroup(s));
        }
      }
      return shapes;
    } else if (shape.commands) {
      return [shape];
    } else {
      return [];
    }
  }
  function centerPoint(shape) {
    if (!shape) {
      return Point.ZERO;
    }
    const r = bounds(shape);
    return new Point(r.x + r.width / 2, r.y + r.height / 2);
  }
  function link(shape1, shape2, orientation) {
    if (!shape1 || !shape2) {
      return null;
    }
    const p = new Path();
    const a = shape1.bounds();
    const b = shape2.bounds();
    if (orientation === HORIZONTAL) {
      const hw = (b.x - (a.x + a.width)) / 2;
      p.moveTo(a.x + a.width, a.y);
      p.curveTo(a.x + a.width + hw, a.y, b.x - hw, b.y, b.x, b.y);
      p.lineTo(b.x, b.y + b.height);
      p.curveTo(
        b.x - hw,
        b.y + b.height,
        a.x + a.width + hw,
        a.y + a.height,
        a.x + a.width,
        a.y + a.height
      );
      p.close();
    } else {
      const hh = (b.y - (a.y + a.height)) / 2;
      p.moveTo(a.x, a.y + a.height);
      p.curveTo(a.x, a.y + a.height + hh, b.x, b.y - hh, b.x, b.y);
      p.lineTo(b.x + b.width, b.y);
      p.curveTo(
        b.x + b.width,
        b.y - hh,
        a.x + a.width,
        a.y + a.height + hh,
        a.x + a.width,
        a.y + a.height
      );
      p.close();
    }
    return p;
  }
  var compoundMethods = {
    union: import_js_clipper.default.ClipType.ctUnion,
    difference: import_js_clipper.default.ClipType.ctDifference,
    intersection: import_js_clipper.default.ClipType.ctIntersection,
    xor: import_js_clipper.default.ClipType.ctXor
  };
  function _compoundToPoints(shape) {
    const l1 = [];
    let i, l, s, j, pt;
    for (i = 0; i < shape.length; i += 1) {
      l = [];
      s = shape[i];
      for (j = 0; j < s.length; j += 1) {
        pt = s[j];
        if (pt.type !== CLOSE) {
          l.push({ X: pt.x, Y: pt.y });
        }
      }
      l1.push(l);
    }
    return l1;
  }
  function cmdToPathKit(cmd) {
    if (!window.PathKit) {
      throw new Error("PathKit module not found.");
    }
    const PathKit = window.PathKit;
    if (cmd.type === MOVETO) {
      return [PathKit.MOVE_VERB, cmd.x, cmd.y];
    } else if (cmd.type === LINETO) {
      return [PathKit.LINE_VERB, cmd.x, cmd.y];
    } else if (cmd.type === CURVETO) {
      return [PathKit.CUBIC_VERB, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y];
    } else if (cmd.type === CLOSE) {
      return [PathKit.CLOSE_VERB];
    }
  }
  var compoundOpsPathKit;
  function _compoundPathKit(shape1, shape2, method) {
    if (!window.PathKit) {
      throw new Error("PathKit module not found.");
    }
    const PathKit = window.PathKit;
    if (!compoundOpsPathKit) {
      compoundOpsPathKit = {
        union: PathKit.PathOp.UNION,
        difference: PathKit.PathOp.DIFFERENCE,
        intersection: PathKit.PathOp.INTERSECT,
        xor: PathKit.PathOp.XOR
      };
    }
    const cmds1 = shape1.commands.map(cmdToPathKit);
    const cmds2 = shape2.commands.map(cmdToPathKit);
    const p1 = PathKit.FromCmds(cmds1);
    const p2 = PathKit.FromCmds(cmds2);
    p1.op(p2, compoundOpsPathKit[method]);
    const cmds = p1.toCmds();
    const path = new Path();
    cmds.forEach(function(cmd) {
      if (cmd[0] === PathKit.MOVE_VERB) {
        path.moveTo(cmd[1], cmd[2]);
      } else if (cmd[0] === PathKit.LINE_VERB) {
        path.lineTo(cmd[1], cmd[2]);
      } else if (cmd[0] === PathKit.CUBIC_VERB) {
        path.curveTo(cmd[1], cmd[2], cmd[3], cmd[4], cmd[5], cmd[6]);
      } else if (cmd[0] === PathKit.CLOSE_VERB) {
        path.closePath();
      }
    });
    p1.delete();
    p2.delete();
    return path;
  }
  function compound(shape1, shape2, method) {
    if (!shape1.commands) {
      shape1 = Path.combine(shape1);
    }
    if (!shape2.commands) {
      shape2 = Path.combine(shape2);
    }
    if (typeof window !== "undefined" && window.PathKit && window.PathKit.NewPath) {
      return _compoundPathKit(shape1, shape2, method);
    }
    const contours1 = shape1.resampleByLength(1).contours();
    const contours2 = shape2.resampleByLength(1).contours();
    const subjPaths = _compoundToPoints(contours1);
    const clipPaths = _compoundToPoints(contours2);
    const scale2 = 100;
    import_js_clipper.default.JS.ScaleUpPaths(subjPaths, scale2);
    import_js_clipper.default.JS.ScaleUpPaths(clipPaths, scale2);
    const cpr = new import_js_clipper.default.Clipper();
    cpr.AddPaths(subjPaths, import_js_clipper.default.PolyType.ptSubject, shape1.isClosed());
    cpr.AddPaths(clipPaths, import_js_clipper.default.PolyType.ptClip, shape2.isClosed());
    let solutionPaths = new import_js_clipper.default.Paths();
    cpr.Execute(
      compoundMethods[method],
      solutionPaths,
      import_js_clipper.default.PolyFillType.pftNonZero,
      import_js_clipper.default.PolyFillType.pftNonZero
    );
    solutionPaths = import_js_clipper.default.JS.Clean(solutionPaths, 0.1 * scale2);
    import_js_clipper.default.JS.ScaleDownPaths(solutionPaths, scale2);
    const path = new Path();
    let i, j, s;
    for (i = 0; i < solutionPaths.length; i += 1) {
      s = solutionPaths[i];
      for (j = 0; j < s.length; j += 1) {
        if (j === 0) {
          path.moveTo(s[j].X, s[j].Y);
        } else {
          path.lineTo(s[j].X, s[j].Y);
        }
      }
      if (s[0].X !== s[s.length - 1].X || s[0].Y !== s[s.length - 1].Y) {
        path.closePath();
      }
    }
    return path;
  }
  function constructPath(points, closed) {
    const segments = [];
    let d = {};
    let i = 0;
    points.forEach((pt) => {
      if (i === 0) {
        d._in = pt;
      } else if (i === 1) {
        d._pt = pt;
      } else if (i === 2) {
        d._out = pt;
      }
      i += 1;
      if (i === 3) {
        segments.push(d);
        i = 0;
        d = {};
      }
    });
    const commands = [];
    let length2 = segments.length;
    if (closed) {
      length2 += 1;
    }
    for (i = 0; i < length2; i += 1) {
      const seg = segments[i % segments.length];
      if (i === 0) {
        commands.push({ cmd: "moveto", pt: seg._pt });
      } else {
        d = {
          cmd: "curveto",
          pt: seg._pt,
          ctrl1: segments[i - 1]._out,
          ctrl2: seg._in
        };
        commands.push(d);
      }
    }
    const path = new Path();
    commands.forEach((el) => {
      if (el.cmd === "moveto") {
        path.moveTo(el.pt.x, el.pt.y);
      } else if (el.cmd === "curveto") {
        path.curveTo(
          el.ctrl1.x,
          el.ctrl1.y,
          el.ctrl2.x,
          el.ctrl2.y,
          el.pt.x,
          el.pt.y
        );
      }
    });
    return path;
  }
  function roundedSegments(shape, d) {
    if (!d || d.length === 0) {
      return shape;
    }
    const points = toPoints(shape);
    const newPoints = [];
    for (let i = 0; i < points.length; i += 1) {
      const pt = points[i];
      let prev;
      if (i === 0) {
        prev = points[points.length - 1];
      } else {
        prev = points[i - 1];
      }
      const next = points[(i + 1) % points.length];
      const a = degrees(Math.atan2(next.y - prev.y, next.x - prev.x));
      const c1 = coordinates(pt.x, pt.y, a, -d[i % d.length]);
      const c2 = coordinates(pt.x, pt.y, a, d[i % d.length]);
      newPoints.push(c1);
      newPoints.push(pt);
      newPoints.push(c2);
    }
    const path = constructPath(newPoints, shape.isClosed());
    path.fill = shape.fill;
    path.stroke = shape.stroke;
    path.strokeWidth = shape.strokeWidth;
    return path;
  }

  // src/libraries/vg/commands/shapes.js
  function roundedRect(cx, cy, width, height, rx, ry) {
    const p = new Path();
    p.addRoundedRect(cx, cy, width, height, rx, ry);
    return p;
  }
  function quad(pt1, pt2, pt3, pt4) {
    const args = arguments;
    const p = new Path();
    if (args.length === 8) {
      Path.prototype.addQuad.apply(p, args);
    } else {
      pt1 = Point.read(pt1);
      pt2 = Point.read(pt2);
      pt3 = Point.read(pt3);
      pt4 = Point.read(pt4);
      p.addQuad(pt1.x, pt1.y, pt2.x, pt2.y, pt3.x, pt3.y, pt4.x, pt4.y);
    }
    return p;
  }
  function rect(position, width, height, roundness) {
    const args = arguments;
    if (args.length === 3) {
      position = Point.read(position);
    } else if (args.length === 4) {
      if (typeof args[0] === "number" && typeof args[1] === "number") {
        position = Point.read(args[0], args[1]);
        width = args[2];
        height = args[3];
        roundness = null;
      } else {
        position = Point.read(position);
        roundness = Point.read(roundness);
      }
    } else if (args.length === 5 || args.length === 6) {
      position = Point.read(args[0], args[1]);
      width = args[2];
      height = args[3];
      if (args.length === 5 && typeof args[4] === "number") {
        roundness = Point.read(args[4], args[4]);
      } else {
        roundness = Point.read(args[4], args[5]);
      }
    }
    if (!roundness || roundness.x === 0 && roundness.y === 0) {
      const p = new Path();
      p.addRect(position.x - width / 2, position.y - height / 2, width, height);
      return p;
    } else {
      return roundedRect(
        position.x - width / 2,
        position.y - height / 2,
        width,
        height,
        roundness.x,
        roundness.y
      );
    }
  }
  function ellipse(position, width, height) {
    const args = arguments;
    if (args.length === 4) {
      position = Point.read(args[0], args[1]);
      width = args[2];
      height = args[3];
    } else {
      position = Point.read(position);
    }
    const p = new Path();
    p.addEllipse(position.x - width / 2, position.y - height / 2, width, height);
    return p;
  }
  function line(point1, point2) {
    const args = arguments;
    if (args.length === 4) {
      point1 = Point.read(args[0], args[1]);
      point2 = Point.read(args[2], args[3]);
    } else {
      point1 = Point.read(point1);
      point2 = Point.read(point2);
    }
    const line2 = new Path();
    line2.addLine(point1.x, point1.y, point2.x, point2.y);
    line2.fill = null;
    line2.stroke = "black";
    return line2;
  }
  function lineAngle(point2, angle3, distance4) {
    const args = arguments;
    if (args.length === 4) {
      point2 = Point.read(args[0], args[1]);
      distance4 = args[2];
      angle3 = args[3];
    } else {
      point2 = Point.read(point2);
    }
    const point22 = coordinates(point2.x, point2.y, angle3, distance4);
    return line(point2, point22);
  }
  function arc(position, width, height, startAngle, degrees3, arcType) {
    const args = arguments;
    if (args.length === 7) {
      position = Point.read(args[0], args[1]);
      width = args[2];
      height = args[3];
      startAngle = args[4];
      degrees3 = args[5];
      arcType = args[6];
    } else {
      position = Point.read(position);
    }
    const p = new Path();
    p.addArc(position.x, position.y, width, height, startAngle, degrees3, arcType);
    return p;
  }
  function curve(pt1, pt2, t, distance4) {
    const args = arguments;
    if (args.length === 6) {
      pt1 = Point.read(args[0], args[1]);
      pt2 = Point.read(args[2], args[3]);
      t = args[4];
      distance4 = args[5];
    } else {
      pt1 = Point.read(pt1);
      pt2 = Point.read(pt2);
    }
    const cx = pt1.x + t * (pt2.x - pt1.x), cy = pt1.y + t * (pt2.y - pt1.y), a = angle(pt1.x, pt1.y, pt2.x, pt2.y) + 90, q = coordinates(cx, cy, a, distance4), qx = q.x, qy = q.y, c1x = pt1.x + 2 / 3 * (qx - pt1.x), c1y = pt1.y + 2 / 3 * (qy - pt1.y), c2x = pt2.x + 2 / 3 * (qx - pt2.x), c2y = pt2.y + 2 / 3 * (qy - pt2.y);
    const p = new Path();
    p.moveTo(pt1.x, pt1.y);
    p.curveTo(c1x, c1y, c2x, c2y, pt2.x, pt2.y);
    p.fill = null;
    p.stroke = Color.BLACK;
    return p;
  }
  function polygon(position, radius, sides, align3) {
    const args = arguments;
    if (args.length === 5 || args.length === 4 && typeof args[0] === "number" && typeof args[1] === "number") {
      position = Point.read(args[0], args[1]);
      radius = args[2];
      sides = args[3];
      align3 = args.length === 5 ? args[4] : true;
    } else {
      position = Point.read(position);
      if (args.length === 3) {
        align3 = true;
      }
    }
    sides = Math.max(sides, 3);
    let c0, c1, i, c, x = position.x, y = position.y, r = radius, a = 360 / sides, da = 0;
    if (align3 === true) {
      c0 = coordinates(x, y, 0, r);
      c1 = coordinates(x, y, a, r);
      da = -angle(c1.x, c1.y, c0.x, c0.y);
    }
    const p = new Path();
    for (i = 0; i < sides; i += 1) {
      c = coordinates(x, y, a * i + da, r);
      if (i === 0) {
        p.moveTo(c.x, c.y);
      } else {
        p.lineTo(c.x, c.y);
      }
    }
    p.close();
    return p;
  }
  function star(position, points, outer, inner) {
    const args = arguments;
    if (args.length === 5 || args.length === 4 && typeof args[0] === "number" && typeof args[1] === "number") {
      position = Point.read(args[0], args[1]);
      points = args[2];
      outer = args[3];
      inner = args[4];
    } else {
      position = Point.read(position);
    }
    if (!inner) {
      inner = outer;
    }
    let i, angle3, radius, x, y;
    const p = new Path();
    p.moveTo(position.x, position.y + outer / 2);
    for (i = 1; i < points * 2; i += 1) {
      angle3 = i * Math.PI / points;
      radius = i % 2 === 1 ? inner / 2 : outer / 2;
      x = position.x + radius * Math.sin(angle3);
      y = position.y + radius * Math.cos(angle3);
      p.lineTo(x, y);
    }
    p.close();
    return p;
  }
  function nonEmpty(s) {
    return s !== "";
  }
  function stripCommas(c) {
    return c.replace(/,/g, " ");
  }
  function freehand(pathString) {
    let i, j, x, y, values, contours = [], elems = pathString.split("M");
    for (i = 0; i < elems.length; i += 1) {
      if (nonEmpty(elems[i])) {
        contours.push(stripCommas(elems[i]));
      }
    }
    const p = new Path();
    for (j = 0; j < contours.length; j += 1) {
      values = [];
      elems = contours[j].split(" ");
      for (i = 0; i < elems.length; i += 1) {
        if (nonEmpty(elems[i])) {
          values.push(elems[i]);
        }
      }
      for (i = 0; i < values.length; i += 2) {
        if (values[i + 1] !== void 0) {
          x = parseFloat(values[i]);
          y = parseFloat(values[i + 1]);
          if (i === 0) {
            p.moveTo(x, y);
          } else {
            p.lineTo(x, y);
          }
        }
      }
    }
    p.fill = null;
    p.stroke = Color.BLACK;
    return p;
  }
  function grid(columns, rows, columnWidth, rowHeight, position) {
    let gridWidth, left, gridHeight, top, rowIndex, colIndex, x, y, i, points = [];
    points.length = columns * rows;
    position = position !== void 0 ? position : Point.ZERO;
    if (columns > 1) {
      gridWidth = columnWidth * (columns - 1);
      left = position.x - gridWidth / 2;
    } else {
      left = position.x;
    }
    if (rows > 1) {
      gridHeight = rowHeight * (rows - 1);
      top = position.y - gridHeight / 2;
    } else {
      top = position.y;
    }
    i = 0;
    for (rowIndex = 0; rowIndex < rows; rowIndex += 1) {
      for (colIndex = 0; colIndex < columns; colIndex += 1) {
        x = left + colIndex * columnWidth;
        y = top + rowIndex * rowHeight;
        points[i] = new Point(x, y);
        i += 1;
      }
    }
    return points;
  }
  function text() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(null);
    return new (Function.prototype.bind.apply(Text, args))();
  }
  function demoRect() {
    return new rect({ x: 0, y: 0 }, 100, 100, { x: 0, y: 0 });
  }
  function demoEllipse() {
    return new ellipse({ x: 0, y: 0 }, 100, 100);
  }

  // src/libraries/vg/index.js
  Object.assign(Point.prototype, transformable_default);
  Object.assign(Path.prototype, transformable_default);
  Object.assign(Group.prototype, transformable_default);
  Object.assign(Text.prototype, transformable_default);

  // src/libraries/string.js
  var string_exports = {};
  __export(string_exports, {
    characterAt: () => characterAt,
    concatenate: () => concatenate,
    endsWith: () => endsWith,
    reverse: () => reverse,
    startsWith: () => startsWith,
    string: () => string,
    stringContains: () => stringContains,
    stringEquals: () => stringEquals,
    stringLength: () => stringLength,
    stringReplace: () => stringReplace,
    stringSplit: () => stringSplit,
    stringTrim: () => stringTrim,
    substring: () => substring,
    toCharacterCodes: () => toCharacterCodes,
    toCharacters: () => toCharacters,
    toLowerCase: () => toLowerCase,
    toTitleCase: () => toTitleCase,
    toUpperCase: () => toUpperCase,
    toWords: () => toWords,
    wordCount: () => wordCount
  });
  function characterAt(s, index2) {
    if (!s || s.length === 0) {
      return "";
    }
    s = String(s);
    if (index2 < 0) {
      index2 = s.length + index2;
    }
    return s.charAt(index2);
  }
  function concatenate() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
      let s = arguments[i];
      s = s !== void 0 ? String(s) : "";
      result += s;
    }
    return result;
  }
  function endsWith(s, value) {
    if (!s || !value) {
      return false;
    }
    s = String(s);
    return s.indexOf(value, s.length - value.length) !== -1;
  }
  function reverse(l) {
    return l.slice().reverse();
  }
  function startsWith(s, value) {
    if (!s || !value) {
      return false;
    }
    s = String(s);
    return s.indexOf(value) === 0;
  }
  var string = String;
  function stringContains(s, sub) {
    if (!s || !sub) {
      return false;
    }
    s = String(s);
    return s.indexOf(sub) !== -1;
  }
  function stringEquals(string1, string2, ignoreCase) {
    string1 = String(string1);
    string2 = String(string2);
    if (!string1 || !string2) {
      return false;
    }
    if (ignoreCase) {
      return string1.toLowerCase() === string2.toLowerCase();
    } else {
      return string1 === string2;
    }
  }
  function stringLength(s) {
    if (!s) {
      return 0;
    }
    s = String(s);
    return s.length;
  }
  function stringReplace(s, old, new_) {
    s = String(s);
    return s.replace(new RegExp(old, "g"), new_);
  }
  function stringSplit(s, separator) {
    if (!s) {
      return [];
    }
    if (!separator || separator.length === 0) {
      separator = "";
    }
    s = String(s);
    return s.split(separator);
  }
  function stringTrim(s) {
    if (!s) {
      return null;
    }
    s = String(s);
    return s.trim();
  }
  function substring(s, start, end, endOffset) {
    if (!s) {
      return "";
    }
    if (end < start) {
      return "";
    }
    s = String(s);
    if (start < 0 && end < 0) {
      start = s.length + start;
      end = s.length + end;
    }
    if (end !== void 0) {
      if (endOffset) {
        end += 1;
      }
    }
    return s.substring(start, end);
  }
  function toCharacterCodes(s) {
    if (!s) {
      return [];
    }
    const codes = [];
    codes.length = s.length;
    for (let i = 0; i < s.length; i += 1) {
      codes[i] = s.charCodeAt(i);
    }
    return codes;
  }
  function toCharacters(s) {
    if (!s) {
      return [];
    }
    s = String(s);
    return s.split("");
  }
  function toLowerCase(s) {
    s = String(s);
    return s.toLowerCase();
  }
  function toTitleCase(s) {
    let c, result = "";
    s = String(s);
    for (let i = 0; i < s.length; i += 1) {
      c = s[i];
      if (result.length === 0 || result[result.length - 1] === " ") {
        result += c.toUpperCase();
      } else {
        result += c;
      }
    }
    return result;
  }
  function toUpperCase(s) {
    s = String(s);
    return s.toUpperCase();
  }
  function wordCount(s) {
    if (!s) {
      return 0;
    }
    s = String(s);
    const split = s.split(new RegExp("\\w+"));
    return split.length - 1;
  }
  function toWords(s) {
    const l = s.split(/\W+/);
    if (l[l.length - 1] === "") {
      l.pop();
    }
    return l;
  }

  // src/libraries/list.js
  var list_exports = {};
  __export(list_exports, {
    combine: () => combine,
    contains: () => contains,
    count: () => count,
    cull: () => cull,
    cycle: () => cycle,
    distinct: () => distinct,
    equals: () => equals,
    first: () => first,
    get: () => get,
    interleave: () => interleave,
    last: () => last,
    pick: () => pick,
    randomSample: () => randomSample,
    repeat: () => repeat,
    rest: () => rest,
    reverse: () => reverse2,
    second: () => second,
    shift: () => shift,
    shuffle: () => shuffle,
    slice: () => slice,
    sort: () => sort,
    switch_: () => switch_,
    takeEvery: () => takeEvery,
    zipMap: () => zipMap
  });

  // src/libraries/deepequal.js
  function isBuffer() {
    return false;
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
  }
  function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
  }
  function isNullOrUndefined(arg) {
    return arg === null || arg === void 0;
  }
  var util = {
    isObject,
    isRegExp,
    isDate,
    isNullOrUndefined,
    isBuffer
  };
  var pSlice = Array.prototype.slice;
  var isArguments;
  var objEquiv;
  function deepEqual(actual, expected) {
    if (actual === expected) {
      return true;
    } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
      if (actual.length !== expected.length) {
        return false;
      }
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          return false;
        }
      }
      return true;
    } else if (util.isDate(actual) && util.isDate(expected)) {
      return actual.getTime() === expected.getTime();
    } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
      return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
    } else if (!util.isObject(actual) && !util.isObject(expected)) {
      return actual == expected;
    } else {
      return objEquiv(actual, expected);
    }
  }
  isArguments = function(object) {
    return Object.prototype.toString.call(object) === "[object Arguments]";
  };
  objEquiv = function(a, b) {
    if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b)) {
      return false;
    }
    if (a.prototype !== b.prototype) {
      return false;
    }
    const aIsArgs = isArguments(a), bIsArgs = isArguments(b);
    if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) {
      return false;
    }
    if (aIsArgs) {
      a = pSlice.call(a);
      b = pSlice.call(b);
      return deepEqual(a, b);
    }
    let ka, kb, key, i;
    try {
      ka = Object.keys(a);
      kb = Object.keys(b);
    } catch {
      return false;
    }
    if (ka.length !== kb.length) {
      return false;
    }
    ka.sort();
    kb.sort();
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] !== kb[i]) {
        return false;
      }
    }
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  };

  // src/libraries/list.js
  function combine() {
    let i, l, result = [];
    for (i = 0; i < arguments.length; i++) {
      l = arguments[i];
      if (l) {
        result = result.concat(l);
      }
    }
    return result;
  }
  function contains(l, value) {
    if (!l) {
      return false;
    }
    for (let i = 0; i < l.length; i += 1) {
      if (deepEqual.deepEqual(l[i], value)) {
        return true;
      }
    }
    return false;
  }
  function cycle(l, length2) {
    if (!l || length2 <= 0) {
      return [];
    }
    const newList = [];
    const ll = l.length;
    for (let i = 0; i < length2; i += 1) {
      newList.push(l[i % ll]);
    }
    return newList;
  }
  function equals(o1, o2) {
    return deepEqual.deepEqual(o1, o2);
  }
  function count(l) {
    if (l && l.length) {
      return l.length;
    } else {
      return 0;
    }
  }
  function cull(l, booleans) {
    if (!l) {
      return [];
    }
    if (!booleans) {
      return l;
    }
    let i, keep, results = [];
    for (i = 0; i < l.length; i++) {
      keep = booleans[i % booleans.length];
      if (keep) {
        results.push(l[i]);
      }
    }
    return results;
  }
  function distinct(l) {
    if (!l) {
      return [];
    }
    let i, length2, value, result = [], seen = [];
    for (i = 0, length2 = l.length; i < length2; i += 1) {
      value = l[i];
      if (!contains(seen, value)) {
        seen.push(value);
        result.push(l[i]);
      }
    }
    return result;
  }
  function first(l) {
    if (!l || l.length === 0) {
      return null;
    }
    return l[0];
  }
  function get(l, i) {
    if (!l || l.length === 0) {
      return null;
    }
    return l[i];
  }
  function interleave() {
    const args = Array.from(arguments).filter((l) => !!l);
    if (args.length === 0) {
      return [];
    }
    const results = [];
    let elIndex = 0;
    while (true) {
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.length > elIndex) {
          results.push(arg[elIndex]);
        } else {
          return results;
        }
      }
      elIndex += 1;
    }
  }
  function last(l) {
    if (!l || l.length === 0) {
      return null;
    }
    return l[l.length - 1];
  }
  function pick(l, amount, seed) {
    if (!l || l.length === 0 || amount <= 0) {
      return [];
    }
    if (!seed && seed !== 0) {
      seed = Math.random();
    }
    const rand = generator(seed || 0);
    const results = [];
    for (let i = 0; i < amount; i += 1) {
      results.push(l[Math.floor(rand(0, l.length))]);
    }
    return results;
  }
  function randomSample(l, amount, seed) {
    if (!l || l.length === 0 || amount <= 0) {
      return [];
    }
    if (!seed && seed !== 0) {
      seed = Math.random();
    }
    const shuffledlist = shuffle(l, seed);
    if (!amount) {
      return shuffledlist;
    }
    return slice(shuffledlist, 0, amount);
  }
  function repeat(l, amount, perItem) {
    if (!l) {
      return [];
    }
    if (!Array.isArray(l)) {
      l = [l];
    }
    if (amount <= 0) {
      return [];
    }
    let i, j, v, newList = [];
    if (!perItem) {
      for (i = 0; i < amount; i += 1) {
        newList.push.apply(newList, l);
      }
    } else {
      for (i = 0; i < l.length; i += 1) {
        v = l[i];
        for (j = 0; j < amount; j += 1) {
          newList.push(v);
        }
      }
    }
    return newList;
  }
  function rest(l) {
    if (!l) {
      return [];
    }
    return l.slice(1);
  }
  function reverse2(l) {
    if (!l) {
      return [];
    }
    return l.slice().reverse();
  }
  function second(l) {
    if (!l || l.length < 2) {
      return null;
    }
    return l[1];
  }
  function shift(l, amount) {
    if (!l) {
      return [];
    }
    amount = amount % l.length;
    const head = l.slice(0, amount), result = l.slice(amount);
    result.push.apply(result, head);
    return result;
  }
  function shuffle(l, seed) {
    let i, j, tmp, r;
    if (!seed && seed !== 0) {
      seed = Math.random();
    }
    r = generator(seed || 0);
    l = l.slice();
    for (i = l.length - 1; i > 0; i--) {
      j = Math.floor(r(0, i + 1));
      tmp = l[i];
      l[i] = l[j];
      l[j] = tmp;
    }
    return l;
  }
  function slice(l, start, size, invert2) {
    if (!l) {
      return [];
    }
    let firstList, secondList;
    if (!invert2) {
      return l.slice(start, start + size);
    } else {
      firstList = l.slice(0, start);
      secondList = l.slice(start + size);
      firstList.push.apply(firstList, secondList);
      return firstList;
    }
  }
  function sort(l, key) {
    if (!l) {
      return [];
    }
    if (key) {
      if (typeof key === "string") {
        return l.slice().sort(function(a, b) {
          if (a[key] > b[key]) {
            return 1;
          } else if (a[key] === b[key]) {
            return 0;
          } else {
            return -1;
          }
        });
      } else if (typeof key === "function") {
        return l.slice().sort(key);
      }
    }
    if (l && l[0] !== void 0 && l[0] !== null && typeof l[0] === "number") {
      return l.slice().sort(function(a, b) {
        return a - b;
      });
    }
    return l.slice().sort();
  }
  function switch_(index2) {
    const nLists = arguments.length - 1;
    index2 = index2 % nLists;
    if (index2 < 0) {
      index2 += nLists;
    }
    return arguments[index2 + 1];
  }
  function takeEvery(l, n, offset) {
    if (!l) {
      return [];
    }
    let i, results = [];
    offset = offset || 0;
    for (i = 0; i < l.length; i += 1) {
      if (i % n === offset) {
        results.push(l[i]);
      }
    }
    return results;
  }
  function zipMap(keys2, vals) {
    let i, k, v, m = {}, minLength = Math.min(keys2.length, vals.length);
    for (i = 0; i < minLength; i += 1) {
      k = keys2[i];
      v = vals[i];
      m[k] = v;
    }
    return m;
  }

  // src/libraries/data.js
  var data_exports = {};
  __export(data_exports, {
    convert: () => convert,
    dataScale: () => dataScale,
    filterData: () => filterData,
    groupBy: () => groupBy,
    keys: () => keys,
    lookup: () => lookup,
    ticks: () => ticks
  });
  function convert(v, inMin, inMax, outMin, outMax) {
    const argLength = arguments.length;
    if (argLength === 2) {
      const d = arguments[1];
      inMin = d.inMin;
      inMax = d.inMax;
      outMin = d.outMin;
      outMax = d.outMax;
    } else if (argLength === 3) {
      inMin = arguments[1][0];
      inMax = arguments[1][1];
      outMin = arguments[2][0];
      outMax = arguments[2][1];
    }
    try {
      v = (v - inMin) / (inMax - inMin);
    } catch {
      v = inMin;
    }
    return outMin + v * (outMax - outMin);
  }
  function filterData(data, key, op, value) {
    if (!data) {
      return [];
    }
    let i, l, row, obj;
    if (value === null || value === void 0) {
      return data;
    }
    const results = [];
    if (op === "==") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj == value) {
          results.push(row);
        }
      }
    } else if (op === "!=") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj != value) {
          results.push(row);
        }
      }
    } else if (op === ">") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj > value) {
          results.push(row);
        }
      }
    } else if (op === ">=") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj >= value) {
          results.push(row);
        }
      }
    } else if (op === "<") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj < value) {
          results.push(row);
        }
      }
    } else if (op === "<=") {
      for (i = 0, l = data.length; i < l; i++) {
        row = data[i];
        obj = row[key];
        if (obj <= value) {
          results.push(row);
        }
      }
    } else {
      throw new Error("Invalid op " + op);
    }
    return results;
  }
  function groupBy(data, key) {
    const iteratee = typeof key === "function" ? key : (row) => row[key];
    const groups = /* @__PURE__ */ new Map();
    for (const item of data) {
      const k = iteratee(item);
      const group2 = groups.get(k);
      if (group2) {
        group2.push(item);
      } else {
        groups.set(k, [item]);
      }
    }
    return Array.from(groups.values());
  }
  function keys(data) {
    let allKeys = [];
    for (let i = 0; i < data.length; i++) {
      allKeys = allKeys.concat(Object.keys(data[i]));
    }
    return distinct(allKeys);
  }
  function lookup(table, key) {
    let obj, v;
    obj = table;
    v = obj[key];
    if (v !== void 0) {
      if (typeof v === "function") {
        v = v.call(obj);
      }
      return v;
    }
    let token, tokens = key.split(".");
    for (let i = 0; i < tokens.length; i += 1) {
      token = tokens[i];
      if (!obj) {
        continue;
      }
      if (typeof obj[token] === "function") {
        v = obj[token];
        obj = v.call(obj);
      } else {
        obj = obj[token];
      }
    }
    return obj;
  }
  function dataScale(domain, outMin, outMax) {
    return { domain, outMin, outMax };
  }
  function ticks(min2, max2, n) {
    n = n !== void 0 ? n : 10;
    let span = max2 - min2, step = Math.pow(10, Math.floor(Math.log(span / n) / Math.LN10)), err = n / span * step, ticks2 = [], i;
    if (err <= 0.15) {
      step *= 10;
    } else if (err <= 0.35) {
      step *= 5;
    } else if (err <= 0.75) {
      step *= 2;
    }
    min2 = Math.ceil(min2 / step) * step;
    max2 = Math.floor(max2 / step) * step + step * 0.5;
    for (i = min2; i < max2; i += step) {
      ticks2.push(i);
    }
    return ticks2;
  }

  // src/libraries/graphics.js
  var graphics_exports = {};
  __export(graphics_exports, {
    BOTH: () => BOTH,
    BOTTOM: () => BOTTOM,
    CENTER: () => CENTER,
    HORIZONTAL: () => HORIZONTAL2,
    LEFT: () => LEFT,
    MIDDLE: () => MIDDLE,
    RIGHT: () => RIGHT,
    TOP: () => TOP,
    VERTICAL: () => VERTICAL2,
    align: () => align2,
    angle: () => angle2,
    colorize: () => colorize2,
    coordinates: () => coordinates2,
    copy: () => copy2,
    desaturate: () => desaturate,
    distance: () => distance3,
    fit: () => fit2,
    fitTo: () => fitTo2,
    flip: () => flip,
    grayColor: () => grayColor,
    hexColor: () => hexColor,
    hslAdjust: () => hslAdjust,
    hslColor: () => hslColor,
    invert: () => invert,
    rgbAdjust: () => rgbAdjust,
    rgbColor: () => rgbColor,
    stack: () => stack
  });

  // node_modules/async/dist/async.mjs
  function apply(fn, ...args) {
    return (...callArgs) => fn(...args, ...callArgs);
  }
  function initialParams(fn) {
    return function(...args) {
      var callback = args.pop();
      return fn.call(this, args, callback);
    };
  }
  var hasQueueMicrotask = typeof queueMicrotask === "function" && queueMicrotask;
  var hasSetImmediate = typeof setImmediate === "function" && setImmediate;
  var hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
  function fallback(fn) {
    setTimeout(fn, 0);
  }
  function wrap(defer) {
    return (fn, ...args) => defer(() => fn(...args));
  }
  var _defer$1;
  if (hasQueueMicrotask) {
    _defer$1 = queueMicrotask;
  } else if (hasSetImmediate) {
    _defer$1 = setImmediate;
  } else if (hasNextTick) {
    _defer$1 = process.nextTick;
  } else {
    _defer$1 = fallback;
  }
  var setImmediate$1 = wrap(_defer$1);
  function asyncify(func) {
    if (isAsync(func)) {
      return function(...args) {
        const callback = args.pop();
        const promise = func.apply(this, args);
        return handlePromise(promise, callback);
      };
    }
    return initialParams(function(args, callback) {
      var result;
      try {
        result = func.apply(this, args);
      } catch (e2) {
        return callback(e2);
      }
      if (result && typeof result.then === "function") {
        return handlePromise(result, callback);
      } else {
        callback(null, result);
      }
    });
  }
  function handlePromise(promise, callback) {
    return promise.then((value) => {
      invokeCallback(callback, null, value);
    }, (err) => {
      invokeCallback(callback, err && (err instanceof Error || err.message) ? err : new Error(err));
    });
  }
  function invokeCallback(callback, error, value) {
    try {
      callback(error, value);
    } catch (err) {
      setImmediate$1((e2) => {
        throw e2;
      }, err);
    }
  }
  function isAsync(fn) {
    return fn[Symbol.toStringTag] === "AsyncFunction";
  }
  function isAsyncGenerator(fn) {
    return fn[Symbol.toStringTag] === "AsyncGenerator";
  }
  function isAsyncIterable(obj) {
    return typeof obj[Symbol.asyncIterator] === "function";
  }
  function wrapAsync(asyncFn) {
    if (typeof asyncFn !== "function")
      throw new Error("expected a function");
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
  }
  function awaitify(asyncFn, arity) {
    if (!arity)
      arity = asyncFn.length;
    if (!arity)
      throw new Error("arity is undefined");
    function awaitable(...args) {
      if (typeof args[arity - 1] === "function") {
        return asyncFn.apply(this, args);
      }
      return new Promise((resolve, reject2) => {
        args[arity - 1] = (err, ...cbArgs) => {
          if (err)
            return reject2(err);
          resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
        };
        asyncFn.apply(this, args);
      });
    }
    return awaitable;
  }
  function applyEach$1(eachfn) {
    return function applyEach2(fns, ...callArgs) {
      const go = awaitify(function(callback) {
        var that = this;
        return eachfn(fns, (fn, cb) => {
          wrapAsync(fn).apply(that, callArgs.concat(cb));
        }, callback);
      });
      return go;
    };
  }
  function _asyncMap(eachfn, arr, iteratee, callback) {
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);
    return eachfn(arr, (value, _, iterCb) => {
      var index2 = counter++;
      _iteratee(value, (err, v) => {
        results[index2] = v;
        iterCb(err);
      });
    }, (err) => {
      callback(err, results);
    });
  }
  function isArrayLike(value) {
    return value && typeof value.length === "number" && value.length >= 0 && value.length % 1 === 0;
  }
  var breakLoop = {};
  function once(fn) {
    function wrapper(...args) {
      if (fn === null)
        return;
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    }
    Object.assign(wrapper, fn);
    return wrapper;
  }
  function getIterator(coll) {
    return coll[Symbol.iterator] && coll[Symbol.iterator]();
  }
  function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
      return ++i < len ? { value: coll[i], key: i } : null;
    };
  }
  function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
      var item = iterator.next();
      if (item.done)
        return null;
      i++;
      return { value: item.value, key: i };
    };
  }
  function createObjectIterator(obj) {
    var okeys = obj ? Object.keys(obj) : [];
    var i = -1;
    var len = okeys.length;
    return function next() {
      var key = okeys[++i];
      if (key === "__proto__") {
        return next();
      }
      return i < len ? { value: obj[key], key } : null;
    };
  }
  function createIterator(coll) {
    if (isArrayLike(coll)) {
      return createArrayIterator(coll);
    }
    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
  }
  function onlyOnce(fn) {
    return function(...args) {
      if (fn === null)
        throw new Error("Callback was already called.");
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    };
  }
  function asyncEachOfLimit(generator2, limit, iteratee, callback) {
    let done = false;
    let canceled = false;
    let awaiting = false;
    let running = 0;
    let idx = 0;
    function replenish() {
      if (running >= limit || awaiting || done)
        return;
      awaiting = true;
      generator2.next().then(({ value, done: iterDone }) => {
        if (canceled || done)
          return;
        awaiting = false;
        if (iterDone) {
          done = true;
          if (running <= 0) {
            callback(null);
          }
          return;
        }
        running++;
        iteratee(value, idx, iterateeCallback);
        idx++;
        replenish();
      }).catch(handleError);
    }
    function iterateeCallback(err, result) {
      running -= 1;
      if (canceled)
        return;
      if (err)
        return handleError(err);
      if (err === false) {
        done = true;
        canceled = true;
        return;
      }
      if (result === breakLoop || done && running <= 0) {
        done = true;
        return callback(null);
      }
      replenish();
    }
    function handleError(err) {
      if (canceled)
        return;
      awaiting = false;
      done = true;
      callback(err);
    }
    replenish();
  }
  var eachOfLimit$2 = (limit) => {
    return (obj, iteratee, callback) => {
      callback = once(callback);
      if (limit <= 0) {
        throw new RangeError("concurrency limit cannot be less than 1");
      }
      if (!obj) {
        return callback(null);
      }
      if (isAsyncGenerator(obj)) {
        return asyncEachOfLimit(obj, limit, iteratee, callback);
      }
      if (isAsyncIterable(obj)) {
        return asyncEachOfLimit(obj[Symbol.asyncIterator](), limit, iteratee, callback);
      }
      var nextElem = createIterator(obj);
      var done = false;
      var canceled = false;
      var running = 0;
      var looping = false;
      function iterateeCallback(err, value) {
        if (canceled)
          return;
        running -= 1;
        if (err) {
          done = true;
          callback(err);
        } else if (err === false) {
          done = true;
          canceled = true;
        } else if (value === breakLoop || done && running <= 0) {
          done = true;
          return callback(null);
        } else if (!looping) {
          replenish();
        }
      }
      function replenish() {
        looping = true;
        while (running < limit && !done) {
          var elem = nextElem();
          if (elem === null) {
            done = true;
            if (running <= 0) {
              callback(null);
            }
            return;
          }
          running += 1;
          iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
        }
        looping = false;
      }
      replenish();
    };
  };
  function eachOfLimit(coll, limit, iteratee, callback) {
    return eachOfLimit$2(limit)(coll, wrapAsync(iteratee), callback);
  }
  var eachOfLimit$1 = awaitify(eachOfLimit, 4);
  function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback);
    var index2 = 0, completed = 0, { length: length2 } = coll, canceled = false;
    if (length2 === 0) {
      callback(null);
    }
    function iteratorCallback(err, value) {
      if (err === false) {
        canceled = true;
      }
      if (canceled === true)
        return;
      if (err) {
        callback(err);
      } else if (++completed === length2 || value === breakLoop) {
        callback(null);
      }
    }
    for (; index2 < length2; index2++) {
      iteratee(coll[index2], index2, onlyOnce(iteratorCallback));
    }
  }
  function eachOfGeneric(coll, iteratee, callback) {
    return eachOfLimit$1(coll, Infinity, iteratee, callback);
  }
  function eachOf(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    return eachOfImplementation(coll, wrapAsync(iteratee), callback);
  }
  var eachOf$1 = awaitify(eachOf, 3);
  function map(coll, iteratee, callback) {
    return _asyncMap(eachOf$1, coll, iteratee, callback);
  }
  var map$1 = awaitify(map, 3);
  var applyEach = applyEach$1(map$1);
  function eachOfSeries(coll, iteratee, callback) {
    return eachOfLimit$1(coll, 1, iteratee, callback);
  }
  var eachOfSeries$1 = awaitify(eachOfSeries, 3);
  function mapSeries(coll, iteratee, callback) {
    return _asyncMap(eachOfSeries$1, coll, iteratee, callback);
  }
  var mapSeries$1 = awaitify(mapSeries, 3);
  var applyEachSeries = applyEach$1(mapSeries$1);
  var PROMISE_SYMBOL = Symbol("promiseCallback");
  function promiseCallback() {
    let resolve, reject2;
    function callback(err, ...args) {
      if (err)
        return reject2(err);
      resolve(args.length > 1 ? args : args[0]);
    }
    callback[PROMISE_SYMBOL] = new Promise((res, rej) => {
      resolve = res, reject2 = rej;
    });
    return callback;
  }
  function auto(tasks, concurrency, callback) {
    if (typeof concurrency !== "number") {
      callback = concurrency;
      concurrency = null;
    }
    callback = once(callback || promiseCallback());
    var numTasks = Object.keys(tasks).length;
    if (!numTasks) {
      return callback(null);
    }
    if (!concurrency) {
      concurrency = numTasks;
    }
    var results = {};
    var runningTasks = 0;
    var canceled = false;
    var hasError = false;
    var listeners = /* @__PURE__ */ Object.create(null);
    var readyTasks = [];
    var readyToCheck = [];
    var uncheckedDependencies = {};
    Object.keys(tasks).forEach((key) => {
      var task = tasks[key];
      if (!Array.isArray(task)) {
        enqueueTask(key, [task]);
        readyToCheck.push(key);
        return;
      }
      var dependencies = task.slice(0, task.length - 1);
      var remainingDependencies = dependencies.length;
      if (remainingDependencies === 0) {
        enqueueTask(key, task);
        readyToCheck.push(key);
        return;
      }
      uncheckedDependencies[key] = remainingDependencies;
      dependencies.forEach((dependencyName) => {
        if (!tasks[dependencyName]) {
          throw new Error("async.auto task `" + key + "` has a non-existent dependency `" + dependencyName + "` in " + dependencies.join(", "));
        }
        addListener(dependencyName, () => {
          remainingDependencies--;
          if (remainingDependencies === 0) {
            enqueueTask(key, task);
          }
        });
      });
    });
    checkForDeadlocks();
    processQueue();
    function enqueueTask(key, task) {
      readyTasks.push(() => runTask(key, task));
    }
    function processQueue() {
      if (canceled)
        return;
      if (readyTasks.length === 0 && runningTasks === 0) {
        return callback(null, results);
      }
      while (readyTasks.length && runningTasks < concurrency) {
        var run = readyTasks.shift();
        run();
      }
    }
    function addListener(taskName, fn) {
      var taskListeners = listeners[taskName];
      if (!taskListeners) {
        taskListeners = listeners[taskName] = [];
      }
      taskListeners.push(fn);
    }
    function taskComplete(taskName) {
      var taskListeners = listeners[taskName] || [];
      taskListeners.forEach((fn) => fn());
      processQueue();
    }
    function runTask(key, task) {
      if (hasError)
        return;
      var taskCallback = onlyOnce((err, ...result) => {
        runningTasks--;
        if (err === false) {
          canceled = true;
          return;
        }
        if (result.length < 2) {
          [result] = result;
        }
        if (err) {
          var safeResults = {};
          Object.keys(results).forEach((rkey) => {
            safeResults[rkey] = results[rkey];
          });
          safeResults[key] = result;
          hasError = true;
          listeners = /* @__PURE__ */ Object.create(null);
          if (canceled)
            return;
          callback(err, safeResults);
        } else {
          results[key] = result;
          taskComplete(key);
        }
      });
      runningTasks++;
      var taskFn = wrapAsync(task[task.length - 1]);
      if (task.length > 1) {
        taskFn(results, taskCallback);
      } else {
        taskFn(taskCallback);
      }
    }
    function checkForDeadlocks() {
      var currentTask;
      var counter = 0;
      while (readyToCheck.length) {
        currentTask = readyToCheck.pop();
        counter++;
        getDependents(currentTask).forEach((dependent) => {
          if (--uncheckedDependencies[dependent] === 0) {
            readyToCheck.push(dependent);
          }
        });
      }
      if (counter !== numTasks) {
        throw new Error(
          "async.auto cannot execute tasks due to a recursive dependency"
        );
      }
    }
    function getDependents(taskName) {
      var result = [];
      Object.keys(tasks).forEach((key) => {
        const task = tasks[key];
        if (Array.isArray(task) && task.indexOf(taskName) >= 0) {
          result.push(key);
        }
      });
      return result;
    }
    return callback[PROMISE_SYMBOL];
  }
  var FN_ARGS = /^(?:async\s)?(?:function)?\s*(?:\w+\s*)?\(([^)]+)\)(?:\s*{)/;
  var ARROW_FN_ARGS = /^(?:async\s)?\s*(?:\(\s*)?((?:[^)=\s]\s*)*)(?:\)\s*)?=>/;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /(=.+)?(\s*)$/;
  function stripComments(string2) {
    let stripped = "";
    let index2 = 0;
    let endBlockComment = string2.indexOf("*/");
    while (index2 < string2.length) {
      if (string2[index2] === "/" && string2[index2 + 1] === "/") {
        let endIndex = string2.indexOf("\n", index2);
        index2 = endIndex === -1 ? string2.length : endIndex;
      } else if (endBlockComment !== -1 && string2[index2] === "/" && string2[index2 + 1] === "*") {
        let endIndex = string2.indexOf("*/", index2);
        if (endIndex !== -1) {
          index2 = endIndex + 2;
          endBlockComment = string2.indexOf("*/", index2);
        } else {
          stripped += string2[index2];
          index2++;
        }
      } else {
        stripped += string2[index2];
        index2++;
      }
    }
    return stripped;
  }
  function parseParams(func) {
    const src = stripComments(func.toString());
    let match = src.match(FN_ARGS);
    if (!match) {
      match = src.match(ARROW_FN_ARGS);
    }
    if (!match)
      throw new Error("could not parse args in autoInject\nSource:\n" + src);
    let [, args] = match;
    return args.replace(/\s/g, "").split(FN_ARG_SPLIT).map((arg) => arg.replace(FN_ARG, "").trim());
  }
  function autoInject(tasks, callback) {
    var newTasks = {};
    Object.keys(tasks).forEach((key) => {
      var taskFn = tasks[key];
      var params;
      var fnIsAsync = isAsync(taskFn);
      var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;
      if (Array.isArray(taskFn)) {
        params = [...taskFn];
        taskFn = params.pop();
        newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
      } else if (hasNoDeps) {
        newTasks[key] = taskFn;
      } else {
        params = parseParams(taskFn);
        if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
          throw new Error("autoInject task functions require explicit parameters.");
        }
        if (!fnIsAsync)
          params.pop();
        newTasks[key] = params.concat(newTask);
      }
      function newTask(results, taskCb) {
        var newArgs = params.map((name) => results[name]);
        newArgs.push(taskCb);
        wrapAsync(taskFn)(...newArgs);
      }
    });
    return auto(newTasks, callback);
  }
  var DLL = class {
    constructor() {
      this.head = this.tail = null;
      this.length = 0;
    }
    removeLink(node) {
      if (node.prev)
        node.prev.next = node.next;
      else
        this.head = node.next;
      if (node.next)
        node.next.prev = node.prev;
      else
        this.tail = node.prev;
      node.prev = node.next = null;
      this.length -= 1;
      return node;
    }
    empty() {
      while (this.head)
        this.shift();
      return this;
    }
    insertAfter(node, newNode) {
      newNode.prev = node;
      newNode.next = node.next;
      if (node.next)
        node.next.prev = newNode;
      else
        this.tail = newNode;
      node.next = newNode;
      this.length += 1;
    }
    insertBefore(node, newNode) {
      newNode.prev = node.prev;
      newNode.next = node;
      if (node.prev)
        node.prev.next = newNode;
      else
        this.head = newNode;
      node.prev = newNode;
      this.length += 1;
    }
    unshift(node) {
      if (this.head)
        this.insertBefore(this.head, node);
      else
        setInitial(this, node);
    }
    push(node) {
      if (this.tail)
        this.insertAfter(this.tail, node);
      else
        setInitial(this, node);
    }
    shift() {
      return this.head && this.removeLink(this.head);
    }
    pop() {
      return this.tail && this.removeLink(this.tail);
    }
    toArray() {
      return [...this];
    }
    *[Symbol.iterator]() {
      var cur = this.head;
      while (cur) {
        yield cur.data;
        cur = cur.next;
      }
    }
    remove(testFn) {
      var curr = this.head;
      while (curr) {
        var { next } = curr;
        if (testFn(curr)) {
          this.removeLink(curr);
        }
        curr = next;
      }
      return this;
    }
  };
  function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
  }
  function queue$1(worker, concurrency, payload) {
    if (concurrency == null) {
      concurrency = 1;
    } else if (concurrency === 0) {
      throw new RangeError("Concurrency must not be zero");
    }
    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];
    const events = {
      error: [],
      drain: [],
      saturated: [],
      unsaturated: [],
      empty: []
    };
    function on(event, handler) {
      events[event].push(handler);
    }
    function once2(event, handler) {
      const handleAndRemove = (...args) => {
        off(event, handleAndRemove);
        handler(...args);
      };
      events[event].push(handleAndRemove);
    }
    function off(event, handler) {
      if (!event)
        return Object.keys(events).forEach((ev) => events[ev] = []);
      if (!handler)
        return events[event] = [];
      events[event] = events[event].filter((ev) => ev !== handler);
    }
    function trigger(event, ...args) {
      events[event].forEach((handler) => handler(...args));
    }
    var processingScheduled = false;
    function _insert(data, insertAtFront, rejectOnError, callback) {
      if (callback != null && typeof callback !== "function") {
        throw new Error("task callback must be a function");
      }
      q.started = true;
      var res, rej;
      function promiseCallback2(err, ...args) {
        if (err)
          return rejectOnError ? rej(err) : res();
        if (args.length <= 1)
          return res(args[0]);
        res(args);
      }
      var item = q._createTaskItem(
        data,
        rejectOnError ? promiseCallback2 : callback || promiseCallback2
      );
      if (insertAtFront) {
        q._tasks.unshift(item);
      } else {
        q._tasks.push(item);
      }
      if (!processingScheduled) {
        processingScheduled = true;
        setImmediate$1(() => {
          processingScheduled = false;
          q.process();
        });
      }
      if (rejectOnError || !callback) {
        return new Promise((resolve, reject2) => {
          res = resolve;
          rej = reject2;
        });
      }
    }
    function _createCB(tasks) {
      return function(err, ...args) {
        numRunning -= 1;
        for (var i = 0, l = tasks.length; i < l; i++) {
          var task = tasks[i];
          var index2 = workersList.indexOf(task);
          if (index2 === 0) {
            workersList.shift();
          } else if (index2 > 0) {
            workersList.splice(index2, 1);
          }
          task.callback(err, ...args);
          if (err != null) {
            trigger("error", err, task.data);
          }
        }
        if (numRunning <= q.concurrency - q.buffer) {
          trigger("unsaturated");
        }
        if (q.idle()) {
          trigger("drain");
        }
        q.process();
      };
    }
    function _maybeDrain(data) {
      if (data.length === 0 && q.idle()) {
        setImmediate$1(() => trigger("drain"));
        return true;
      }
      return false;
    }
    const eventMethod = (name) => (handler) => {
      if (!handler) {
        return new Promise((resolve, reject2) => {
          once2(name, (err, data) => {
            if (err)
              return reject2(err);
            resolve(data);
          });
        });
      }
      off(name);
      on(name, handler);
    };
    var isProcessing = false;
    var q = {
      _tasks: new DLL(),
      _createTaskItem(data, callback) {
        return {
          data,
          callback
        };
      },
      *[Symbol.iterator]() {
        yield* q._tasks[Symbol.iterator]();
      },
      concurrency,
      payload,
      buffer: concurrency / 4,
      started: false,
      paused: false,
      push(data, callback) {
        if (Array.isArray(data)) {
          if (_maybeDrain(data))
            return;
          return data.map((datum) => _insert(datum, false, false, callback));
        }
        return _insert(data, false, false, callback);
      },
      pushAsync(data, callback) {
        if (Array.isArray(data)) {
          if (_maybeDrain(data))
            return;
          return data.map((datum) => _insert(datum, false, true, callback));
        }
        return _insert(data, false, true, callback);
      },
      kill() {
        off();
        q._tasks.empty();
      },
      unshift(data, callback) {
        if (Array.isArray(data)) {
          if (_maybeDrain(data))
            return;
          return data.map((datum) => _insert(datum, true, false, callback));
        }
        return _insert(data, true, false, callback);
      },
      unshiftAsync(data, callback) {
        if (Array.isArray(data)) {
          if (_maybeDrain(data))
            return;
          return data.map((datum) => _insert(datum, true, true, callback));
        }
        return _insert(data, true, true, callback);
      },
      remove(testFn) {
        q._tasks.remove(testFn);
      },
      process() {
        if (isProcessing) {
          return;
        }
        isProcessing = true;
        while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
          var tasks = [], data = [];
          var l = q._tasks.length;
          if (q.payload)
            l = Math.min(l, q.payload);
          for (var i = 0; i < l; i++) {
            var node = q._tasks.shift();
            tasks.push(node);
            workersList.push(node);
            data.push(node.data);
          }
          numRunning += 1;
          if (q._tasks.length === 0) {
            trigger("empty");
          }
          if (numRunning === q.concurrency) {
            trigger("saturated");
          }
          var cb = onlyOnce(_createCB(tasks));
          _worker(data, cb);
        }
        isProcessing = false;
      },
      length() {
        return q._tasks.length;
      },
      running() {
        return numRunning;
      },
      workersList() {
        return workersList;
      },
      idle() {
        return q._tasks.length + numRunning === 0;
      },
      pause() {
        q.paused = true;
      },
      resume() {
        if (q.paused === false) {
          return;
        }
        q.paused = false;
        setImmediate$1(q.process);
      }
    };
    Object.defineProperties(q, {
      saturated: {
        writable: false,
        value: eventMethod("saturated")
      },
      unsaturated: {
        writable: false,
        value: eventMethod("unsaturated")
      },
      empty: {
        writable: false,
        value: eventMethod("empty")
      },
      drain: {
        writable: false,
        value: eventMethod("drain")
      },
      error: {
        writable: false,
        value: eventMethod("error")
      }
    });
    return q;
  }
  function cargo$1(worker, payload) {
    return queue$1(worker, 1, payload);
  }
  function cargo(worker, concurrency, payload) {
    return queue$1(worker, concurrency, payload);
  }
  function reduce(coll, memo, iteratee, callback) {
    callback = once(callback);
    var _iteratee = wrapAsync(iteratee);
    return eachOfSeries$1(coll, (x, i, iterCb) => {
      _iteratee(memo, x, (err, v) => {
        memo = v;
        iterCb(err);
      });
    }, (err) => callback(err, memo));
  }
  var reduce$1 = awaitify(reduce, 4);
  function seq(...functions) {
    var _functions = functions.map(wrapAsync);
    return function(...args) {
      var that = this;
      var cb = args[args.length - 1];
      if (typeof cb == "function") {
        args.pop();
      } else {
        cb = promiseCallback();
      }
      reduce$1(
        _functions,
        args,
        (newargs, fn, iterCb) => {
          fn.apply(that, newargs.concat((err, ...nextargs) => {
            iterCb(err, nextargs);
          }));
        },
        (err, results) => cb(err, ...results)
      );
      return cb[PROMISE_SYMBOL];
    };
  }
  function compose(...args) {
    return seq(...args.reverse());
  }
  function mapLimit(coll, limit, iteratee, callback) {
    return _asyncMap(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var mapLimit$1 = awaitify(mapLimit, 4);
  function concatLimit(coll, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(coll, limit, (val, iterCb) => {
      _iteratee(val, (err, ...args) => {
        if (err)
          return iterCb(err);
        return iterCb(err, args);
      });
    }, (err, mapResults) => {
      var result = [];
      for (var i = 0; i < mapResults.length; i++) {
        if (mapResults[i]) {
          result = result.concat(...mapResults[i]);
        }
      }
      return callback(err, result);
    });
  }
  var concatLimit$1 = awaitify(concatLimit, 4);
  function concat(coll, iteratee, callback) {
    return concatLimit$1(coll, Infinity, iteratee, callback);
  }
  var concat$1 = awaitify(concat, 3);
  function concatSeries(coll, iteratee, callback) {
    return concatLimit$1(coll, 1, iteratee, callback);
  }
  var concatSeries$1 = awaitify(concatSeries, 3);
  function constant$1(...args) {
    return function(...ignoredArgs) {
      var callback = ignoredArgs.pop();
      return callback(null, ...args);
    };
  }
  function _createTester(check, getResult) {
    return (eachfn, arr, _iteratee, cb) => {
      var testPassed = false;
      var testResult;
      const iteratee = wrapAsync(_iteratee);
      eachfn(arr, (value, _, callback) => {
        iteratee(value, (err, result) => {
          if (err || err === false)
            return callback(err);
          if (check(result) && !testResult) {
            testPassed = true;
            testResult = getResult(true, value);
            return callback(null, breakLoop);
          }
          callback();
        });
      }, (err) => {
        if (err)
          return cb(err);
        cb(null, testPassed ? testResult : getResult(false));
      });
    };
  }
  function detect(coll, iteratee, callback) {
    return _createTester((bool) => bool, (res, item) => item)(eachOf$1, coll, iteratee, callback);
  }
  var detect$1 = awaitify(detect, 3);
  function detectLimit(coll, limit, iteratee, callback) {
    return _createTester((bool) => bool, (res, item) => item)(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var detectLimit$1 = awaitify(detectLimit, 4);
  function detectSeries(coll, iteratee, callback) {
    return _createTester((bool) => bool, (res, item) => item)(eachOfLimit$2(1), coll, iteratee, callback);
  }
  var detectSeries$1 = awaitify(detectSeries, 3);
  function consoleFunc(name) {
    return (fn, ...args) => wrapAsync(fn)(...args, (err, ...resultArgs) => {
      if (typeof console === "object") {
        if (err) {
          if (console.error) {
            console.error(err);
          }
        } else if (console[name]) {
          resultArgs.forEach((x) => console[name](x));
        }
      }
    });
  }
  var dir = consoleFunc("dir");
  function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback);
    var _fn = wrapAsync(iteratee);
    var _test = wrapAsync(test);
    var results;
    function next(err, ...args) {
      if (err)
        return callback(err);
      if (err === false)
        return;
      results = args;
      _test(...args, check);
    }
    function check(err, truth) {
      if (err)
        return callback(err);
      if (err === false)
        return;
      if (!truth)
        return callback(null, ...results);
      _fn(next);
    }
    return check(null, true);
  }
  var doWhilst$1 = awaitify(doWhilst, 3);
  function doUntil(iteratee, test, callback) {
    const _test = wrapAsync(test);
    return doWhilst$1(iteratee, (...args) => {
      const cb = args.pop();
      _test(...args, (err, truth) => cb(err, !truth));
    }, callback);
  }
  function _withoutIndex(iteratee) {
    return (value, index2, callback) => iteratee(value, callback);
  }
  function eachLimit$2(coll, iteratee, callback) {
    return eachOf$1(coll, _withoutIndex(wrapAsync(iteratee)), callback);
  }
  var each = awaitify(eachLimit$2, 3);
  function eachLimit(coll, limit, iteratee, callback) {
    return eachOfLimit$2(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
  }
  var eachLimit$1 = awaitify(eachLimit, 4);
  function eachSeries(coll, iteratee, callback) {
    return eachLimit$1(coll, 1, iteratee, callback);
  }
  var eachSeries$1 = awaitify(eachSeries, 3);
  function ensureAsync(fn) {
    if (isAsync(fn))
      return fn;
    return function(...args) {
      var callback = args.pop();
      var sync = true;
      args.push((...innerArgs) => {
        if (sync) {
          setImmediate$1(() => callback(...innerArgs));
        } else {
          callback(...innerArgs);
        }
      });
      fn.apply(this, args);
      sync = false;
    };
  }
  function every(coll, iteratee, callback) {
    return _createTester((bool) => !bool, (res) => !res)(eachOf$1, coll, iteratee, callback);
  }
  var every$1 = awaitify(every, 3);
  function everyLimit(coll, limit, iteratee, callback) {
    return _createTester((bool) => !bool, (res) => !res)(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var everyLimit$1 = awaitify(everyLimit, 4);
  function everySeries(coll, iteratee, callback) {
    return _createTester((bool) => !bool, (res) => !res)(eachOfSeries$1, coll, iteratee, callback);
  }
  var everySeries$1 = awaitify(everySeries, 3);
  function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, (x, index2, iterCb) => {
      iteratee(x, (err, v) => {
        truthValues[index2] = !!v;
        iterCb(err);
      });
    }, (err) => {
      if (err)
        return callback(err);
      var results = [];
      for (var i = 0; i < arr.length; i++) {
        if (truthValues[i])
          results.push(arr[i]);
      }
      callback(null, results);
    });
  }
  function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, (x, index2, iterCb) => {
      iteratee(x, (err, v) => {
        if (err)
          return iterCb(err);
        if (v) {
          results.push({ index: index2, value: x });
        }
        iterCb(err);
      });
    }, (err) => {
      if (err)
        return callback(err);
      callback(null, results.sort((a, b) => a.index - b.index).map((v) => v.value));
    });
  }
  function _filter(eachfn, coll, iteratee, callback) {
    var filter2 = isArrayLike(coll) ? filterArray : filterGeneric;
    return filter2(eachfn, coll, wrapAsync(iteratee), callback);
  }
  function filter(coll, iteratee, callback) {
    return _filter(eachOf$1, coll, iteratee, callback);
  }
  var filter$1 = awaitify(filter, 3);
  function filterLimit(coll, limit, iteratee, callback) {
    return _filter(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var filterLimit$1 = awaitify(filterLimit, 4);
  function filterSeries(coll, iteratee, callback) {
    return _filter(eachOfSeries$1, coll, iteratee, callback);
  }
  var filterSeries$1 = awaitify(filterSeries, 3);
  function forever(fn, errback) {
    var done = onlyOnce(errback);
    var task = wrapAsync(ensureAsync(fn));
    function next(err) {
      if (err)
        return done(err);
      if (err === false)
        return;
      task(next);
    }
    return next();
  }
  var forever$1 = awaitify(forever, 2);
  function groupByLimit(coll, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(coll, limit, (val, iterCb) => {
      _iteratee(val, (err, key) => {
        if (err)
          return iterCb(err);
        return iterCb(err, { key, val });
      });
    }, (err, mapResults) => {
      var result = {};
      var { hasOwnProperty } = Object.prototype;
      for (var i = 0; i < mapResults.length; i++) {
        if (mapResults[i]) {
          var { key } = mapResults[i];
          var { val } = mapResults[i];
          if (hasOwnProperty.call(result, key)) {
            result[key].push(val);
          } else {
            result[key] = [val];
          }
        }
      }
      return callback(err, result);
    });
  }
  var groupByLimit$1 = awaitify(groupByLimit, 4);
  function groupBy2(coll, iteratee, callback) {
    return groupByLimit$1(coll, Infinity, iteratee, callback);
  }
  function groupBySeries(coll, iteratee, callback) {
    return groupByLimit$1(coll, 1, iteratee, callback);
  }
  var log2 = consoleFunc("log");
  function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    return eachOfLimit$2(limit)(obj, (val, key, next) => {
      _iteratee(val, key, (err, result) => {
        if (err)
          return next(err);
        newObj[key] = result;
        next(err);
      });
    }, (err) => callback(err, newObj));
  }
  var mapValuesLimit$1 = awaitify(mapValuesLimit, 4);
  function mapValues(obj, iteratee, callback) {
    return mapValuesLimit$1(obj, Infinity, iteratee, callback);
  }
  function mapValuesSeries(obj, iteratee, callback) {
    return mapValuesLimit$1(obj, 1, iteratee, callback);
  }
  function memoize(fn, hasher = (v) => v) {
    var memo = /* @__PURE__ */ Object.create(null);
    var queues = /* @__PURE__ */ Object.create(null);
    var _fn = wrapAsync(fn);
    var memoized = initialParams((args, callback) => {
      var key = hasher(...args);
      if (key in memo) {
        setImmediate$1(() => callback(null, ...memo[key]));
      } else if (key in queues) {
        queues[key].push(callback);
      } else {
        queues[key] = [callback];
        _fn(...args, (err, ...resultArgs) => {
          if (!err) {
            memo[key] = resultArgs;
          }
          var q = queues[key];
          delete queues[key];
          for (var i = 0, l = q.length; i < l; i++) {
            q[i](err, ...resultArgs);
          }
        });
      }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
  }
  var _defer;
  if (hasNextTick) {
    _defer = process.nextTick;
  } else if (hasSetImmediate) {
    _defer = setImmediate;
  } else {
    _defer = fallback;
  }
  var nextTick = wrap(_defer);
  var _parallel = awaitify((eachfn, tasks, callback) => {
    var results = isArrayLike(tasks) ? [] : {};
    eachfn(tasks, (task, key, taskCb) => {
      wrapAsync(task)((err, ...result) => {
        if (result.length < 2) {
          [result] = result;
        }
        results[key] = result;
        taskCb(err);
      });
    }, (err) => callback(err, results));
  }, 3);
  function parallel(tasks, callback) {
    return _parallel(eachOf$1, tasks, callback);
  }
  function parallelLimit(tasks, limit, callback) {
    return _parallel(eachOfLimit$2(limit), tasks, callback);
  }
  function queue(worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue$1((items, cb) => {
      _worker(items[0], cb);
    }, concurrency, 1);
  }
  var Heap = class {
    constructor() {
      this.heap = [];
      this.pushCount = Number.MIN_SAFE_INTEGER;
    }
    get length() {
      return this.heap.length;
    }
    empty() {
      this.heap = [];
      return this;
    }
    percUp(index2) {
      let p;
      while (index2 > 0 && smaller(this.heap[index2], this.heap[p = parent(index2)])) {
        let t = this.heap[index2];
        this.heap[index2] = this.heap[p];
        this.heap[p] = t;
        index2 = p;
      }
    }
    percDown(index2) {
      let l;
      while ((l = leftChi(index2)) < this.heap.length) {
        if (l + 1 < this.heap.length && smaller(this.heap[l + 1], this.heap[l])) {
          l = l + 1;
        }
        if (smaller(this.heap[index2], this.heap[l])) {
          break;
        }
        let t = this.heap[index2];
        this.heap[index2] = this.heap[l];
        this.heap[l] = t;
        index2 = l;
      }
    }
    push(node) {
      node.pushCount = ++this.pushCount;
      this.heap.push(node);
      this.percUp(this.heap.length - 1);
    }
    unshift(node) {
      return this.heap.push(node);
    }
    shift() {
      let [top] = this.heap;
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.percDown(0);
      return top;
    }
    toArray() {
      return [...this];
    }
    *[Symbol.iterator]() {
      for (let i = 0; i < this.heap.length; i++) {
        yield this.heap[i].data;
      }
    }
    remove(testFn) {
      let j = 0;
      for (let i = 0; i < this.heap.length; i++) {
        if (!testFn(this.heap[i])) {
          this.heap[j] = this.heap[i];
          j++;
        }
      }
      this.heap.splice(j);
      for (let i = parent(this.heap.length - 1); i >= 0; i--) {
        this.percDown(i);
      }
      return this;
    }
  };
  function leftChi(i) {
    return (i << 1) + 1;
  }
  function parent(i) {
    return (i + 1 >> 1) - 1;
  }
  function smaller(x, y) {
    if (x.priority !== y.priority) {
      return x.priority < y.priority;
    } else {
      return x.pushCount < y.pushCount;
    }
  }
  function priorityQueue(worker, concurrency) {
    var q = queue(worker, concurrency);
    var {
      push,
      pushAsync
    } = q;
    q._tasks = new Heap();
    q._createTaskItem = ({ data, priority }, callback) => {
      return {
        data,
        priority,
        callback
      };
    };
    function createDataItems(tasks, priority) {
      if (!Array.isArray(tasks)) {
        return { data: tasks, priority };
      }
      return tasks.map((data) => {
        return { data, priority };
      });
    }
    q.push = function(data, priority = 0, callback) {
      return push(createDataItems(data, priority), callback);
    };
    q.pushAsync = function(data, priority = 0, callback) {
      return pushAsync(createDataItems(data, priority), callback);
    };
    delete q.unshift;
    delete q.unshiftAsync;
    return q;
  }
  function race(tasks, callback) {
    callback = once(callback);
    if (!Array.isArray(tasks))
      return callback(new TypeError("First argument to race must be an array of functions"));
    if (!tasks.length)
      return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
      wrapAsync(tasks[i])(callback);
    }
  }
  var race$1 = awaitify(race, 2);
  function reduceRight(array, memo, iteratee, callback) {
    var reversed = [...array].reverse();
    return reduce$1(reversed, memo, iteratee, callback);
  }
  function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
      args.push((error, ...cbArgs) => {
        let retVal = {};
        if (error) {
          retVal.error = error;
        }
        if (cbArgs.length > 0) {
          var value = cbArgs;
          if (cbArgs.length <= 1) {
            [value] = cbArgs;
          }
          retVal.value = value;
        }
        reflectCallback(null, retVal);
      });
      return _fn.apply(this, args);
    });
  }
  function reflectAll(tasks) {
    var results;
    if (Array.isArray(tasks)) {
      results = tasks.map(reflect);
    } else {
      results = {};
      Object.keys(tasks).forEach((key) => {
        results[key] = reflect.call(this, tasks[key]);
      });
    }
    return results;
  }
  function reject$2(eachfn, arr, _iteratee, callback) {
    const iteratee = wrapAsync(_iteratee);
    return _filter(eachfn, arr, (value, cb) => {
      iteratee(value, (err, v) => {
        cb(err, !v);
      });
    }, callback);
  }
  function reject(coll, iteratee, callback) {
    return reject$2(eachOf$1, coll, iteratee, callback);
  }
  var reject$1 = awaitify(reject, 3);
  function rejectLimit(coll, limit, iteratee, callback) {
    return reject$2(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var rejectLimit$1 = awaitify(rejectLimit, 4);
  function rejectSeries(coll, iteratee, callback) {
    return reject$2(eachOfSeries$1, coll, iteratee, callback);
  }
  var rejectSeries$1 = awaitify(rejectSeries, 3);
  function constant(value) {
    return function() {
      return value;
    };
  }
  var DEFAULT_TIMES = 5;
  var DEFAULT_INTERVAL = 0;
  function retry(opts, task, callback) {
    var options = {
      times: DEFAULT_TIMES,
      intervalFunc: constant(DEFAULT_INTERVAL)
    };
    if (arguments.length < 3 && typeof opts === "function") {
      callback = task || promiseCallback();
      task = opts;
    } else {
      parseTimes(options, opts);
      callback = callback || promiseCallback();
    }
    if (typeof task !== "function") {
      throw new Error("Invalid arguments for async.retry");
    }
    var _task = wrapAsync(task);
    var attempt = 1;
    function retryAttempt() {
      _task((err, ...args) => {
        if (err === false)
          return;
        if (err && attempt++ < options.times && (typeof options.errorFilter != "function" || options.errorFilter(err))) {
          setTimeout(retryAttempt, options.intervalFunc(attempt - 1));
        } else {
          callback(err, ...args);
        }
      });
    }
    retryAttempt();
    return callback[PROMISE_SYMBOL];
  }
  function parseTimes(acc, t) {
    if (typeof t === "object") {
      acc.times = +t.times || DEFAULT_TIMES;
      acc.intervalFunc = typeof t.interval === "function" ? t.interval : constant(+t.interval || DEFAULT_INTERVAL);
      acc.errorFilter = t.errorFilter;
    } else if (typeof t === "number" || typeof t === "string") {
      acc.times = +t || DEFAULT_TIMES;
    } else {
      throw new Error("Invalid arguments for async.retry");
    }
  }
  function retryable(opts, task) {
    if (!task) {
      task = opts;
      opts = null;
    }
    let arity = opts && opts.arity || task.length;
    if (isAsync(task)) {
      arity += 1;
    }
    var _task = wrapAsync(task);
    return initialParams((args, callback) => {
      if (args.length < arity - 1 || callback == null) {
        args.push(callback);
        callback = promiseCallback();
      }
      function taskFn(cb) {
        _task(...args, cb);
      }
      if (opts)
        retry(opts, taskFn, callback);
      else
        retry(taskFn, callback);
      return callback[PROMISE_SYMBOL];
    });
  }
  function series(tasks, callback) {
    return _parallel(eachOfSeries$1, tasks, callback);
  }
  function some(coll, iteratee, callback) {
    return _createTester(Boolean, (res) => res)(eachOf$1, coll, iteratee, callback);
  }
  var some$1 = awaitify(some, 3);
  function someLimit(coll, limit, iteratee, callback) {
    return _createTester(Boolean, (res) => res)(eachOfLimit$2(limit), coll, iteratee, callback);
  }
  var someLimit$1 = awaitify(someLimit, 4);
  function someSeries(coll, iteratee, callback) {
    return _createTester(Boolean, (res) => res)(eachOfSeries$1, coll, iteratee, callback);
  }
  var someSeries$1 = awaitify(someSeries, 3);
  function sortBy(coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return map$1(coll, (x, iterCb) => {
      _iteratee(x, (err, criteria) => {
        if (err)
          return iterCb(err);
        iterCb(err, { value: x, criteria });
      });
    }, (err, results) => {
      if (err)
        return callback(err);
      callback(null, results.sort(comparator).map((v) => v.value));
    });
    function comparator(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }
  var sortBy$1 = awaitify(sortBy, 3);
  function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);
    return initialParams((args, callback) => {
      var timedOut = false;
      var timer;
      function timeoutCallback() {
        var name = asyncFn.name || "anonymous";
        var error = new Error('Callback function "' + name + '" timed out.');
        error.code = "ETIMEDOUT";
        if (info) {
          error.info = info;
        }
        timedOut = true;
        callback(error);
      }
      args.push((...cbArgs) => {
        if (!timedOut) {
          callback(...cbArgs);
          clearTimeout(timer);
        }
      });
      timer = setTimeout(timeoutCallback, milliseconds);
      fn(...args);
    });
  }
  function range2(size) {
    var result = Array(size);
    while (size--) {
      result[size] = size;
    }
    return result;
  }
  function timesLimit(count2, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(range2(count2), limit, _iteratee, callback);
  }
  function times(n, iteratee, callback) {
    return timesLimit(n, Infinity, iteratee, callback);
  }
  function timesSeries(n, iteratee, callback) {
    return timesLimit(n, 1, iteratee, callback);
  }
  function transform(coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3 && typeof accumulator === "function") {
      callback = iteratee;
      iteratee = accumulator;
      accumulator = Array.isArray(coll) ? [] : {};
    }
    callback = once(callback || promiseCallback());
    var _iteratee = wrapAsync(iteratee);
    eachOf$1(coll, (v, k, cb) => {
      _iteratee(accumulator, v, k, cb);
    }, (err) => callback(err, accumulator));
    return callback[PROMISE_SYMBOL];
  }
  function tryEach(tasks, callback) {
    var error = null;
    var result;
    return eachSeries$1(tasks, (task, taskCb) => {
      wrapAsync(task)((err, ...args) => {
        if (err === false)
          return taskCb(err);
        if (args.length < 2) {
          [result] = args;
        } else {
          result = args;
        }
        error = err;
        taskCb(err ? null : {});
      });
    }, () => callback(error, result));
  }
  var tryEach$1 = awaitify(tryEach);
  function unmemoize(fn) {
    return (...args) => {
      return (fn.unmemoized || fn)(...args);
    };
  }
  function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback);
    var _fn = wrapAsync(iteratee);
    var _test = wrapAsync(test);
    var results = [];
    function next(err, ...rest2) {
      if (err)
        return callback(err);
      results = rest2;
      if (err === false)
        return;
      _test(check);
    }
    function check(err, truth) {
      if (err)
        return callback(err);
      if (err === false)
        return;
      if (!truth)
        return callback(null, ...results);
      _fn(next);
    }
    return _test(check);
  }
  var whilst$1 = awaitify(whilst, 3);
  function until(test, iteratee, callback) {
    const _test = wrapAsync(test);
    return whilst$1((cb) => _test((err, truth) => cb(err, !truth)), iteratee, callback);
  }
  function waterfall(tasks, callback) {
    callback = once(callback);
    if (!Array.isArray(tasks))
      return callback(new Error("First argument to waterfall must be an array of functions"));
    if (!tasks.length)
      return callback();
    var taskIndex = 0;
    function nextTask(args) {
      var task = wrapAsync(tasks[taskIndex++]);
      task(...args, onlyOnce(next));
    }
    function next(err, ...args) {
      if (err === false)
        return;
      if (err || taskIndex === tasks.length) {
        return callback(err, ...args);
      }
      nextTask(args);
    }
    nextTask([]);
  }
  var waterfall$1 = awaitify(waterfall);
  var index = {
    apply,
    applyEach,
    applyEachSeries,
    asyncify,
    auto,
    autoInject,
    cargo: cargo$1,
    cargoQueue: cargo,
    compose,
    concat: concat$1,
    concatLimit: concatLimit$1,
    concatSeries: concatSeries$1,
    constant: constant$1,
    detect: detect$1,
    detectLimit: detectLimit$1,
    detectSeries: detectSeries$1,
    dir,
    doUntil,
    doWhilst: doWhilst$1,
    each,
    eachLimit: eachLimit$1,
    eachOf: eachOf$1,
    eachOfLimit: eachOfLimit$1,
    eachOfSeries: eachOfSeries$1,
    eachSeries: eachSeries$1,
    ensureAsync,
    every: every$1,
    everyLimit: everyLimit$1,
    everySeries: everySeries$1,
    filter: filter$1,
    filterLimit: filterLimit$1,
    filterSeries: filterSeries$1,
    forever: forever$1,
    groupBy: groupBy2,
    groupByLimit: groupByLimit$1,
    groupBySeries,
    log: log2,
    map: map$1,
    mapLimit: mapLimit$1,
    mapSeries: mapSeries$1,
    mapValues,
    mapValuesLimit: mapValuesLimit$1,
    mapValuesSeries,
    memoize,
    nextTick,
    parallel,
    parallelLimit,
    priorityQueue,
    queue,
    race: race$1,
    reduce: reduce$1,
    reduceRight,
    reflect,
    reflectAll,
    reject: reject$1,
    rejectLimit: rejectLimit$1,
    rejectSeries: rejectSeries$1,
    retry,
    retryable,
    seq,
    series,
    setImmediate: setImmediate$1,
    some: some$1,
    someLimit: someLimit$1,
    someSeries: someSeries$1,
    sortBy: sortBy$1,
    timeout,
    times,
    timesLimit,
    timesSeries,
    transform,
    tryEach: tryEach$1,
    unmemoize,
    until,
    waterfall: waterfall$1,
    whilst: whilst$1,
    // aliases
    all: every$1,
    allLimit: everyLimit$1,
    allSeries: everySeries$1,
    any: some$1,
    anyLimit: someLimit$1,
    anySeries: someSeries$1,
    find: detect$1,
    findLimit: detectLimit$1,
    findSeries: detectSeries$1,
    flatMap: concat$1,
    flatMapLimit: concatLimit$1,
    flatMapSeries: concatSeries$1,
    forEach: each,
    forEachSeries: eachSeries$1,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf$1,
    forEachOfSeries: eachOfSeries$1,
    forEachOfLimit: eachOfLimit$1,
    inject: reduce$1,
    foldl: reduce$1,
    foldr: reduceRight,
    select: filter$1,
    selectLimit: filterLimit$1,
    selectSeries: filterSeries$1,
    wrapSync: asyncify,
    during: whilst$1,
    doDuring: doWhilst$1
  };

  // src/libraries/img/util.js
  function radians3(degrees3) {
    return degrees3 / 180 * Math.PI;
  }
  function distance2(x0, y0, x1, y1) {
    return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
  }
  function clamp3(val, min2, max2) {
    return Math.min(max2, Math.max(min2, val));
  }
  function transform2(m) {
    if (m === void 0) {
      m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    } else {
      m = m.slice();
    }
    function _mmult(a, m2) {
      m2 = m2.slice();
      const m0 = m2[0];
      const m1 = m2[1];
      const m3 = m2[3];
      const m4 = m2[4];
      const m6 = m2[6];
      const m7 = m2[7];
      m2[0] = a[0] * m0 + a[1] * m3;
      m2[1] = a[0] * m1 + a[1] * m4;
      m2[3] = a[3] * m0 + a[4] * m3;
      m2[4] = a[3] * m1 + a[4] * m4;
      m2[6] = a[6] * m0 + a[7] * m3 + m6;
      m2[7] = a[6] * m1 + a[7] * m4 + m7;
      return transform2(m2);
    }
    return {
      matrix: function() {
        return m.slice();
      },
      clone: function() {
        return transform2(m);
      },
      prepend: function(t) {
        if (t.matrix) {
          t = t.matrix();
        }
        return _mmult(m, t);
      },
      append: function(t) {
        if (t.matrix) {
          t = t.matrix();
        }
        return _mmult(t, m);
      },
      translate: function(x, y) {
        return _mmult([1, 0, 0, 0, 1, 0, x, y, 1], m);
      },
      scale: function(x, y) {
        if (y === void 0) {
          y = x;
        }
        return _mmult([x, 0, 0, 0, y, 0, 0, 0, 1], m);
      },
      skew: function(x, y) {
        if (y === void 0) {
          y = x;
        }
        const kx = Math.PI * x / 180;
        const ky = Math.PI * y / 180;
        return _mmult([1, Math.tan(ky), 0, -Math.tan(kx), 1, 0, 0, 0, 1], m);
      },
      rotate: function(angle3) {
        const c = Math.cos(radians3(angle3));
        const s = Math.sin(radians3(angle3));
        return _mmult([c, s, 0, -s, c, 0, 0, 0, 1], m);
      },
      transformPoint: function(point2) {
        const x = point2.x;
        const y = point2.y;
        return { x: x * m[0] + y * m[3] + m[6], y: x * m[1] + y * m[4] + m[7] };
      }
    };
  }

  // src/libraries/img/blend.js
  var aliases = {
    normal: "source-over",
    "linear-dodge": "add"
  };
  function addAliases(d) {
    let i, mode, alias;
    const modes = Object.keys(aliases);
    for (i = 0; i < modes.length; i += 1) {
      mode = modes[i];
      alias = aliases[mode];
      d[mode] = d[alias];
    }
  }
  function realBlendMode(mode) {
    if (aliases[mode] !== void 0) {
      return aliases[mode];
    }
    return mode;
  }
  function getNativeModes() {
    if (typeof document === "undefined") {
      return {};
    }
    let i, mode, darken, ok;
    const nativeModes = {};
    const dCanvas = document.createElement("canvas");
    const ctx = dCanvas.getContext("2d");
    if (!ctx) {
      return {};
    }
    const native = [
      "source-over",
      "source-in",
      "source-out",
      "source-atop",
      "destination-over",
      "destination-in",
      "destination-out",
      "destination-atop",
      "lighter",
      "darker",
      "copy",
      "xor"
    ];
    const maybeNative = [
      "multiply",
      "screen",
      "overlay",
      "soft-light",
      "hard-light",
      "color-dodge",
      "color-burn",
      "darken",
      "lighten",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "luminosity",
      "color",
      "add",
      "subtract",
      "average",
      "negation"
    ];
    const nonNative = [
      "divide",
      "darker-color",
      "lighter-color",
      "linear-burn",
      "linear-light",
      "vivid-light",
      "pin-light",
      "hard-mix"
    ];
    for (i = 0; i < native.length; i += 1) {
      nativeModes[native[i]] = true;
    }
    for (i = 0; i < nonNative.length; i += 1) {
      nativeModes[nonNative[i]] = false;
    }
    dCanvas.width = 1;
    dCanvas.height = 1;
    for (i = 0; i < maybeNative.length; i += 1) {
      mode = maybeNative[i];
      darken = mode === "darken";
      ok = false;
      ctx.save();
      try {
        ctx.fillStyle = darken ? "#300" : "#a00";
        ctx.fillRect(0, 0, 1, 1);
        ctx.globalCompositeOperation = mode;
        if (ctx.globalCompositeOperation === mode) {
          ctx.fillStyle = darken ? "#a00" : "#300";
          ctx.fillRect(0, 0, 1, 1);
          ok = ctx.getImageData(0, 0, 1, 1).data[0] !== (darken ? 170 : 51);
        }
      } catch {
      }
      ctx.restore();
      nativeModes[mode] = ok;
    }
    addAliases(nativeModes);
    return nativeModes;
  }
  var process2 = function(inData, outData, width, height, options) {
    let blend_fn, sr, sg, sb, sa, dr, dg, db, da, or2, og, ob;
    const max2 = Math.max;
    const min2 = Math.min;
    const R = 0.2126;
    const G = 0.7152;
    const B = 0.0722;
    function rgbToHsy(r, g2, b) {
      r /= 255;
      g2 /= 255;
      b /= 255;
      let h, s, y;
      if (r === g2 && g2 === b) {
        s = 0;
        h = 0;
      } else if (r >= g2 && g2 >= b) {
        s = r - b;
        h = 60 * (g2 - b) / s;
      } else if (g2 > r && r >= b) {
        s = g2 - b;
        h = 60 * (g2 - r) / s + 60;
      } else if (g2 >= b && b > r) {
        s = g2 - r;
        h = 60 * (b - r) / s + 120;
      } else if (b > g2 && g2 > r) {
        s = b - r;
        h = 60 * (b - g2) / s + 180;
      } else if (b > r && r >= g2) {
        s = b - g2;
        h = 60 * (r - g2) / s + 240;
      } else {
        s = r - g2;
        h = 60 * (r - b) / s + 300;
      }
      y = R * r + G * g2 + B * b;
      return [h % 360, min2(max2(s, 0), 1), min2(max2(y, 0), 1)];
    }
    function hsyToRgb(h, s, y) {
      h = h % 360;
      let r, g2, b, k;
      if (h >= 0 && h < 60) {
        k = s * h / 60;
        b = y - R * s - G * k;
        r = b + s;
        g2 = b + k;
      } else if (h >= 60 && h < 120) {
        k = s * (h - 60) / 60;
        g2 = y + B * s + R * k;
        b = g2 - s;
        r = g2 - k;
      } else if (h >= 120 && h < 180) {
        k = s * (h - 120) / 60;
        r = y - G * s - B * k;
        g2 = r + s;
        b = r + k;
      } else if (h >= 180 && h < 240) {
        k = s * (h - 180) / 60;
        b = y + R * s + G * k;
        r = b - s;
        g2 = b - k;
      } else if (h >= 240 && h < 300) {
        k = s * (h - 240) / 60;
        g2 = y - B * s - R * k;
        b = g2 + s;
        r = g2 + k;
      } else {
        k = s * (h - 300) / 60;
        r = y + G * s + B * k;
        g2 = r - s;
        b = r - k;
      }
      r = min2(max2(r, 0), 1) * 255;
      g2 = min2(max2(g2, 0), 1) * 255;
      b = min2(max2(b, 0), 1) * 255;
      return [r, g2, b];
    }
    function _svg_sourceover() {
      or2 = sr + dr - dr * sa;
      og = sg + dg - dg * sa;
      ob = sb + db - db * sa;
    }
    function _svg_multiply() {
      or2 = sr * dr + sr * (1 - da) + dr * (1 - sa);
      og = sg * dg + sg * (1 - da) + dg * (1 - sa);
      ob = sb * db + sb * (1 - da) + db * (1 - sa);
    }
    function _svg_subtract() {
      or2 = max2(dr * sa - sr * da, 0) + sr * (1 - da) + dr * (1 - sa);
      og = max2(dg * sa - sg * da, 0) + sg * (1 - da) + dg * (1 - sa);
      ob = max2(db * sa - sb * da, 0) + sb * (1 - da) + db * (1 - sa);
    }
    function _divide() {
      or2 = sr === 0 ? 0 : dr / sr * 255;
      og = sg === 0 ? 0 : dg / sg * 255;
      ob = sb === 0 ? 0 : db / sb * 255;
    }
    function _svg_screen() {
      or2 = sr + dr - sr * dr;
      og = sg + dg - sg * dg;
      ob = sb + db - sb * db;
    }
    function _svg_lighten() {
      or2 = max2(sr * da, dr * sa) + sr * (1 - da) + dr * (1 - sa);
      og = max2(sg * da, dg * sa) + sg * (1 - da) + dg * (1 - sa);
      ob = max2(sb * da, db * sa) + sb * (1 - da) + db * (1 - sa);
    }
    function _svg_darken() {
      or2 = min2(sr * da, dr * sa) + sr * (1 - da) + dr * (1 - sa);
      og = min2(sg * da, dg * sa) + sg * (1 - da) + dg * (1 - sa);
      ob = min2(sb * da, db * sa) + sb * (1 - da) + db * (1 - sa);
    }
    function _svg_darkercolor() {
      if (dr * sa * 0.3 + dg * sa * 0.59 + db * sa * 0.11 <= sr * da * 0.3 + sg * da * 0.59 + sb * da * 0.11) {
        or2 = dr * sa;
        og = dg * sa;
        ob = db * sa;
      } else {
        or2 = sr * da;
        og = sg * da;
        ob = sb * da;
      }
      or2 += sr * (1 - da) + dr * (1 - sa);
      og += sg * (1 - da) + dg * (1 - sa);
      ob += sb * (1 - da) + db * (1 - sa);
    }
    function _svg_lightercolor() {
      if (dr * sa * 0.3 + dg * sa * 0.59 + db * sa * 0.11 > sr * da * 0.3 + sg * da * 0.59 + sb * da * 0.11) {
        or2 = dr * sa;
        og = dg * sa;
        ob = db * sa;
      } else {
        or2 = sr * da;
        og = sg * da;
        ob = sb * da;
      }
      or2 += sr * (1 - da) + dr * (1 - sa);
      og += sg * (1 - da) + dg * (1 - sa);
      ob += sb * (1 - da) + db * (1 - sa);
    }
    function _add() {
      or2 = min2(dr + sr, 255);
      og = min2(dg + sg, 255);
      ob = min2(db + sb, 255);
    }
    function _linearburn() {
      or2 = dr + sr;
      og = dg + sg;
      ob = db + sb;
      or2 = or2 < 255 ? 0 : or2 - 255;
      og = og < 255 ? 0 : og - 255;
      ob = ob < 255 ? 0 : ob - 255;
    }
    function _svg_difference() {
      or2 = sr + dr - 2 * min2(sr * da, dr * sa);
      og = sg + dg - 2 * min2(sg * da, dg * sa);
      ob = sb + db - 2 * min2(sb * da, db * sa);
    }
    function _svg_exclusion() {
      or2 = sr * da + dr * sa - 2 * sr * dr + sr * (1 - da) + dr * (1 - sa);
      og = sg * da + dg * sa - 2 * sg * dg + sg * (1 - da) + dg * (1 - sa);
      ob = sb * da + db * sa - 2 * sb * db + sb * (1 - da) + db * (1 - sa);
    }
    function _svg_overlay() {
      if (2 * dr <= da) {
        or2 = 2 * sr * dr + sr * (1 - da) + dr * (1 - sa);
      } else {
        or2 = sr * (1 + da) + dr * (1 + sa) - 2 * dr * sr - da * sa;
      }
      if (2 * dg <= da) {
        og = 2 * sg * dg + sg * (1 - da) + dg * (1 - sa);
      } else {
        og = sg * (1 + da) + dg * (1 + sa) - 2 * dg * sg - da * sa;
      }
      if (2 * db <= da) {
        ob = 2 * sb * db + sb * (1 - da) + db * (1 - sa);
      } else {
        ob = sb * (1 + da) + db * (1 + sa) - 2 * db * sb - da * sa;
      }
    }
    function _svg_softlight() {
      let m;
      const pow2 = Math.pow;
      if (0 === da) {
        or2 = sr;
        og = sg;
        ob = sb;
        return;
      }
      m = dr / da;
      if (2 * sr <= sa) {
        or2 = dr * (sa + (2 * sr - sa) * (1 - m)) + sr * (1 - da) + dr * (1 - sa);
      } else if (2 * sr > sa && 4 * dr <= da) {
        or2 = da * (2 * sr - sa) * (16 * pow2(m, 3) - 12 * pow2(m, 2) - 3 * m) + sr - sr * da + dr;
      } else if (2 * sr > sa && 4 * dr > da) {
        or2 = da * (2 * sr - sa) * (pow2(m, 0.5) - m) + sr - sr * da + dr;
      }
      m = dg / da;
      if (2 * sg <= sa) {
        og = dg * (sa + (2 * sg - sa) * (1 - m)) + sg * (1 - da) + dg * (1 - sa);
      } else if (2 * sg > sa && 4 * dg <= da) {
        og = da * (2 * sg - sa) * (16 * pow2(m, 3) - 12 * pow2(m, 2) - 3 * m) + sg - sg * da + dg;
      } else if (2 * sg > sa && 4 * dg > da) {
        og = da * (2 * sg - sa) * (pow2(m, 0.5) - m) + sg - sg * da + dg;
      }
      m = db / da;
      if (2 * sb <= sa) {
        ob = db * (sa + (2 * sb - sa) * (1 - m)) + sb * (1 - da) + db * (1 - sa);
      } else if (2 * sb > sa && 4 * db <= da) {
        ob = da * (2 * sb - sa) * (16 * pow2(m, 3) - 12 * pow2(m, 2) - 3 * m) + sb - sb * da + db;
      } else if (2 * sb > sa && 4 * db > da) {
        ob = da * (2 * sb - sa) * (pow2(m, 0.5) - m) + sb - sb * da + db;
      }
    }
    function _svg_hardlight() {
      if (2 * sr <= sa) {
        or2 = 2 * sr * dr + sr * (1 - da) + dr * (1 - sa);
      } else {
        or2 = sr * (1 + da) + dr * (1 + sa) - sa * da - 2 * sr * dr;
      }
      if (2 * sg <= sa) {
        og = 2 * sg * dg + sg * (1 - da) + dg * (1 - sa);
      } else {
        og = sg * (1 + da) + dg * (1 + sa) - sa * da - 2 * sg * dg;
      }
      if (2 * sb <= sa) {
        ob = 2 * sb * db + sb * (1 - da) + db * (1 - sa);
      } else {
        ob = sb * (1 + da) + db * (1 + sa) - sa * da - 2 * sb * db;
      }
    }
    function _svg_colordodge() {
      if (da === 0) {
        or2 = sr;
        og = sg;
        ob = sb;
        return;
      }
      if (sr === sa && dr === 0) {
        or2 = sr * (1 - da);
      } else if (sr === sa) {
        or2 = sa * da + sr * (1 - da) + dr * (1 - sa);
      } else if (sr < sa) {
        or2 = sa * da * min2(1, dr / da * sa / (sa - sr)) + sr * (1 - da) + dr * (1 - sa);
      }
      if (sg === sa && dg === 0) {
        og = sg * (1 - da);
      } else if (sr === sa) {
        og = sa * da + sg * (1 - da) + dg * (1 - sa);
      } else if (sr < sa) {
        og = sa * da * min2(1, dg / da * sa / (sa - sg)) + sg * (1 - da) + dg * (1 - sa);
      }
      if (sb === sa && db === 0) {
        ob = sb * (1 - da);
      } else if (sr === sa) {
        ob = sa * da + sb * (1 - da) + db * (1 - sa);
      } else if (sr < sa) {
        ob = sa * da * min2(1, db / da * sa / (sa - sb)) + sb * (1 - da) + db * (1 - sa);
      }
    }
    function _svg_colorburn() {
      if (da === 0) {
        or2 = sr;
        og = sg;
        ob = sb;
        return;
      }
      if (sr === 0 && dr === da) {
        or2 = sa * da + dr * (1 - sa);
      } else if (sr === 0) {
        or2 = dr * (1 - sa);
      } else if (sr > 0) {
        or2 = sa * da * (1 - min2(1, (1 - dr / da) * sa / sr)) + sr * (1 - da) + dr * (1 - sa);
      }
      if (sg === 0 && dg === da) {
        og = sa * da + dg * (1 - sa);
      } else if (sg === 0) {
        og = dg * (1 - sa);
      } else if (sg > 0) {
        og = sa * da * (1 - min2(1, (1 - dg / da) * sa / sg)) + sg * (1 - da) + dg * (1 - sa);
      }
      if (sb === 0 && db === da) {
        ob = sa * da + db * (1 - sa);
      } else if (sb === 0) {
        ob = db * (1 - sa);
      } else if (sb > 0) {
        ob = sa * da * (1 - min2(1, (1 - db / da) * sa / sb)) + sb * (1 - da) + db * (1 - sa);
      }
    }
    function _linearlight() {
      const dr1 = 2 * sr + dr - 256;
      const dg1 = 2 * sg + dg - 256;
      const db1 = 2 * sb + db - 256;
      or2 = dr1 < 0 || sr < 128 && dr1 < 0 ? 0 : dr1 > 255 ? 255 : dr1;
      og = dg1 < 0 || sg < 128 && dg1 < 0 ? 0 : dg1 > 255 ? 255 : dg1;
      ob = db1 < 0 || sb < 128 && db1 < 0 ? 0 : db1 > 255 ? 255 : db1;
    }
    function _vividlight() {
      let a;
      if (sr < 128) {
        if (sr) {
          a = 255 - (255 - dr << 8) / (2 * sr);
          or2 = a < 0 ? 0 : a;
        } else {
          or2 = 0;
        }
      } else {
        a = 2 * sr - 256;
        if (a < 255) {
          a = (dr << 8) / (255 - a);
          or2 = a > 255 ? 255 : a;
        } else {
          or2 = a < 0 ? 0 : a;
        }
      }
      if (sg < 128) {
        if (sg) {
          a = 255 - (255 - dg << 8) / (2 * sg);
          og = a < 0 ? 0 : a;
        } else {
          og = 0;
        }
      } else {
        a = 2 * sg - 256;
        if (a < 255) {
          a = (dg << 8) / (255 - a);
          og = a > 255 ? 255 : a;
        } else {
          og = a < 0 ? 0 : a;
        }
      }
      if (sb < 128) {
        if (sb) {
          a = 255 - (255 - db << 8) / (2 * sb);
          ob = a < 0 ? 0 : a;
        } else {
          ob = 0;
        }
      } else {
        a = 2 * sb - 256;
        if (a < 255) {
          a = (db << 8) / (255 - a);
          ob = a > 255 ? 255 : a;
        } else {
          ob = a < 0 ? 0 : a;
        }
      }
    }
    function _pinlight() {
      let a;
      if (sr < 128) {
        a = 2 * sr;
        or2 = dr < a ? dr : a;
      } else {
        a = 2 * sr - 256;
        or2 = dr > a ? dr : a;
      }
      if (sg < 128) {
        a = 2 * sg;
        og = dg < a ? dg : a;
      } else {
        a = 2 * sg - 256;
        og = dg > a ? dg : a;
      }
      if (sb < 128) {
        a = 2 * sb;
        ob = db < a ? db : a;
      } else {
        a = 2 * sb - 256;
        ob = db > a ? db : a;
      }
    }
    function _hardmix() {
      let a;
      if (sr < 128) {
        or2 = 255 - (255 - dr << 8) / (2 * sr) < 128 || sr === 0 ? 0 : 255;
      } else {
        a = 2 * sr - 256;
        or2 = a < 255 && (dr << 8) / (255 - a) < 128 ? 0 : 255;
      }
      if (sg < 128) {
        og = 255 - (255 - dg << 8) / (2 * sg) < 128 || sg === 0 ? 0 : 255;
      } else {
        a = 2 * sg - 256;
        og = a < 255 && (dg << 8) / (255 - a) < 128 ? 0 : 255;
      }
      if (sb < 128) {
        ob = 255 - (255 - db << 8) / (2 * sb) < 128 || sb === 0 ? 0 : 255;
      } else {
        a = 2 * sb - 256;
        ob = a < 255 && (db << 8) / (255 - a) < 128 ? 0 : 255;
      }
    }
    function _hue() {
      const hcl1 = rgbToHsy(dr, dg, db);
      const hcl2 = rgbToHsy(sr, sg, sb);
      const rgb = hsyToRgb(hcl2[0], hcl1[1], hcl1[2]);
      or2 = rgb[0];
      og = rgb[1];
      ob = rgb[2];
    }
    function _saturation() {
      const hcl1 = rgbToHsy(dr, dg, db);
      const hcl2 = rgbToHsy(sr, sg, sb);
      const rgb = hsyToRgb(hcl1[0], hcl2[1], hcl1[2]);
      or2 = rgb[0];
      og = rgb[1];
      ob = rgb[2];
    }
    function _luminosity() {
      const hcl1 = rgbToHsy(dr, dg, db);
      const hcl2 = rgbToHsy(sr, sg, sb);
      const rgb = hsyToRgb(hcl1[0], hcl1[1], hcl2[2]);
      or2 = rgb[0];
      og = rgb[1];
      ob = rgb[2];
    }
    function _color() {
      const hcl1 = rgbToHsy(dr, dg, db);
      const hcl2 = rgbToHsy(sr, sg, sb);
      const rgb = hsyToRgb(hcl2[0], hcl2[1], hcl1[2]);
      or2 = rgb[0];
      og = rgb[1];
      ob = rgb[2];
    }
    blend_fn = {
      "source-over": _svg_sourceover,
      multiply: _svg_multiply,
      subtract: _svg_subtract,
      divide: _divide,
      screen: _svg_screen,
      lighten: _svg_lighten,
      darken: _svg_darken,
      "darker-color": _svg_darkercolor,
      "lighter-color": _svg_lightercolor,
      add: _add,
      "linear-burn": _linearburn,
      difference: _svg_difference,
      exclusion: _svg_exclusion,
      overlay: _svg_overlay,
      "soft-light": _svg_softlight,
      "hard-light": _svg_hardlight,
      "color-dodge": _svg_colordodge,
      "color-burn": _svg_colorburn,
      "linear-light": _linearlight,
      "vivid-light": _vividlight,
      "pin-light": _pinlight,
      "hard-mix": _hardmix,
      hue: _hue,
      saturation: _saturation,
      luminosity: _luminosity,
      color: _color
    };
    function rectIntersect2(r1, r2) {
      const right1 = r1.x + r1.width;
      const bottom1 = r1.y + r1.height;
      const right2 = r2.x + r2.width;
      const bottom2 = r2.y + r2.height;
      const x = max2(r1.x, r2.x);
      const y = max2(r1.y, r2.y);
      const w = max2(min2(right1, right2) - x, 0);
      const h = max2(min2(bottom1, bottom2) - y, 0);
      return [x, y, w, h];
    }
    (function() {
      let pix, pixIn, x, y, a, a2, da2, demultiply, fBlend;
      const data2 = options.data;
      const opacity = options.opacity === 0 ? 0 : options.opacity || 1;
      const fn = blend_fn[options.type || "_svg_normal"];
      const dx = options.dx || 0;
      const dy = options.dy || 0;
      const ri = rectIntersect2(
        { x: 0, y: 0, width, height },
        { x: dx, y: dy, width: options.width, height: options.height }
      );
      const xi = ri[0];
      const yi = ri[1];
      const wi = ri[2];
      const hi = ri[3];
      function pBlend() {
        sa = data2[pixIn + 3] / 255 * opacity;
        da = inData[pix + 3] / 255;
        da2 = sa + da - sa * da;
        demultiply = 255 / da2;
        sr = data2[pixIn] / 255 * sa;
        sg = data2[pixIn + 1] / 255 * sa;
        sb = data2[pixIn + 2] / 255 * sa;
        dr = inData[pix] / 255 * da;
        dg = inData[pix + 1] / 255 * da;
        db = inData[pix + 2] / 255 * da;
        fn();
        outData[pix] = or2 * demultiply;
        outData[pix + 1] = og * demultiply;
        outData[pix + 2] = ob * demultiply;
        outData[pix + 3] = da2 * 255;
      }
      function sBlend() {
        dr = inData[pix];
        dg = inData[pix + 1];
        db = inData[pix + 2];
        sr = data2[pixIn];
        sg = data2[pixIn + 1];
        sb = data2[pixIn + 2];
        fn();
        outData[pix] = or2;
        outData[pix + 1] = og;
        outData[pix + 2] = ob;
        outData[pix + 3] = inData[pix + 3];
        a = opacity * data2[pixIn + 3] / 255;
        if (a < 1) {
          a2 = 1 - a;
          outData[pix] = inData[pix] * a2 + outData[pix] * a;
          outData[pix + 1] = inData[pix + 1] * a2 + outData[pix + 1] * a;
          outData[pix + 2] = inData[pix + 2] * a2 + outData[pix + 2] * a;
        }
      }
      fBlend = fn.name.indexOf("_svg_") === 0 ? pBlend : sBlend;
      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pix = (y * width + x) * 4;
          if (y >= yi && x >= xi && x < xi + wi && y < yi + hi) {
            pixIn = ((y - dy) * options.width + x - dx) * 4;
            fBlend();
          } else {
            outData[pix] = inData[pix];
            outData[pix + 1] = inData[pix + 1];
            outData[pix + 2] = inData[pix + 2];
            outData[pix + 3] = inData[pix + 3];
          }
        }
      }
    })();
  };
  function _blend(inData, outData, width, height, options) {
    process2(inData, outData, width, height, options);
  }
  function _wrap(type) {
    return function(inData, outData, width, height, options) {
      options.type = type;
      _blend(inData, outData, width, height, options);
    };
  }
  var blend = function() {
    let mode;
    const d = { blend: _blend };
    let modes = [
      "source-over",
      "add",
      "multiply",
      "subtract",
      "divide",
      "screen",
      "lighten",
      "darken",
      "darker-color",
      "lighter-color",
      "linear-burn",
      "difference",
      "exclusion",
      "overlay",
      "soft-light",
      "hard-light",
      "color-dodge",
      "color-burn",
      "linear-light",
      "vivid-light",
      "pin-light",
      "hard-mix",
      "hue",
      "saturation",
      "luminosity",
      "color"
    ];
    for (let i = 0; i < modes.length; i += 1) {
      mode = modes[i];
      d[mode] = _wrap(mode);
    }
    addAliases(d);
    d.getNativeModes = getNativeModes;
    d.realBlendMode = realBlendMode;
    return d;
  }();
  var blend_default = blend;

  // src/libraries/img/process.js
  var import_stackblur = __toESM(require_stackblur(), 1);
  var LUMINOSITY_ITU_R_BT601 = "ITU-R BT.601";
  var LUMINOSITY_ITU_R_BT709 = "ITU-R BT.709";
  function defaultOptions(options, defaults) {
    if (!options) {
      return defaults;
    }
    let opt, o = {};
    for (opt in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, opt)) {
        if (typeof options[opt] === "undefined") {
          o[opt] = defaults[opt];
        } else {
          o[opt] = options[opt];
        }
      }
    }
    return o;
  }
  function smoothstep(a, b, x) {
    if (x < a) {
      return 0;
    }
    if (x >= b) {
      return 1;
    }
    x = (x - a) / (b - a);
    return x * x * (3 - 2 * x);
  }
  function convolve3x3(inData, outData, width, height, kernel, alpha, invert2, mono) {
    let x, y, idx, r, g2, b, a, pyc, pyp, pyn, pxc, pxp, pxn, k00 = kernel[0][0], k01 = kernel[0][1], k02 = kernel[0][2], k10 = kernel[1][0], k11 = kernel[1][1], k12 = kernel[1][2], k20 = kernel[2][0], k21 = kernel[2][1], k22 = kernel[2][2], p00, p01, p02, p10, p11, p12, p20, p21, p22;
    for (y = 0; y < height; y += 1) {
      pyc = y * width * 4;
      pyp = pyc - width * 4;
      pyn = pyc + width * 4;
      if (y < 1) {
        pyp = pyc;
      }
      if (y >= width - 1) {
        pyn = pyc;
      }
      for (x = 0; x < width; x += 1) {
        idx = (y * width + x) * 4;
        pxc = x * 4;
        pxp = pxc - 4;
        pxn = pxc + 4;
        if (x < 1) {
          pxp = pxc;
        }
        if (x >= width - 1) {
          pxn = pxc;
        }
        p00 = pyp + pxp;
        p01 = pyp + pxc;
        p02 = pyp + pxn;
        p10 = pyc + pxp;
        p11 = pyc + pxc;
        p12 = pyc + pxn;
        p20 = pyn + pxp;
        p21 = pyn + pxc;
        p22 = pyn + pxn;
        r = inData[p00] * k00 + inData[p01] * k01 + inData[p02] * k02 + inData[p10] * k10 + inData[p11] * k11 + inData[p12] * k12 + inData[p20] * k20 + inData[p21] * k21 + inData[p22] * k22;
        g2 = inData[p00 + 1] * k00 + inData[p01 + 1] * k01 + inData[p02 + 1] * k02 + inData[p10 + 1] * k10 + inData[p11 + 1] * k11 + inData[p12 + 1] * k12 + inData[p20 + 1] * k20 + inData[p21 + 1] * k21 + inData[p22 + 1] * k22;
        b = inData[p00 + 2] * k00 + inData[p01 + 2] * k01 + inData[p02 + 2] * k02 + inData[p10 + 2] * k10 + inData[p11 + 2] * k11 + inData[p12 + 2] * k12 + inData[p20 + 2] * k20 + inData[p21 + 2] * k21 + inData[p22 + 2] * k22;
        if (alpha) {
          a = inData[p00 + 3] * k00 + inData[p01 + 3] * k01 + inData[p02 + 3] * k02 + inData[p10 + 3] * k10 + inData[p11 + 3] * k11 + inData[p12 + 3] * k12 + inData[p20 + 3] * k20 + inData[p21 + 3] * k21 + inData[p22 + 3] * k22;
        } else {
          a = inData[idx + 3];
        }
        if (mono) {
          r = g2 = b = (r + g2 + b) / 3;
        }
        if (invert2) {
          r = 255 - r;
          g2 = 255 - g2;
          b = 255 - b;
        }
        outData[idx] = r;
        outData[idx + 1] = g2;
        outData[idx + 2] = b;
        outData[idx + 3] = a;
      }
    }
  }
  function convolve5x5(inData, outData, width, height, kernel, alpha, invert2, mono) {
    let x, y, idx, r, g2, b, a, pyc, pyp, pyn, pypp, pynn, pxc, pxp, pxn, pxpp, pxnn, k00 = kernel[0][0], k01 = kernel[0][1], k02 = kernel[0][2], k03 = kernel[0][3], k04 = kernel[0][4], k10 = kernel[1][0], k11 = kernel[1][1], k12 = kernel[1][2], k13 = kernel[1][3], k14 = kernel[1][4], k20 = kernel[2][0], k21 = kernel[2][1], k22 = kernel[2][2], k23 = kernel[2][3], k24 = kernel[2][4], k30 = kernel[3][0], k31 = kernel[3][1], k32 = kernel[3][2], k33 = kernel[3][3], k34 = kernel[3][4], k40 = kernel[4][0], k41 = kernel[4][1], k42 = kernel[4][2], k43 = kernel[4][3], k44 = kernel[4][4], p00, p01, p02, p03, p04, p10, p11, p12, p13, p14, p20, p21, p22, p23, p24, p30, p31, p32, p33, p34, p40, p41, p42, p43, p44;
    for (y = 0; y < height; y += 1) {
      pyc = y * width * 4;
      pyp = pyc - width * 4;
      pypp = pyc - width * 4 * 2;
      pyn = pyc + width * 4;
      pynn = pyc + width * 4 * 2;
      if (y < 1) {
        pyp = pyc;
      }
      if (y >= width - 1) {
        pyn = pyc;
      }
      if (y < 2) {
        pypp = pyp;
      }
      if (y >= width - 2) {
        pynn = pyn;
      }
      for (x = 0; x < width; x += 1) {
        idx = (y * width + x) * 4;
        pxc = x * 4;
        pxp = pxc - 4;
        pxn = pxc + 4;
        pxpp = pxc - 8;
        pxnn = pxc + 8;
        if (x < 1) {
          pxp = pxc;
        }
        if (x >= width - 1) {
          pxn = pxc;
        }
        if (x < 2) {
          pxpp = pxp;
        }
        if (x >= width - 2) {
          pxnn = pxn;
        }
        p00 = pypp + pxpp;
        p01 = pypp + pxp;
        p02 = pypp + pxc;
        p03 = pypp + pxn;
        p04 = pypp + pxnn;
        p10 = pyp + pxpp;
        p11 = pyp + pxp;
        p12 = pyp + pxc;
        p13 = pyp + pxn;
        p14 = pyp + pxnn;
        p20 = pyc + pxpp;
        p21 = pyc + pxp;
        p22 = pyc + pxc;
        p23 = pyc + pxn;
        p24 = pyc + pxnn;
        p30 = pyn + pxpp;
        p31 = pyn + pxp;
        p32 = pyn + pxc;
        p33 = pyn + pxn;
        p34 = pyn + pxnn;
        p40 = pynn + pxpp;
        p41 = pynn + pxp;
        p42 = pynn + pxc;
        p43 = pynn + pxn;
        p44 = pynn + pxnn;
        r = inData[p00] * k00 + inData[p01] * k01 + inData[p02] * k02 + inData[p03] * k03 + inData[p04] * k04 + inData[p10] * k10 + inData[p11] * k11 + inData[p12] * k12 + inData[p13] * k13 + inData[p14] * k14 + inData[p20] * k20 + inData[p21] * k21 + inData[p22] * k22 + inData[p23] * k23 + inData[p24] * k24 + inData[p30] * k30 + inData[p31] * k31 + inData[p32] * k32 + inData[p33] * k33 + inData[p34] * k34 + inData[p40] * k40 + inData[p41] * k41 + inData[p42] * k42 + inData[p43] * k43 + inData[p44] * k44;
        g2 = inData[p00 + 1] * k00 + inData[p01 + 1] * k01 + inData[p02 + 1] * k02 + inData[p03 + 1] * k03 + inData[p04 + 1] * k04 + inData[p10 + 1] * k10 + inData[p11 + 1] * k11 + inData[p12 + 1] * k12 + inData[p13 + 1] * k13 + inData[p14 + 1] * k14 + inData[p20 + 1] * k20 + inData[p21 + 1] * k21 + inData[p22 + 1] * k22 + inData[p23 + 1] * k23 + inData[p24 + 1] * k24 + inData[p30 + 1] * k30 + inData[p31 + 1] * k31 + inData[p32 + 1] * k32 + inData[p33 + 1] * k33 + inData[p34 + 1] * k34 + inData[p40 + 1] * k40 + inData[p41 + 1] * k41 + inData[p42 + 1] * k42 + inData[p43 + 1] * k43 + inData[p44 + 1] * k44;
        b = inData[p00 + 2] * k00 + inData[p01 + 2] * k01 + inData[p02 + 2] * k02 + inData[p03 + 2] * k03 + inData[p04 + 2] * k04 + inData[p10 + 2] * k10 + inData[p11 + 2] * k11 + inData[p12 + 2] * k12 + inData[p13 + 2] * k13 + inData[p14 + 2] * k14 + inData[p20 + 2] * k20 + inData[p21 + 2] * k21 + inData[p22 + 2] * k22 + inData[p23 + 2] * k23 + inData[p24 + 2] * k24 + inData[p30 + 2] * k30 + inData[p31 + 2] * k31 + inData[p32 + 2] * k32 + inData[p33 + 2] * k33 + inData[p34 + 2] * k34 + inData[p40 + 2] * k40 + inData[p41 + 2] * k41 + inData[p42 + 2] * k42 + inData[p43 + 2] * k43 + inData[p44 + 2] * k44;
        if (alpha) {
          a = inData[p00 + 3] * k00 + inData[p01 + 3] * k01 + inData[p02 + 3] * k02 + inData[p03 + 3] * k03 + inData[p04 + 3] * k04 + inData[p10 + 3] * k10 + inData[p11 + 3] * k11 + inData[p12 + 3] * k12 + inData[p13 + 3] * k13 + inData[p14 + 3] * k14 + inData[p20 + 3] * k20 + inData[p21 + 3] * k21 + inData[p22 + 3] * k22 + inData[p23 + 3] * k23 + inData[p24 + 3] * k24 + inData[p30 + 3] * k30 + inData[p31 + 3] * k31 + inData[p32 + 3] * k32 + inData[p33 + 3] * k33 + inData[p34 + 3] * k34 + inData[p40 + 3] * k40 + inData[p41 + 3] * k41 + inData[p42 + 3] * k42 + inData[p43 + 3] * k43 + inData[p44 + 3] * k44;
        } else {
          a = inData[idx + 3];
        }
        if (mono) {
          r = g2 = b = (r + g2 + b) / 3;
        }
        if (invert2) {
          r = 255 - r;
          g2 = 255 - g2;
          b = 255 - b;
        }
        outData[idx] = r;
        outData[idx + 1] = g2;
        outData[idx + 2] = b;
        outData[idx + 3] = a;
      }
    }
  }
  function gaussian(inData, outData, width, height, kernelSize) {
    let x, y, i, j, r, g2, b, a, idx, inx, iny, w, tmpData = [], maxKernelSize = 13, k1, k2, weights, kernels = [[1]];
    kernelSize = clamp3(kernelSize, 3, maxKernelSize);
    k1 = -kernelSize / 2 + (kernelSize % 2 ? 0.5 : 0);
    k2 = kernelSize + k1;
    for (i = 1; i < maxKernelSize; i += 1) {
      kernels[0][i] = 0;
    }
    for (i = 1; i < maxKernelSize; i += 1) {
      kernels[i] = [1];
      for (j = 1; j < maxKernelSize; j += 1) {
        kernels[i][j] = kernels[i - 1][j] + kernels[i - 1][j - 1];
      }
    }
    weights = kernels[kernelSize - 1];
    for (i = 0, w = 0; i < kernelSize; i += 1) {
      w += weights[i];
    }
    for (i = 0; i < kernelSize; i += 1) {
      weights[i] /= w;
    }
    for (y = 0; y < height; y += 1) {
      for (x = 0; x < width; x += 1) {
        r = g2 = b = a = 0;
        for (i = k1; i < k2; i += 1) {
          inx = x + i;
          iny = y;
          w = weights[i - k1];
          if (inx < 0) {
            inx = 0;
          }
          if (inx >= width) {
            inx = width - 1;
          }
          idx = (iny * width + inx) * 4;
          r += inData[idx] * w;
          g2 += inData[idx + 1] * w;
          b += inData[idx + 2] * w;
          a += inData[idx + 3] * w;
        }
        idx = (y * width + x) * 4;
        tmpData[idx] = r;
        tmpData[idx + 1] = g2;
        tmpData[idx + 2] = b;
        tmpData[idx + 3] = a;
      }
    }
    for (y = 0; y < height; y += 1) {
      for (x = 0; x < width; x += 1) {
        r = g2 = b = a = 0;
        for (i = k1; i < k2; i += 1) {
          inx = x;
          iny = y + i;
          w = weights[i - k1];
          if (iny < 0) {
            iny = 0;
          }
          if (iny >= height) {
            iny = height - 1;
          }
          idx = (iny * width + inx) * 4;
          r += tmpData[idx] * w;
          g2 += tmpData[idx + 1] * w;
          b += tmpData[idx + 2] * w;
          a += tmpData[idx + 3] * w;
        }
        idx = (y * width + x) * 4;
        outData[idx] = r;
        outData[idx + 1] = g2;
        outData[idx + 2] = b;
        outData[idx + 3] = a;
      }
    }
  }
  function getPixel(v, i) {
    i *= 4;
    return [v[i + 0], v[i + 1], v[i + 2], v[i + 3]];
  }
  function setPixel(v, i, rgba) {
    i *= 4;
    v[i + 0] = rgba[0];
    v[i + 1] = rgba[1];
    v[i + 2] = rgba[2];
    v[i + 3] = rgba[3];
  }
  function polar(inData, outData, x0, y0, width, height, callback) {
    x0 = width / 2 + (x0 || 0);
    y0 = height / 2 + (y0 || 0);
    let y1, x1, x, y, d, a, v;
    for (y1 = 0; y1 < height; y1 += 1) {
      for (x1 = 0; x1 < width; x1 += 1) {
        x = x1 - x0;
        y = y1 - y0;
        d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        a = Math.atan2(y, x);
        v = callback(d, a);
        d = v[0];
        a = v[1];
        setPixel(
          outData,
          x1 + y1 * width,
          getPixel(
            inData,
            Math.round(x0 + Math.cos(a) * d) + Math.round(y0 + Math.sin(a) * d) * width
          )
        );
      }
    }
  }
  var process3 = {
    invert: function(inData, outData, width, height) {
      let i, n = width * height * 4;
      for (i = 0; i < n; i += 4) {
        outData[i] = 255 - inData[i];
        outData[i + 1] = 255 - inData[i + 1];
        outData[i + 2] = 255 - inData[i + 2];
        outData[i + 3] = inData[i + 3];
      }
    },
    sepia: function(inData, outData, width, height) {
      let i, n = width * height * 4, r, g2, b;
      for (i = 0; i < n; i += 4) {
        r = inData[i];
        g2 = inData[i + 1];
        b = inData[i + 2];
        outData[i] = r * 0.393 + g2 * 0.769 + b * 0.189;
        outData[i + 1] = r * 0.349 + g2 * 0.686 + b * 0.168;
        outData[i + 2] = r * 0.272 + g2 * 0.534 + b * 0.131;
        outData[i + 3] = inData[i + 3];
      }
    },
    solarize: function(inData, outData, width, height) {
      let i, n = width * height * 4, r, g2, b;
      for (i = 0; i < n; i += 4) {
        r = inData[i];
        g2 = inData[i + 1];
        b = inData[i + 2];
        outData[i] = r > 127 ? 255 - r : r;
        outData[i + 1] = g2 > 127 ? 255 - g2 : g2;
        outData[i + 2] = b > 127 ? 255 - b : b;
        outData[i + 3] = inData[i + 3];
      }
    },
    brightness: function(inData, outData, width, height, options) {
      options = defaultOptions(options, {
        brightness: 1,
        contrast: 0
      });
      let i, n = width * height * 4, r, g2, b, contrast = clamp3(options.contrast, -1, 1) / 2, brightness = 1 + clamp3(options.brightness, -1, 1), brightMul = brightness < 0 ? -brightness : brightness, brightAdd = brightness < 0 ? 0 : brightness, contrastAdd;
      contrast = 0.5 * Math.tan((contrast + 1) * Math.PI / 4);
      contrastAdd = -(contrast - 0.5) * 255;
      for (i = 0; i < n; i += 4) {
        r = inData[i];
        g2 = inData[i + 1];
        b = inData[i + 2];
        r = (r + r * brightMul + brightAdd) * contrast + contrastAdd;
        g2 = (g2 + g2 * brightMul + brightAdd) * contrast + contrastAdd;
        b = (b + b * brightMul + brightAdd) * contrast + contrastAdd;
        outData[i] = r;
        outData[i + 1] = g2;
        outData[i + 2] = b;
        outData[i + 3] = inData[i + 3];
      }
    },
    desaturate: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { method: LUMINOSITY_ITU_R_BT601 });
      let i, n = width * height * 4, level, rCoeff, gCoeff, bCoeff;
      if (options.method === LUMINOSITY_ITU_R_BT601) {
        rCoeff = 0.3;
        gCoeff = 0.59;
        bCoeff = 0.11;
      } else if (options.method === LUMINOSITY_ITU_R_BT709) {
        rCoeff = 0.2125;
        gCoeff = 0.7154;
        bCoeff = 0.0721;
      }
      for (i = 0; i < n; i += 4) {
        level = inData[i] * rCoeff + inData[i + 1] * gCoeff + inData[i + 2] * bCoeff;
        outData[i] = level;
        outData[i + 1] = level;
        outData[i + 2] = level;
        outData[i + 3] = inData[i + 3];
      }
    },
    lighten: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { amount: 0.25 });
      let i, n = width * height * 4, mul = 1 + clamp3(options.amount, 0, 1);
      for (i = 0; i < n; i += 4) {
        outData[i] = inData[i] * mul;
        outData[i + 1] = inData[i + 1] * mul;
        outData[i + 2] = inData[i + 2] * mul;
        outData[i + 3] = inData[i + 3];
      }
    },
    noise: function(inData, outData, width, height, options) {
      options = defaultOptions(options, {
        amount: 0.5,
        strength: 0.5,
        mono: false
      });
      let i, n = width * height * 4, rnd, r, g2, b, amount = clamp3(options.amount, 0, 1), strength = clamp3(options.strength, 0, 1), mono = !!options.mono, random = Math.random;
      for (i = 0; i < n; i += 4) {
        r = inData[i];
        g2 = inData[i + 1];
        b = inData[i + 2];
        rnd = random();
        if (rnd < amount) {
          if (mono) {
            rnd = strength * (rnd / amount * 2 - 1) * 255;
            r += rnd;
            g2 += rnd;
            b += rnd;
          } else {
            r += strength * random() * 255;
            g2 += strength * random() * 255;
            b += strength * random() * 255;
          }
        }
        outData[i] = r;
        outData[i + 1] = g2;
        outData[i + 2] = b;
        outData[i + 3] = inData[i + 3];
      }
    },
    flipv: function(inData, outData, width, height) {
      let x, y, inPix, outPix;
      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          inPix = (y * width + x) * 4;
          outPix = (y * width + (width - x - 1)) * 4;
          outData[outPix] = inData[inPix];
          outData[outPix + 1] = inData[inPix + 1];
          outData[outPix + 2] = inData[inPix + 2];
          outData[outPix + 3] = inData[inPix + 3];
        }
      }
    },
    fliph: function(inData, outData, width, height) {
      let x, y, inPix, outPix;
      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          inPix = (y * width + x) * 4;
          outPix = ((height - y - 1) * width + x) * 4;
          outData[outPix] = inData[inPix];
          outData[outPix + 1] = inData[inPix + 1];
          outData[outPix + 2] = inData[inPix + 2];
          outData[outPix + 3] = inData[inPix + 3];
        }
      }
    },
    // Uses fast stackblur algorithm from http://www.quasimondo.com/StackBlurForCanvas
    blur: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { radius: 10 });
      for (let i = 0; i < inData.length; i += 1) {
        outData[i] = inData[i];
      }
      (0, import_stackblur.default)(outData, width, height, options.radius);
    },
    glow: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { amount: 0.75, kernelSize: 5 });
      let i, n = width * height * 4, r, g2, b, amount = options.amount, tmpData = [];
      gaussian(inData, tmpData, width, height, options.kernelSize);
      for (i = 0; i < n; i += 4) {
        r = inData[i] + tmpData[i] * amount;
        g2 = inData[i + 1] + tmpData[i + 1] * amount;
        b = inData[i + 2] + tmpData[i + 2] * amount;
        if (r > 255) {
          r = 255;
        }
        if (g2 > 255) {
          g2 = 255;
        }
        if (b > 255) {
          b = 255;
        }
        outData[i] = r;
        outData[i + 1] = g2;
        outData[i + 2] = b;
        outData[i + 3] = inData[i + 3];
      }
    },
    convolve3x3: function(inData, outData, width, height, options) {
      convolve3x3(inData, outData, width, height, options.kernel);
    },
    convolve5x5: function(inData, outData, width, height, options) {
      convolve5x5(inData, outData, width, height, options.kernel);
    },
    // A 3x3 high-pass filter
    sharpen3x3: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { strength: 1 });
      const a = -clamp3(options.strength, 0, 1);
      convolve3x3(inData, outData, width, height, [
        [a, a, a],
        [a, 1 - a * 8, a],
        [a, a, a]
      ]);
    },
    // A 5x5 high-pass filter
    sharpen5x5: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { strength: 1 });
      const a = -clamp3(options.strength, 0, 1);
      convolve5x5(inData, outData, width, height, [
        [a, a, a, a, a],
        [a, a, a, a, a],
        [a, a, 1 - a * 24, a, a],
        [a, a, a, a, a],
        [a, a, a, a, a]
      ]);
    },
    // A 3x3 low-pass mean filter
    soften3x3: function(inData, outData, width, height) {
      const c = 1 / 9;
      convolve3x3(inData, outData, width, height, [
        [c, c, c],
        [c, c, c],
        [c, c, c]
      ]);
    },
    // A 5x5 low-pass mean filter
    soften5x5: function(inData, outData, width, height) {
      const c = 1 / 25;
      convolve5x5(inData, outData, width, height, [
        [c, c, c, c, c],
        [c, c, c, c, c],
        [c, c, c, c, c],
        [c, c, c, c, c],
        [c, c, c, c, c]
      ]);
    },
    // A 3x3 Cross edge-detect
    crossedges: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { strength: 1 });
      const a = clamp3(options.strength, 0, 1) * 5;
      convolve3x3(
        inData,
        outData,
        width,
        height,
        [
          [0, -a, 0],
          [-a, 0, a],
          [0, a, 0]
        ],
        false,
        true
      );
    },
    // 3x3 directional emboss
    emboss: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { amount: 1, angle: 0 });
      let i, n = width * height * 4, amount = options.amount, angle3 = options.angle, x = Math.cos(-angle3) * amount, y = Math.sin(-angle3) * amount, a00 = -x - y, a10 = -x, a20 = y - x, a01 = -y, a21 = y, a02 = -y + x, a12 = x, a22 = y + x, tmpData = [];
      convolve3x3(inData, tmpData, width, height, [
        [a00, a01, a02],
        [a10, 0, a12],
        [a20, a21, a22]
      ]);
      for (i = 0; i < n; i += 4) {
        outData[i] = 128 + tmpData[i];
        outData[i + 1] = 128 + tmpData[i + 1];
        outData[i + 2] = 128 + tmpData[i + 2];
        outData[i + 3] = inData[i + 3];
      }
    },
    // A 3x3 Sobel edge detect (similar to Photoshop's)
    findedges: function(inData, outData, width, height) {
      let i, n = width * height * 4, gr1, gr2, gg1, gg2, gb1, gb2, data1 = [], data2 = [];
      convolve3x3(inData, data1, width, height, [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1]
      ]);
      convolve3x3(inData, data2, width, height, [
        [-1, -2, -1],
        [0, 0, 0],
        [1, 2, 1]
      ]);
      for (i = 0; i < n; i += 4) {
        gr1 = data1[i];
        gr2 = data2[i];
        gg1 = data1[i + 1];
        gg2 = data2[i + 1];
        gb1 = data1[i + 2];
        gb2 = data2[i + 2];
        if (gr1 < 0) {
          gr1 = -gr1;
        }
        if (gr2 < 0) {
          gr2 = -gr2;
        }
        if (gg1 < 0) {
          gg1 = -gg1;
        }
        if (gg2 < 0) {
          gg2 = -gg2;
        }
        if (gb1 < 0) {
          gb1 = -gb1;
        }
        if (gb2 < 0) {
          gb2 = -gb2;
        }
        outData[i] = 255 - (gr1 + gr2) * 0.8;
        outData[i + 1] = 255 - (gg1 + gg2) * 0.8;
        outData[i + 2] = 255 - (gb1 + gb2) * 0.8;
        outData[i + 3] = inData[i + 3];
      }
    },
    // A 3x3 edge enhance
    edgeenhance3x3: function(inData, outData, width, height) {
      const c = -1 / 9;
      convolve3x3(inData, outData, width, height, [
        [c, c, c],
        [c, 17 / 9, c],
        [c, c, c]
      ]);
    },
    // A 5x5 edge enhance
    edgeenhance5x5: function(inData, outData, width, height) {
      const c = -1 / 25;
      convolve5x5(inData, outData, width, height, [
        [c, c, c, c, c],
        [c, c, c, c, c],
        [c, c, 49 / 25, c, c],
        [c, c, c, c, c],
        [c, c, c, c, c]
      ]);
    },
    // A 3x3 Laplacian edge-detect
    laplace3x3: function(inData, outData, width, height) {
      convolve3x3(
        inData,
        outData,
        width,
        height,
        [
          [-1, -1, -1],
          [-1, 8, -1],
          [-1, -1, -1]
        ],
        false,
        true,
        true
      );
    },
    // A 5x5 Laplacian edge-detect
    laplace5x5: function(inData, outData, width, height) {
      convolve5x5(
        inData,
        outData,
        width,
        height,
        [
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, 24, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1]
        ],
        false,
        true,
        true
      );
    },
    rgbAdjust: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { r: 0, g: 0, b: 0, a: 0 });
      let i, n = width * height * 4, r, g2, b, a, ar = clamp3(options.r, -1, 1) * 255, ag = clamp3(options.g, -1, 1) * 255, ab = clamp3(options.b, -1, 1) * 255, aa = clamp3(options.a, -1, 1) * 255;
      for (i = 0; i < n; i += 4) {
        r = inData[i] + ar;
        g2 = inData[i + 1] + ag;
        b = inData[i + 2] + ab;
        a = inData[i + 3] + aa;
        if (r < 0) {
          r = 0;
        }
        if (g2 < 0) {
          g2 = 0;
        }
        if (b < 0) {
          b = 0;
        }
        if (a < 0) {
          a = 0;
        }
        if (r > 255) {
          r = 255;
        }
        if (g2 > 255) {
          g2 = 255;
        }
        if (b > 255) {
          b = 255;
        }
        if (a > 255) {
          a = 255;
        }
        outData[i] = r;
        outData[i + 1] = g2;
        outData[i + 2] = b;
        outData[i + 3] = a;
      }
    },
    colorfilter: function(inData, outData, width, height, options) {
      options = defaultOptions(options, {
        luminosity: false,
        r: 1,
        g: 0.5,
        b: 0
      });
      let i, n = width * height * 4, r, g2, b, luminosity = !!options.luminosity, min2, max2, h, l, h1, chroma, tmp, ar = clamp3(options.r, 0, 1), ag = clamp3(options.g, 0, 1), ab = clamp3(options.b, 0, 1);
      for (i = 0; i < n; i += 4) {
        r = inData[i] / 255;
        g2 = inData[i + 1] / 255;
        b = inData[i + 2] / 255;
        l = r * 0.3 + g2 * 0.59 + b * 0.11;
        r = (r + r * ar) / 2;
        g2 = (g2 + g2 * ag) / 2;
        b = (b + b * ab) / 2;
        if (luminosity) {
          min2 = max2 = r;
          if (g2 > max2) {
            max2 = g2;
          }
          if (b > max2) {
            max2 = b;
          }
          if (g2 < min2) {
            min2 = g2;
          }
          if (b < min2) {
            min2 = b;
          }
          chroma = max2 - min2;
          if (r === max2) {
            h = (g2 - b) / chroma % 6;
          } else if (g2 === max2) {
            h = (b - r) / chroma + 2;
          } else {
            h = (r - g2) / chroma + 4;
          }
          h1 = h >> 0;
          tmp = chroma * (h - h1);
          r = g2 = b = l - (r * 0.3 + g2 * 0.59 + b * 0.11);
          if (h1 === 0) {
            r += chroma;
            g2 += tmp;
          } else if (h1 === 1) {
            r += chroma - tmp;
            g2 += chroma;
          } else if (h1 === 2) {
            g2 += chroma;
            b += tmp;
          } else if (h1 === 3) {
            g2 += chroma - tmp;
            b += chroma;
          } else if (h1 === 4) {
            r += tmp;
            b += chroma;
          } else if (h1 === 5) {
            r += chroma;
            b += chroma - tmp;
          }
        }
        outData[i] = r * 255;
        outData[i + 1] = g2 * 255;
        outData[i + 2] = b * 255;
        outData[i + 3] = inData[i + 3];
      }
    },
    hslAdjust: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { h: 0.5, s: 0.3, l: 0.1, a: 0 });
      let i, n = width * height * 4, r, g2, b, a, hue = clamp3(options.h, -1, 1), saturation = clamp3(options.s, -1, 1), lightness = clamp3(options.l, -1, 1), aa = clamp3(options.a, -1, 1) * 255, satMul = 1 + saturation * (saturation < 0 ? 1 : 2), lightMul = lightness < 0 ? 1 + lightness : 1 - lightness, lightAdd = lightness < 0 ? 0 : lightness * 255, vs, ms, vm, h, s, l, v, m, vmh, sextant;
      hue = hue * 6 % 6;
      for (i = 0; i < n; i += 4) {
        r = inData[i];
        g2 = inData[i + 1];
        b = inData[i + 2];
        a = inData[i + 3] + aa;
        if (hue !== 0 || saturation !== 0) {
          vs = r;
          if (g2 > vs) {
            vs = g2;
          }
          if (b > vs) {
            vs = b;
          }
          ms = r;
          if (g2 < ms) {
            ms = g2;
          }
          if (b < ms) {
            ms = b;
          }
          vm = vs - ms;
          l = (ms + vs) / 510;
          if (l > 0 && vm > 0) {
            if (l <= 0.5) {
              s = vm / (vs + ms) * satMul;
              if (s > 1) {
                s = 1;
              }
              v = l * (1 + s);
            } else {
              s = vm / (510 - vs - ms) * satMul;
              if (s > 1) {
                s = 1;
              }
              v = l + s - l * s;
            }
            if (r === vs) {
              if (g2 === ms) {
                h = 5 + (vs - b) / vm + hue;
              } else {
                h = 1 - (vs - g2) / vm + hue;
              }
            } else if (g2 === vs) {
              if (b === ms) {
                h = 1 + (vs - r) / vm + hue;
              } else {
                h = 3 - (vs - b) / vm + hue;
              }
            } else {
              if (r === ms) {
                h = 3 + (vs - g2) / vm + hue;
              } else {
                h = 5 - (vs - r) / vm + hue;
              }
            }
            if (h < 0) {
              h += 6;
            }
            if (h >= 6) {
              h -= 6;
            }
            m = l + l - v;
            sextant = h >> 0;
            vmh = (v - m) * (h - sextant);
            if (sextant === 0) {
              r = v;
              g2 = m + vmh;
              b = m;
            } else if (sextant === 1) {
              r = v - vmh;
              g2 = v;
              b = m;
            } else if (sextant === 2) {
              r = m;
              g2 = v;
              b = m + vmh;
            } else if (sextant === 3) {
              r = m;
              g2 = v - vmh;
              b = v;
            } else if (sextant === 4) {
              r = m + vmh;
              g2 = m;
              b = v;
            } else if (sextant === 5) {
              r = v;
              g2 = m;
              b = v - vmh;
            }
            r *= 255;
            g2 *= 255;
            b *= 255;
          }
        }
        r = r * lightMul + lightAdd;
        g2 = g2 * lightMul + lightAdd;
        b = b * lightMul + lightAdd;
        if (r < 0) {
          r = 0;
        }
        if (g2 < 0) {
          g2 = 0;
        }
        if (b < 0) {
          b = 0;
        }
        if (a < 0) {
          a = 0;
        }
        if (r > 255) {
          r = 255;
        }
        if (g2 > 255) {
          g2 = 255;
        }
        if (b > 255) {
          b = 255;
        }
        if (a > 255) {
          a = 255;
        }
        outData[i] = r;
        outData[i + 1] = g2;
        outData[i + 2] = b;
        outData[i + 3] = a;
      }
    },
    posterize: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { levels: 5 });
      let i, n = width * height * 4, numLevels = clamp3(options.levels, 2, 256), numAreas = 256 / numLevels, numValues = 256 / (numLevels - 1);
      for (i = 0; i < n; i += 4) {
        outData[i] = numValues * (inData[i] / numAreas >> 0);
        outData[i + 1] = numValues * (inData[i + 1] / numAreas >> 0);
        outData[i + 2] = numValues * (inData[i + 2] / numAreas >> 0);
        outData[i + 3] = inData[i + 3];
      }
    },
    removenoise: function(inData, outData, width, height) {
      let x, y, r, g2, b, c, idx, pyc, pyp, pyn, pxc, pxp, pxn, minR, minG, minB, maxR, maxG, maxB;
      for (y = 0; y < height; y += 1) {
        pyc = y * width * 4;
        pyp = pyc - width * 4;
        pyn = pyc + width * 4;
        if (y < 1) {
          pyp = pyc;
        }
        if (y >= width - 1) {
          pyn = pyc;
        }
        for (x = 0; x < width; x += 1) {
          idx = (y * width + x) * 4;
          pxc = x * 4;
          pxp = pxc - 4;
          pxn = pxc + 4;
          if (x < 1) {
            pxp = pxc;
          }
          if (x >= width - 1) {
            pxn = pxc;
          }
          minR = maxR = inData[pyc + pxp];
          c = inData[pyc + pxn];
          if (c < minR) {
            minR = c;
          }
          if (c > maxR) {
            maxR = c;
          }
          c = inData[pyp + pxc];
          if (c < minR) {
            minR = c;
          }
          if (c > maxR) {
            maxR = c;
          }
          c = inData[pyn + pxc];
          if (c < minR) {
            minR = c;
          }
          if (c > maxR) {
            maxR = c;
          }
          minG = maxG = inData[pyc + pxp + 1];
          c = inData[pyc + pxn + 1];
          if (c < minG) {
            minG = c;
          }
          if (c > maxG) {
            maxG = c;
          }
          c = inData[pyp + pxc + 1];
          if (c < minG) {
            minG = c;
          }
          if (c > maxG) {
            maxG = c;
          }
          c = inData[pyn + pxc + 1];
          if (c < minG) {
            minG = c;
          }
          if (c > maxG) {
            maxG = c;
          }
          minB = maxB = inData[pyc + pxp + 2];
          c = inData[pyc + pxn + 2];
          if (c < minB) {
            minB = c;
          }
          if (c > maxB) {
            maxB = c;
          }
          c = inData[pyp + pxc + 2];
          if (c < minB) {
            minB = c;
          }
          if (c > maxB) {
            maxB = c;
          }
          c = inData[pyn + pxc + 2];
          if (c < minB) {
            minB = c;
          }
          if (c > maxB) {
            maxB = c;
          }
          r = inData[idx];
          g2 = inData[idx + 1];
          b = inData[idx + 2];
          if (r < minR) {
            r = minR;
          }
          if (r > maxR) {
            r = maxR;
          }
          if (g2 < minG) {
            g2 = minG;
          }
          if (g2 > maxG) {
            g2 = maxG;
          }
          if (b < minB) {
            b = minB;
          }
          if (b > maxB) {
            b = maxB;
          }
          outData[idx] = r;
          outData[idx + 1] = g2;
          outData[idx + 2] = b;
          outData[idx + 3] = inData[idx + 3];
        }
      }
    },
    mosaic: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { blockSize: 8 });
      let blockSize = clamp3(options.blockSize, 1, Math.max(width, height)), yBlocks = Math.ceil(height / blockSize), xBlocks = Math.ceil(width / blockSize), y0, y1, x0, x1, idx, pidx, i, j, r, g2, b, bi, bj;
      y0 = 0;
      for (i = 0; i < yBlocks; i += 1) {
        y1 = clamp3(y0 + blockSize, 0, height);
        x0 = 0;
        for (j = 0; j < xBlocks; j += 1) {
          x1 = clamp3(x0 + blockSize, 0, width);
          idx = y0 * width + x0 << 2;
          r = inData[idx];
          g2 = inData[idx + 1];
          b = inData[idx + 2];
          for (bi = y0; bi < y1; bi += 1) {
            for (bj = x0; bj < x1; bj += 1) {
              pidx = bi * width + bj << 2;
              outData[pidx] = r;
              outData[pidx + 1] = g2;
              outData[pidx + 2] = b;
              outData[pidx + 3] = inData[pidx + 3];
            }
          }
          x0 = x1;
        }
        y0 = y1;
      }
    },
    equalize: function(inData, outData, width, height) {
      let n = width * height, p, i, level, ratio;
      const round3 = Math.round;
      const pdf = new Array(256);
      for (i = 0; i < 256; i += 1) {
        pdf[i] = 0;
      }
      for (i = 0; i < n; i += 1) {
        p = i * 4;
        level = clamp3(
          round3(inData[p] * 0.3 + inData[p + 1] * 0.59 + inData[p + 2] * 0.11),
          0,
          255
        );
        outData[p + 3] = level;
        pdf[level] += 1;
      }
      const cdf = new Array(256);
      cdf[0] = pdf[0];
      for (i = 1; i < 256; i += 1) {
        cdf[i] = cdf[i - 1] + pdf[i];
      }
      for (i = 0; i < 256; i += 1) {
        cdf[i] = cdf[i] / n * 255;
      }
      for (i = 0; i < n; i += 1) {
        p = i * 4;
        level = outData[p + 3];
        ratio = cdf[level] / (level || 1);
        outData[p] = clamp3(round3(inData[p] * ratio), 0, 255);
        outData[p + 1] = clamp3(round3(inData[p + 1] * ratio), 0, 255);
        outData[p + 2] = clamp3(round3(inData[p + 2] * ratio), 0, 255);
        outData[p + 3] = inData[p + 3];
      }
    },
    mask: function(inData, outData, width, height, options) {
      let i, n = width * height * 4, data = options.data;
      for (i = 0; i < n; i += 4) {
        outData[i] = inData[i];
        outData[i + 1] = inData[i + 1];
        outData[i + 2] = inData[i + 2];
        outData[i + 3] = inData[i + 3] * data[i] / 255 * data[i + 3] / 255;
      }
    },
    // Distortion filters
    bump: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { dx: 0, dy: 0, radius: 0, zoom: 0 });
      const m1 = options.radius;
      const m2 = clamp3(options.zoom, 0, 1);
      return polar(
        inData,
        outData,
        options.dx,
        options.dy,
        width,
        height,
        function(d, a) {
          return [d * smoothstep(0, m2, d / m1), a];
        }
      );
    },
    dent: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { dx: 0, dy: 0, radius: 0, zoom: 0 });
      const m1 = options.radius;
      const m2 = clamp3(options.zoom, 0, 1);
      return polar(
        inData,
        outData,
        options.dx,
        options.dy,
        width,
        height,
        function(d, a) {
          return [2 * d - d * smoothstep(0, m2, d / m1), a];
        }
      );
    },
    pinch: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { dx: 0, dy: 0, zoom: 0 });
      const m1 = distance2(0, 0, width, height);
      const m2 = clamp3(options.zoom * 0.75, -0.75, 0.75);
      return polar(
        inData,
        outData,
        options.dx,
        options.dy,
        width,
        height,
        function(d, a) {
          return [d * Math.pow(m1 / d, m2) * (1 - m2), a];
        }
      );
    },
    splash: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { dx: 0, dy: 0, radius: 0 });
      const m = options.radius;
      return polar(
        inData,
        outData,
        options.dx,
        options.dy,
        width,
        height,
        function(d, a) {
          return [d > m ? m : d, a];
        }
      );
    },
    twirl: function(inData, outData, width, height, options) {
      options = defaultOptions(options, { dx: 0, dy: 0, radius: 0, angle: 0 });
      const m1 = radians3(options.angle);
      const m2 = options.radius;
      return polar(
        inData,
        outData,
        options.dx,
        options.dy,
        width,
        height,
        function(d, a) {
          return [d, a + (1 - smoothstep(-m2, m2, d)) * m1];
        }
      );
    }
  };
  var process_default = process3;

  // src/libraries/img/canvasrenderer.js
  var nativeBlendModes = blend_default.getNativeModes();
  function createImageData(ctx, width, height) {
    if (ctx.createImageData) {
      return ctx.createImageData(width, height);
    } else {
      return ctx.getImageData(0, 0, width, height);
    }
  }
  var CanvasRenderer = {};
  CanvasRenderer.toImage = function(canvas) {
    const img = new Image();
    img.width = canvas.width;
    img.height = canvas.height;
    img.src = canvas.toDataURL();
    return img;
  };
  CanvasRenderer.load = function(iCanvas, layer) {
    if (layer.isFill()) {
      return CanvasRenderer.generateColor(iCanvas, layer);
    } else if (layer.isGradient()) {
      return CanvasRenderer.generateGradient(iCanvas, layer);
    } else if (layer.isHtmlCanvas()) {
      return CanvasRenderer.loadHtmlCanvas(layer.data);
    } else if (layer.isImage()) {
      return CanvasRenderer.loadImage(layer.data);
    } else if (layer.isImageCanvas()) {
      return CanvasRenderer.loadImageCanvas(layer.data);
    }
  };
  CanvasRenderer.loadHtmlCanvas = function(canvas) {
    return canvas;
  };
  CanvasRenderer.loadImageCanvas = function(iCanvas) {
    return iCanvas.render();
  };
  CanvasRenderer.loadImage = function(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
  };
  CanvasRenderer.generateColor = function(iCanvas, layer) {
    const width = layer.width !== void 0 ? layer.width : iCanvas.width;
    const height = layer.height !== void 0 ? layer.height : iCanvas.height;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = layer.data;
    ctx.fillRect(0, 0, width, height);
    return canvas;
  };
  CanvasRenderer.generateGradient = function(iCanvas, layer) {
    let grd, x1, y1, x2, y2;
    const width = layer.width !== void 0 ? layer.width : iCanvas.width;
    const height = layer.height !== void 0 ? layer.height : iCanvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const data = layer.data;
    const type = data.type || "linear";
    let rotateDegrees = data.rotation || 0;
    if (type === "radial") {
      grd = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.min(width, height) / 2
      );
    } else {
      if (rotateDegrees < 0) {
        rotateDegrees += 360;
      }
      if (0 <= rotateDegrees && rotateDegrees < 45) {
        x1 = 0;
        y1 = height / 2 * (45 - rotateDegrees) / 45;
        x2 = width;
        y2 = height - y1;
      } else if (45 <= rotateDegrees && rotateDegrees < 135) {
        x1 = width * (rotateDegrees - 45) / (135 - 45);
        y1 = 0;
        x2 = width - x1;
        y2 = height;
      } else if (135 <= rotateDegrees && rotateDegrees < 225) {
        x1 = width;
        y1 = height * (rotateDegrees - 135) / (225 - 135);
        x2 = 0;
        y2 = height - y1;
      } else if (225 <= rotateDegrees && rotateDegrees < 315) {
        x1 = width * (1 - (rotateDegrees - 225) / (315 - 225));
        y1 = height;
        x2 = width - x1;
        y2 = 0;
      } else if (315 <= rotateDegrees) {
        x1 = 0;
        y1 = height - height / 2 * (rotateDegrees - 315) / (360 - 315);
        x2 = width;
        y2 = height - y1;
      }
      grd = ctx.createLinearGradient(x1, y1, x2, y2);
    }
    grd.addColorStop(data.spread || 0, data.startColor);
    grd.addColorStop(1, data.endColor);
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
    return canvas;
  };
  CanvasRenderer.processImage = function(canvas, filters) {
    if (filters.length === 0) {
      return canvas;
    }
    let filter2, tmpData;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    let inData = ctx.getImageData(0, 0, width, height);
    let outData = createImageData(ctx, width, height);
    for (let i = 0; i < filters.length; i += 1) {
      if (i > 0) {
        tmpData = inData;
        inData = outData;
        outData = tmpData;
      }
      filter2 = filters[i];
      process_default[filter2.name](
        inData.data,
        outData.data,
        width,
        height,
        filter2.options
      );
    }
    ctx.putImageData(outData, 0, 0);
    return canvas;
  };
  CanvasRenderer.processMask = function(canvas, mask) {
    if (mask.layers.length === 0) {
      return canvas;
    }
    mask.width = canvas.width;
    mask.height = canvas.height;
    const c = CanvasRenderer.renderBW(mask);
    const data = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
    const maskFilter = {
      name: "mask",
      options: { data, x: 0, y: 0, width: c.width, height: c.height }
    };
    return CanvasRenderer.processImage(canvas, [maskFilter]);
  };
  CanvasRenderer.processLayer = function(iCanvas, layer) {
    const layerImage = CanvasRenderer.load(iCanvas, layer);
    const maskedImage = CanvasRenderer.processMask(layerImage, layer.mask);
    return CanvasRenderer.processImage(maskedImage, layer.filters);
  };
  function transformLayer(ctx, iCanvas, layer) {
    const m = layer.transform.matrix();
    ctx.translate(iCanvas.width / 2, iCanvas.height / 2);
    ctx.transform(m[0], m[1], m[3], m[4], m[6], m[7]);
    if (layer.flip_h || layer.flip_v) {
      ctx.scale(layer.flip_h ? -1 : 1, layer.flip_v ? -1 : 1);
    }
    ctx.translate(-layer.img.width / 2, -layer.img.height / 2);
  }
  function transformRect(iCanvas, layer) {
    let pt, minx, miny, maxx, maxy;
    const width = layer.img.width;
    const height = layer.img.height;
    const p1 = { x: 0, y: 0 };
    const p2 = { x: width, y: 0 };
    const p3 = { x: 0, y: height };
    const p4 = { x: width, y: height };
    const points = [p1, p2, p3, p4];
    let t = transform2();
    t = t.translate(iCanvas.width / 2, iCanvas.height / 2);
    t = t.append(layer.transform);
    t = t.translate(-layer.img.width / 2, -layer.img.height / 2);
    for (let i = 0; i < 4; i += 1) {
      pt = t.transformPoint(points[i]);
      if (i === 0) {
        minx = maxx = pt.x;
        miny = maxy = pt.y;
      } else {
        if (pt.x < minx) {
          minx = pt.x;
        }
        if (pt.x > maxx) {
          maxx = pt.x;
        }
        if (pt.y < miny) {
          miny = pt.y;
        }
        if (pt.y > maxy) {
          maxy = pt.y;
        }
      }
    }
    return { x: minx, y: miny, width: maxx - minx, height: maxy - miny };
  }
  function rectIntersect(r1, r2) {
    const right1 = r1.x + r1.width;
    const bottom1 = r1.y + r1.height;
    const right2 = r2.x + r2.width;
    const bottom2 = r2.y + r2.height;
    const x = Math.max(r1.x, r2.x);
    const y = Math.max(r1.y, r2.y);
    const w = Math.max(Math.min(right1, right2) - x, 0);
    const h = Math.max(Math.min(bottom1, bottom2) - y, 0);
    return { x, y, width: w, height: h };
  }
  function calcLayerRect(iCanvas, layer) {
    let rect2 = transformRect(iCanvas, layer);
    rect2 = rectIntersect(rect2, {
      x: 0,
      y: 0,
      width: iCanvas.width,
      height: iCanvas.height
    });
    return {
      x: Math.round(rect2.x),
      y: Math.round(rect2.y),
      width: Math.ceil(rect2.width),
      height: Math.ceil(rect2.height)
    };
  }
  function getTransformedLayerData(iCanvas, layer, rect2) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = rect2.width;
    canvas.height = rect2.height;
    ctx.translate(-rect2.x, -rect2.y);
    transformLayer(ctx, iCanvas, layer);
    ctx.drawImage(layer.img, 0, 0);
    return ctx.getImageData(0, 0, rect2.width, rect2.height);
  }
  CanvasRenderer.mergeManualBlend = function(iCanvas, layerData) {
    return function(canvas) {
      let layer, blendMode, blendData, tmpData, layerOptions, rect2;
      const ctx = canvas.getContext("2d");
      const width = iCanvas.width;
      const height = iCanvas.height;
      let baseData = ctx.getImageData(0, 0, width, height);
      let outData = createImageData(ctx, width, height);
      for (let i = 0; i < layerData.length; i += 1) {
        layer = layerData[i];
        rect2 = calcLayerRect(iCanvas, layer);
        if (rect2.width > 0 && rect2.height > 0) {
          if (i > 0) {
            tmpData = baseData;
            baseData = outData;
            outData = tmpData;
          }
          blendData = getTransformedLayerData(iCanvas, layer, rect2);
          layerOptions = {
            data: blendData.data,
            width: rect2.width,
            height: rect2.height,
            opacity: layer.opacity,
            dx: rect2.x,
            dy: rect2.y
          };
          if (blend_default[layer.blendmode] === void 0) {
            throw new Error("No blend mode named '" + layer.blendmode + "'");
          }
          blendMode = blend_default.realBlendMode(layer.blendmode);
          blend_default[blendMode](
            baseData.data,
            outData.data,
            width,
            height,
            layerOptions
          );
        }
      }
      ctx.putImageData(outData, 0, 0);
      return canvas;
    };
  };
  CanvasRenderer.singleLayerWithOpacity = function(iCanvas, layer) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = iCanvas.width;
    canvas.height = iCanvas.height;
    ctx.save();
    transformLayer(ctx, iCanvas, layer);
    if (layer.opacity !== 1) {
      ctx.globalAlpha = layer.opacity;
    }
    ctx.drawImage(layer.img, 0, 0);
    ctx.restore();
    return canvas;
  };
  CanvasRenderer.mergeNativeBlend = function(iCanvas, layerData) {
    return function(canvas) {
      const ctx = canvas.getContext("2d");
      let layer;
      for (let i = 0; i < layerData.length; i += 1) {
        layer = layerData[i];
        ctx.save();
        transformLayer(ctx, iCanvas, layer);
        if (layer.opacity !== 1) {
          ctx.globalAlpha = layer.opacity;
        }
        if (layer.blendmode !== "source-over") {
          ctx.globalCompositeOperation = blend_default.realBlendMode(layer.blendmode);
        }
        ctx.drawImage(layer.img, 0, 0);
        ctx.restore();
      }
      return canvas;
    };
  };
  CanvasRenderer.createRenderPipe = function(Renderer, iCanvas, layerData) {
    let mode, useNative, currentList, layer;
    const renderPipe = [];
    function pushList() {
      if (useNative !== void 0) {
        const fn = useNative ? Renderer.mergeNativeBlend : Renderer.mergeManualBlend;
        renderPipe.push(fn(iCanvas, currentList));
      }
    }
    for (let i = 1; i < layerData.length; i += 1) {
      layer = layerData[i];
      mode = layer.blendmode;
      if (useNative === void 0 || useNative !== nativeBlendModes[mode]) {
        pushList();
        currentList = [];
      }
      currentList.push(layer);
      useNative = nativeBlendModes[mode];
      if (i === layerData.length - 1) {
        pushList();
      }
    }
    return renderPipe;
  };
  CanvasRenderer.merge = function(iCanvas, layerData) {
    const renderPipe = CanvasRenderer.createRenderPipe(
      CanvasRenderer,
      iCanvas,
      layerData
    );
    let canvas = CanvasRenderer.singleLayerWithOpacity(iCanvas, layerData[0]);
    for (let i = 0; i < renderPipe.length; i += 1) {
      canvas = renderPipe[i](canvas);
    }
    return canvas;
  };
  CanvasRenderer.composite = function(iCanvas, layerData) {
    if (!layerData || layerData.length === 0) {
      return null;
    }
    if (layerData.length === 1) {
      return CanvasRenderer.singleLayerWithOpacity(iCanvas, layerData[0]);
    }
    return CanvasRenderer.merge(iCanvas, layerData);
  };
  CanvasRenderer.getLayerData = function(iCanvas, layerImages) {
    let d, layer, layerImg;
    const layerData = [];
    for (let i = 0; i < layerImages.length; i += 1) {
      layer = iCanvas.layers[i];
      layerImg = layerImages[i];
      d = {
        img: layerImg,
        opacity: layer.opacity,
        blendmode: layer.blendmode,
        transform: layer.transform,
        flip_h: layer.flip_h,
        flip_v: layer.flip_v
      };
      layerData.push(d);
    }
    return layerData;
  };
  CanvasRenderer.render = function(iCanvas) {
    const layerImages = [];
    for (let i = 0; i < iCanvas.layers.length; i += 1) {
      layerImages.push(CanvasRenderer.processLayer(iCanvas, iCanvas.layers[i]));
    }
    return CanvasRenderer.composite(
      iCanvas,
      CanvasRenderer.getLayerData(iCanvas, layerImages)
    );
  };
  CanvasRenderer.renderBW = function(iCanvas) {
    const canvas = CanvasRenderer.render(iCanvas);
    const bwFilter = { name: "desaturate", options: { method: "ITU-R BT.709" } };
    return CanvasRenderer.processImage(canvas, [bwFilter]);
  };
  var canvasrenderer_default = CanvasRenderer;

  // src/libraries/img/asyncrenderer.js
  function passThrough(canvas, callback) {
    callback(null, canvas);
  }
  var AsyncRenderer = {};
  AsyncRenderer.toImage = function() {
    return function(canvas, callback) {
      callback(null, canvasrenderer_default.toImage(canvas));
    };
  };
  AsyncRenderer.load = function(iCanvas, layer) {
    if (layer.isPath()) {
      return AsyncRenderer.loadFile(layer.data);
    } else if (layer.isFill()) {
      return AsyncRenderer.generateColor(iCanvas, layer);
    } else if (layer.isGradient()) {
      return AsyncRenderer.generateGradient(iCanvas, layer);
    } else if (layer.isHtmlCanvas()) {
      return AsyncRenderer.loadHtmlCanvas(layer.data);
    } else if (layer.isImage()) {
      return AsyncRenderer.loadImage(layer.data);
    } else if (layer.isImageCanvas()) {
      return AsyncRenderer.loadImageCanvas(layer.data);
    }
  };
  AsyncRenderer.loadFile = function(src) {
    return function(_, callback) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const source = new Image();
      source.onload = function() {
        canvas.width = source.width;
        canvas.height = source.height;
        ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
        callback(null, canvas);
      };
      source.src = src;
    };
  };
  AsyncRenderer.loadHtmlCanvas = function(canvas) {
    return function(_, callback) {
      callback(null, canvas);
    };
  };
  AsyncRenderer.loadImageCanvas = function(iCanvas) {
    return function(_, callback) {
      iCanvas.render(function(canvas) {
        callback(null, canvas);
      });
    };
  };
  AsyncRenderer.loadImage = function(img) {
    return function(_, callback) {
      const canvas = canvasrenderer_default.loadImage(img);
      callback(null, canvas);
    };
  };
  AsyncRenderer.generateColor = function(iCanvas, layer) {
    return function(_, callback) {
      const canvas = canvasrenderer_default.generateColor(iCanvas, layer);
      callback(null, canvas);
    };
  };
  AsyncRenderer.generateGradient = function(iCanvas, layer) {
    return function(_, callback) {
      const canvas = canvasrenderer_default.generateGradient(iCanvas, layer);
      callback(null, canvas);
    };
  };
  AsyncRenderer.processImage = function(filters) {
    if (filters.length === 0) {
      return passThrough;
    }
    return function(canvas, callback) {
      canvasrenderer_default.processImage(canvas, filters);
      callback(null, canvas);
    };
  };
  AsyncRenderer.processMask = function(mask) {
    if (mask.layers.length === 0) {
      return passThrough;
    }
    return function(canvas, callback) {
      mask.width = canvas.width;
      mask.height = canvas.height;
      AsyncRenderer.renderBW(mask, function(c) {
        const data = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
        const maskFilter = {
          name: "mask",
          options: { data, x: 0, y: 0, width: c.width, height: c.height }
        };
        const fn = AsyncRenderer.processImage([maskFilter]);
        fn(canvas, callback);
      });
    };
  };
  function processLayers(iCanvas) {
    return function(layer, callback) {
      index.compose(
        AsyncRenderer.processImage(layer.filters),
        AsyncRenderer.processMask(layer.mask),
        AsyncRenderer.load(iCanvas, layer)
      )(null, callback);
    };
  }
  AsyncRenderer.mergeManualBlend = function(iCanvas, layerData) {
    return function(canvas, callback) {
      canvasrenderer_default.mergeManualBlend(iCanvas, layerData)(canvas);
      callback(null, canvas);
    };
  };
  AsyncRenderer.mergeNativeBlend = function(iCanvas, layerData) {
    return function(canvas, callback) {
      canvasrenderer_default.mergeNativeBlend(iCanvas, layerData)(canvas);
      callback(null, canvas);
    };
  };
  AsyncRenderer.merge = function(iCanvas, layerData, callback) {
    const renderPipe = canvasrenderer_default.createRenderPipe(
      AsyncRenderer,
      iCanvas,
      layerData
    );
    renderPipe.reverse();
    const canvas = canvasrenderer_default.singleLayerWithOpacity(iCanvas, layerData[0]);
    renderPipe.push(function(_, cb) {
      cb(null, canvas);
    });
    index.compose.apply(null, renderPipe)(null, function() {
      callback(canvas);
    });
  };
  AsyncRenderer.composite = function(iCanvas, layerData, callback) {
    if (!layerData || layerData.length === 0) {
      callback(null);
      return;
    }
    if (layerData.length === 1) {
      callback(canvasrenderer_default.singleLayerWithOpacity(iCanvas, layerData[0]));
      return;
    }
    AsyncRenderer.merge(iCanvas, layerData, callback);
  };
  AsyncRenderer.render = function(iCanvas, callback) {
    index.map(
      iCanvas.layers,
      processLayers(iCanvas),
      function(err, layerImages) {
        if (callback) {
          AsyncRenderer.composite(
            iCanvas,
            canvasrenderer_default.getLayerData(iCanvas, layerImages),
            callback
          );
        }
      }
    );
  };
  AsyncRenderer.renderBW = function(iCanvas, callback) {
    AsyncRenderer.render(iCanvas, function(canvas) {
      const bwFilter = { name: "desaturate", options: { method: "ITU-R BT.709" } };
      const fn = AsyncRenderer.processImage([bwFilter]);
      fn(canvas, function(err, c) {
        callback(c);
      });
    });
  };
  var asyncrenderer_default = AsyncRenderer;

  // src/libraries/img/index.js
  var DEFAULT_WIDTH = 800;
  var DEFAULT_HEIGHT = 800;
  var TYPE_PATH = "path";
  var TYPE_IMAGE = "image";
  var TYPE_HTML_CANVAS = "htmlCanvas";
  var TYPE_IMAGE_CANVAS = "iCanvas";
  var TYPE_FILL = "fill";
  var TYPE_GRADIENT = "gradient";
  var IDENTITY_TRANSFORM = transform2();
  var Transform2 = IDENTITY_TRANSFORM;
  var colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "transparent",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ];
  function toColor(v1, v2, v3, v4, v5) {
    let _r, _g, _b, _a, R, G, B, options;
    if (v1 === void 0) {
      _r = _g = _b = 0;
      _a = 1;
    } else if (Array.isArray(v1)) {
      options = v2 || {};
      _r = v1[0] !== void 0 ? v1[0] : 0;
      _g = v1[1] !== void 0 ? v1[1] : 0;
      _b = v1[2] !== void 0 ? v1[2] : 0;
      _a = v1[3] !== void 0 ? v1[3] : options.base || 1;
    } else if (v1.r !== void 0) {
      options = v2 || {};
      _r = v1.r;
      _g = v1.g;
      _b = v1.b;
      _a = v1.a !== void 0 ? v1.a : options.base || 1;
    } else if (typeof v1 === "string") {
      if (v1.indexOf("#") === 0) {
        return v1;
      }
      if (v1.indexOf("rgb") === 0) {
        return v1;
      }
      if (colors.indexOf(v1) !== -1) {
        return v1;
      }
    } else if (typeof v1 === "number") {
      if (arguments.length === 1) {
        _r = _g = _b = v1;
        _a = 1;
      } else if (arguments.length === 2) {
        _r = _g = _b = v1;
        if (typeof v2 === "number") {
          _a = v2;
        } else {
          options = v2;
          _a = options.base || 1;
        }
      } else if (arguments.length === 3) {
        if (typeof v3 === "number") {
          _r = v1;
          _g = v2;
          _b = v3;
          _a = 1;
        } else {
          _r = _g = _b = v1;
          _a = v2;
          options = v3;
        }
      } else if (arguments.length === 4) {
        _r = v1;
        _g = v2;
        _b = v3;
        if (typeof v4 === "number") {
          _a = v4;
        } else {
          options = v4 || {};
          _a = options.base || 1;
        }
      } else {
        _r = v1;
        _g = v2;
        _b = v3;
        _a = v4;
        options = v5;
      }
    }
    if (!(typeof _r === "number" && typeof _g === "number" && typeof _b === "number" && typeof _a === "number")) {
      throw new Error("Invalid color arguments");
    }
    options = options || {};
    if (options.base !== void 0) {
      _r /= options.base;
      _g /= options.base;
      _b /= options.base;
      _a /= options.base;
    }
    R = Math.round(_r * 255);
    G = Math.round(_g * 255);
    B = Math.round(_b * 255);
    return "rgba(" + R + ", " + G + ", " + B + ", " + _a + ")";
  }
  function toGradientData(v1, v2, v3, v4, v5) {
    let startColor, endColor, type, rotation, spread, d;
    const data = {};
    if (arguments.length === 1) {
      d = v1 || {};
      startColor = d.startColor;
      endColor = d.endColor;
      type = d.type;
      rotation = d.rotation;
      spread = d.spread;
    } else if (arguments.length >= 2) {
      startColor = v1;
      endColor = v2;
      type = "linear";
      rotation = 0;
      spread = 0;
      if (arguments.length === 3) {
        if (typeof v3 === "string") {
          type = v3;
        } else if (typeof v3 === "number") {
          rotation = v3;
        }
      } else if (arguments.length === 4) {
        if (typeof v3 === "number") {
          rotation = v3;
          spread = v4;
        } else if (v3 === "linear") {
          rotation = v4;
        } else if (v3 === "radial") {
          type = v3;
          spread = v4;
        } else {
          throw new Error("Wrong argument provided: " + v3);
        }
      } else if (arguments.length === 5) {
        type = v3;
        rotation = v4;
        spread = v5;
      }
    }
    if (!startColor && startColor !== 0) {
      throw new Error("No startColor was given.");
    }
    if (!endColor && endColor !== 0) {
      throw new Error("No endColor was given.");
    }
    try {
      data.startColor = toColor(startColor);
    } catch (e1) {
      throw new Error("startColor is not a valid color: " + startColor, { cause: e1 });
    }
    try {
      data.endColor = toColor(endColor);
    } catch (e2) {
      throw new Error("endColor is not a valid color: " + endColor, { cause: e2 });
    }
    if (type === void 0) {
      type = "linear";
    }
    if (type !== "linear" && type !== "radial") {
      throw new Error("Unknown gradient type: " + type);
    }
    data.type = type;
    if (spread === void 0) {
      spread = 0;
    }
    if (typeof spread !== "number") {
      throw new Error("Spread value is not a number: " + spread);
    }
    if (type === "linear") {
      if (rotation === void 0) {
        rotation = 0;
      }
      if (typeof rotation !== "number") {
        throw new Error("Rotation value is not a number: " + rotation);
      }
      data.rotation = rotation;
    }
    data.spread = clamp3(spread, 0, 0.99);
    return data;
  }
  function findType(data) {
    if (typeof data === "string") {
      return TYPE_PATH;
    } else if (data instanceof Image) {
      return TYPE_IMAGE;
    } else if (data instanceof HTMLCanvasElement) {
      return TYPE_HTML_CANVAS;
    } else if (data instanceof ImageCanvas) {
      return TYPE_IMAGE_CANVAS;
    } else if (data.r !== void 0 && data.g !== void 0 && data.b !== void 0 && data.a !== void 0) {
      return TYPE_FILL;
    } else if (data.startColor !== void 0 && data.endColor !== void 0) {
      return TYPE_GRADIENT;
    }
    throw new Error("Cannot establish type for data ", data);
  }
  var Layer = class {
    constructor(data, type) {
      if (!type) {
        type = findType(data);
      }
      this.data = data;
      this.type = type;
      if (type === TYPE_HTML_CANVAS || type === TYPE_IMAGE_CANVAS || type === TYPE_IMAGE) {
        this.width = data.width;
        this.height = data.height;
      }
      this.opacity = 1;
      this.blendmode = "source-over";
      this.transform = IDENTITY_TRANSFORM;
      this.flip_h = false;
      this.flip_v = false;
      this.mask = new ImageCanvas();
      this.filters = [];
    }
    // Copies the layer object.
    clone() {
      function cloneFilter(filter2) {
        let key, value;
        const f = {};
        f.name = filter2.name;
        if (filter2.options !== void 0) {
          f.options = {};
          const optionsKeys = Object.keys(filter2.options);
          for (let i = 0; i < optionsKeys.length; i += 1) {
            key = optionsKeys[i];
            value = filter2.options[key];
            if (Array.isArray(value)) {
              f.options[key] = value.slice(0);
            } else {
              f.options[key] = value;
            }
          }
        }
        return f;
      }
      const d = Object.create(Layer.prototype);
      d.data = this.data;
      d.type = this.type;
      d.width = this.width;
      d.height = this.height;
      d.opacity = this.opacity;
      d.blendmode = this.blendmode;
      d.transform = this.transform;
      d.flip_h = this.flip_h;
      d.flip_v = this.flip_v;
      d.mask = this.mask.clone();
      d.filters = [];
      if (this.type === TYPE_IMAGE_CANVAS) {
        d.data = this.data.clone();
      } else if (this.type === TYPE_GRADIENT) {
        d.data = {
          startColor: this.data.startColor,
          endColor: this.data.endColor,
          type: this.data.type,
          rotation: this.data.rotation,
          spread: this.data.spread
        };
      }
      for (let i = 0; i < this.filters.length; i += 1) {
        d.filters.push(cloneFilter(this.filters[i]));
      }
      return d;
    }
    // Sets the opacity of the layer (requires a number in the range 0.0-1.0).
    setOpacity(opacity) {
      this.opacity = clamp3(opacity, 0, 1);
    }
    // Within an image canvas, a layer is by default positioned in the center.
    // Translating moves the layer away from this center.
    // Each successive call to the translate function performs an additional translation on top of the current transformation matrix.
    translate(tx, ty) {
      ty = ty === void 0 ? 0 : ty;
      const t = Transform2.translate(tx, ty);
      this.transform = this.transform.prepend(t);
    }
    // Scaling happens relatively in a 0.0-1.0 based range where 1.0 stands for 100%.
    // Each successive call to the scale function performs an additional scaling operation on top of the current transformation matrix.
    // If only one parameter is supplied, the layer is scaled proportionally.
    scale(sx, sy) {
      sy = sy === void 0 ? sx : sy;
      const t = Transform2.scale(sx, sy);
      this.transform = this.transform.prepend(t);
    }
    // The supplied parameter should be in degrees (not radians).
    // Each successive call to the rotation function performs an additional rotation on top of the current transformation matrix.
    rotate(rot) {
      const t = Transform2.rotate(rot);
      this.transform = this.transform.prepend(t);
    }
    // Each successive call to the skew function performs an additional skewing operation on top of the current transformation matrix.
    skew(kx, ky) {
      ky = ky === void 0 ? kx : ky;
      const t = Transform2.skew(kx, ky);
      this.transform = this.transform.prepend(t);
    }
    // Flips the layer horizontally.
    flipHorizontal(arg) {
      if (arg !== void 0) {
        this.flip_h = arg;
      } else {
        this.flip_h = !this.flip_h;
      }
    }
    // Flips the layer vertically.
    flipVertical(arg) {
      if (arg !== void 0) {
        this.flip_v = arg;
      } else {
        this.flip_v = !this.flip_v;
      }
    }
    addFilter(filter2, options) {
      this.filters.push({
        name: filter2,
        options
      });
    }
    // Renders the layer to a new canvas.
    draw(ctx) {
      const width = this.width === void 0 ? DEFAULT_WIDTH : this.width;
      const height = this.height === void 0 ? DEFAULT_HEIGHT : this.height;
      const canvas = new ImageCanvas(width, height);
      canvas.addLayer(this);
      canvas.draw(ctx);
    }
    toCanvas() {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext("2d");
      this.draw(ctx);
      return canvas;
    }
    static fromFile(filename) {
      return new Layer(filename, TYPE_PATH);
    }
    static fromImage(image) {
      return new Layer(image, TYPE_IMAGE);
    }
    static fromCanvas(canvas) {
      if (canvas instanceof HTMLCanvasElement) {
        return Layer.fromHtmlCanvas(canvas);
      }
      return Layer.fromImageCanvas(canvas);
    }
    static fromHtmlCanvas(canvas) {
      return new Layer(canvas, TYPE_HTML_CANVAS);
    }
    static fromImageCanvas(iCanvas) {
      return new Layer(iCanvas, TYPE_IMAGE_CANVAS);
    }
    static fromColor(color) {
      return new Layer(toColor(color), TYPE_FILL);
    }
    static fromGradient() {
      return new Layer(toGradientData.apply(null, arguments), TYPE_GRADIENT);
    }
    isPath() {
      return this.type === TYPE_PATH;
    }
    isFill() {
      return this.type === TYPE_FILL;
    }
    isGradient() {
      return this.type === TYPE_GRADIENT;
    }
    isHtmlCanvas() {
      return this.type === TYPE_HTML_CANVAS;
    }
    isImage() {
      return this.type === TYPE_IMAGE;
    }
    isImageCanvas() {
      return this.type === TYPE_IMAGE_CANVAS;
    }
  };
  Layer.Transform = Layer.IDENTITY_TRANSFORM = IDENTITY_TRANSFORM;
  var Pixels = class {
    constructor(canvas) {
      this.width = canvas.width;
      this.height = canvas.height;
      const ctx = canvas.getContext("2d");
      this._data = ctx.getImageData(0, 0, this.width, this.height);
      this.array = this._data.data;
    }
    get(i) {
      i *= 4;
      const v = this.array;
      return [v[i + 0], v[i + 1], v[i + 2], v[i + 3]];
    }
    set(i, rgba) {
      i *= 4;
      const v = this.array;
      v[i + 0] = rgba[0];
      v[i + 1] = rgba[1];
      v[i + 2] = rgba[2];
      v[i + 3] = rgba[3];
    }
    toCanvas() {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext("2d");
      ctx.putImageData(this._data, 0, 0);
      return canvas;
    }
  };
  var ImageCanvas = class {
    constructor(width, height) {
      if (!width) {
        width = DEFAULT_WIDTH;
      }
      if (!height) {
        height = DEFAULT_HEIGHT;
      }
      this.width = width;
      this.height = height;
      this.layers = [];
    }
    // Copies the ImageCanvas.
    clone() {
      const c = new ImageCanvas(this.width, this.height);
      for (let i = 0; i < this.layers.length; i += 1) {
        c.layers.push(this.layers[i].clone());
      }
      return c;
    }
    // Creates a new layer from figuring out the given argument(s) and adds it to the canvas.
    addLayer(arg0) {
      let layer;
      try {
        return this.addGradientLayer.apply(this, arguments);
      } catch {
      }
      try {
        return this.addColorLayer.apply(this, arguments);
      } catch {
      }
      if (arguments.length === 1) {
        if (typeof arg0 === "string") {
          layer = new Layer(arg0, TYPE_PATH);
        } else if (arg0 instanceof Layer) {
          layer = arg0;
        } else if (arg0 instanceof HTMLCanvasElement) {
          layer = new Layer(arg0, TYPE_HTML_CANVAS);
        } else if (arg0 instanceof Image) {
          layer = new Layer(arg0, TYPE_IMAGE);
        } else if (arg0 instanceof ImageCanvas) {
          layer = new Layer(arg0, TYPE_IMAGE_CANVAS);
        }
      }
      if (!layer) {
        throw new Error("Error creating layer.");
      }
      this.layers.push(layer);
      return layer;
    }
    // Adds a new color layer to the canvas.
    addColorLayer() {
      const c = toColor.apply(null, arguments);
      const layer = new Layer(c, TYPE_FILL);
      this.layers.push(layer);
      return layer;
    }
    // Adds a new gradient layer to the canvas.
    addGradientLayer() {
      const c = toGradientData.apply(null, arguments);
      const layer = new Layer(c, TYPE_GRADIENT);
      this.layers.push(layer);
      return layer;
    }
    // Renders the canvas and passes the result (a html canvas) to the given callback function.
    render(callback) {
      const renderer = callback ? asyncrenderer_default : canvasrenderer_default;
      return renderer.render(this, callback);
    }
    // Renders the canvas on another canvas.
    draw(ctx, callback) {
      if (callback) {
        this.render(function(canvas) {
          ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
        });
      } else {
        const canvas = this.render();
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      }
    }
  };
  function isPoint(arg) {
    if (!arg) {
      return false;
    }
    return arg.x !== void 0 && arg.y !== void 0;
  }
  function pointFromArray(arg) {
    const x = arg[0];
    const y = arg.length > 1 ? arg[1] : x;
    return { x, y };
  }
  function pointFromNumber(arg) {
    return { x: arg, y: arg };
  }
  function isValidArg(arg) {
    return arg !== void 0 && arg !== null;
  }
  function convertArg(arg) {
    if (Array.isArray(arg)) {
      return pointFromArray(arg);
    } else if (typeof arg === "number") {
      return pointFromNumber(arg);
    } else if (isPoint(arg)) {
      return arg;
    }
  }
  var Img = class {
    constructor(canvas, x, y) {
      this.canvas = canvas;
      this.originalWidth = canvas ? canvas.width : 0;
      this.originalHeight = canvas ? canvas.height : 0;
      this.transform = x || y ? Transform2.translate(x, y) : Layer.IDENTITY_TRANSFORM;
    }
    clone() {
      const n = new Img();
      n.canvas = this.canvas;
      n.originalWidth = this.originalWidth;
      n.originalHeight = this.originalHeight;
      n.transform = this.transform;
      return n;
    }
    withCanvas(canvas) {
      const n = this.clone();
      n.canvas = canvas;
      return n;
    }
    _transform(t) {
      const n = this.clone();
      n.transform = n.transform.prepend(t);
      return n;
    }
    translate(position) {
      let t = pointFromNumber(0);
      const args = arguments;
      if (args.length === 1 && isValidArg(position)) {
        t = convertArg(position);
      } else if (args.length === 2) {
        t = { x: args[0], y: args[1] };
      }
      if (t.x === 0 && t.y === 0) {
        return this;
      }
      return this._transform(Transform2.translate(t.x, t.y));
    }
    rotate(angle3) {
      if (!angle3) {
        return this;
      }
      let o = pointFromNumber(0);
      const args = arguments;
      if (args.length === 2) {
        o = convertArg(args[1]);
      } else if (args.length === 3) {
        o = { x: args[1], y: args[2] };
      }
      return this._transform(
        Transform2.translate(o.x, o.y).rotate(angle3).translate(-o.x, -o.y)
      );
    }
    scale(scale2) {
      let s = pointFromNumber(1);
      let o = pointFromNumber(0);
      const args = arguments;
      if (args.length === 1 && isValidArg(scale2)) {
        s = convertArg(scale2);
      } else if (args.length === 2) {
        if (typeof scale2 === "number" && typeof args[1] === "number") {
          s = { x: args[0], y: args[1] };
        } else {
          s = convertArg(scale2);
          o = convertArg(args[1]);
        }
      } else if (args.length === 4) {
        s = { x: args[0], y: args[1] };
        o = { x: args[2], y: args[3] };
      }
      if (s.x === 1 && s.y === 1) {
        return this;
      }
      return this._transform(
        Transform2.translate(o.x, o.y).scale(s.x, s.y).translate(-o.x, -o.y)
      );
    }
    skew(skew2) {
      let k = pointFromNumber(0);
      let o = pointFromNumber(0);
      const args = arguments;
      if (args.length === 1 && isValidArg(skew2)) {
        k = convertArg(skew2);
      } else if (args.length === 2) {
        if (typeof skew2 === "number" && typeof args[1] === "number") {
          k = { x: args[0], y: args[1] };
        } else {
          k = convertArg(skew2);
          o = convertArg(args[1]);
        }
      } else if (args.length === 4) {
        k = { x: args[0], y: args[1] };
        o = { x: args[2], y: args[3] };
      }
      if (k.x === 0 && k.y === 0) {
        return this;
      }
      return this._transform(
        Transform2.translate(o.x, o.y).skew(k.x, k.y).translate(-o.x, -o.y)
      );
    }
    transformed() {
      return merge2([this]);
    }
    bounds() {
      const t = this.transform;
      const x = this.originalWidth / 2;
      const y = this.originalHeight / 2;
      const p1 = { x: -x, y: -y };
      const p2 = { x, y: -y };
      const p3 = { x: -x, y };
      const p4 = { x, y };
      const points = [p1, p2, p3, p4];
      let pt, minx, miny, maxx, maxy;
      for (let i = 0; i < 4; i += 1) {
        pt = t.transformPoint(points[i]);
        if (i === 0) {
          minx = maxx = pt.x;
          miny = maxy = pt.y;
        } else {
          if (pt.x < minx) {
            minx = pt.x;
          }
          if (pt.x > maxx) {
            maxx = pt.x;
          }
          if (pt.y < miny) {
            miny = pt.y;
          }
          if (pt.y > maxy) {
            maxy = pt.y;
          }
        }
      }
      return { x: minx, y: miny, width: maxx - minx, height: maxy - miny };
    }
    colorize(color) {
      const colorLayer = Layer.fromColor(color);
      colorLayer.width = this.originalWidth;
      colorLayer.height = this.originalHeight;
      let i = new Img(colorLayer.toCanvas());
      i = i._transform(this.transform.matrix());
      return merge2([this, i]);
    }
    desaturate(options) {
      const layer = this.toLayer(false);
      layer.addFilter("desaturate", options);
      return this.withCanvas(layer.toCanvas());
    }
    crop(bounding) {
      function rectIntersect2(r1, r2) {
        const right1 = r1.x + r1.width, bottom1 = r1.y + r1.height, right2 = r2.x + r2.width, bottom2 = r2.y + r2.height, x = Math.max(r1.x, r2.x), y = Math.max(r1.y, r2.y), w = Math.max(Math.min(right1, right2) - x, 0), h = Math.max(Math.min(bottom1, bottom2) - y, 0);
        return { x, y, width: w, height: h };
      }
      const iBounds = this.bounds();
      const bounds2 = bounding.bounds();
      const ri = rectIntersect2(iBounds, bounds2);
      const width = Math.ceil(ri.width);
      const height = Math.ceil(ri.height);
      if (ri.width === 0 || ri.height === 0) {
        throw new Error("Resulting image has no dimensions");
      }
      const canvas = new ImageCanvas(width, height);
      const l1 = canvas.addLayer(this.toLayer());
      l1.translate(
        width / 2 - bounds2.width - bounds2.x,
        height / 2 - bounds2.height - bounds2.y
      );
      if (width < bounds2.width && ri.x > iBounds.x) {
        l1.translate(bounds2.width - width, 0);
      }
      if (height < bounds2.height && ri.y > iBounds.y) {
        l1.translate(0, bounds2.height - height);
      }
      return new Img(canvas.render(), ri.x + width / 2, ri.y + height / 2);
    }
    draw(ctx) {
      ctx.save();
      const m = this.transform.matrix();
      ctx.transform(m[0], m[1], m[3], m[4], m[6], m[7]);
      ctx.translate(-this.originalWidth / 2, -this.originalHeight / 2);
      ctx.drawImage(this.canvas, 0, 0);
      ctx.restore();
    }
    toLayer(copyTransformations) {
      const canvas = document.createElement("canvas");
      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this.canvas, 0, 0);
      const layer = Layer.fromHtmlCanvas(canvas);
      if (copyTransformations === void 0) {
        copyTransformations = true;
      }
      if (copyTransformations) {
        layer.transform = this.transform;
      }
      return layer;
    }
    getPixels() {
      return new Pixels(this.canvas);
    }
    toImage() {
      const b = this.bounds();
      const cropped = this.crop({
        bounds: function() {
          return b;
        }
      });
      const i = new Image();
      i.width = cropped.canvas.width;
      i.height = cropped.canvas.height;
      i.src = cropped.canvas.toDataURL();
      return i;
    }
  };
  function rectUnite(r1, r2) {
    const x = Math.min(r1.x, r2.x), y = Math.min(r1.y, r2.y), width = Math.max(r1.x + r1.width, r2.x + r2.width) - x, height = Math.max(r1.y + r1.height, r2.y + r2.height) - y;
    return { x, y, width, height };
  }
  function merge2(images) {
    let i, image, b, l;
    for (i = 0; i < images.length; i += 1) {
      image = images[i];
      if (i === 0) {
        b = image.bounds();
      } else {
        b = rectUnite(b, image.bounds());
      }
    }
    const dx = b.width / 2 + b.x;
    const dy = b.height / 2 + b.y;
    const canvas = new ImageCanvas(b.width, b.height);
    for (i = 0; i < images.length; i += 1) {
      l = canvas.addLayer(images[i].toLayer());
      l.translate(-dx, -dy);
    }
    return new Img(canvas.render(), dx, dy);
  }

  // src/libraries/graphics.js
  var HORIZONTAL2 = "horizontal";
  var VERTICAL2 = "vertical";
  var BOTH = "both";
  var LEFT = "left";
  var RIGHT = "right";
  var CENTER = "center";
  var TOP = "top";
  var BOTTOM = "bottom";
  var MIDDLE = "middle";
  function clamp4(val, min2, max2) {
    return Math.min(max2, Math.max(min2, val));
  }
  function transformShape(shape, t) {
    return t.transformShape(shape);
  }
  function transformImage(image, t) {
    return image._transform(t.m);
  }
  function transform3(shape, t) {
    if (shape instanceof Path || shape instanceof Group || shape instanceof Text || shape.x !== void 0 && shape.y !== void 0) {
      return transformShape(shape, t);
    } else if (Array.isArray(shape)) {
      const l = [];
      for (let i = 0; i < shape.length; i += 1) {
        l.push(transform3(shape[i], t));
      }
      return l;
    } else if (shape instanceof Img) {
      return transformImage(shape, t);
    }
  }
  function align2(shape, position, hAlign, vAlign) {
    if (!shape) {
      return;
    }
    let dx, dy, t, x = position.x, y = position.y, bnds = bounds(shape);
    if (hAlign === LEFT) {
      dx = x - bnds.x;
    } else if (hAlign === RIGHT) {
      dx = x - bnds.x - bnds.width;
    } else if (hAlign === CENTER) {
      dx = x - bnds.x - bnds.width / 2;
    } else {
      dx = 0;
    }
    if (vAlign === TOP) {
      dy = y - bnds.y;
    } else if (vAlign === BOTTOM) {
      dy = y - bnds.y - bnds.height;
    } else if (vAlign === MIDDLE) {
      dy = y - bnds.y - bnds.height / 2;
    } else {
      dy = 0;
    }
    t = new Transform().translate(dx, dy);
    return transform3(shape, t);
  }
  function colorize2(shape, options) {
    const args = arguments;
    if (typeof options !== "object" || options instanceof Color) {
      options = {};
      if (args[1] !== void 0) {
        options.fill = args[1];
      }
      if (args[2] !== void 0) {
        options.stroke = args[2];
      }
      if (args[3] !== void 0) {
        options.strokeWidth = args[3];
      }
    }
    if (shape instanceof Path || shape instanceof Group) {
      return shape.colorize(options);
    } else if (shape instanceof Img || shape instanceof Text) {
      if (options.fill || options.fill === 0) {
        return shape.colorize(options.fill);
      } else {
        throw new Error("No color given");
      }
    }
  }
  function copy2(shape, copies, order, translate2, rotate2, scale2) {
    if (!shape) {
      return [];
    }
    let i, t, j, op, fn, shapes = [], tx = 0, ty = 0, r = 0, sx = 1, sy = 1, isListOfPoints = false;
    if (shape instanceof Path || shape instanceof Group || shape instanceof Text) {
      fn = transformShape;
    } else if (Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
      isListOfPoints = true;
      fn = transformShape;
    } else if (shape instanceof Img) {
      fn = transformImage;
    }
    for (i = 0; i < copies; i += 1) {
      t = new Transform();
      for (j = 0; j < order.length; j += 1) {
        op = order[j];
        if (op === "t") {
          t = t.translate(tx, ty);
        } else if (op === "r") {
          t = t.rotate(r);
        } else if (op === "s") {
          t = t.scale(sx, sy);
        }
      }
      if (isListOfPoints) {
        shapes = shapes.concat(fn(shape, t));
      } else {
        shapes.push(fn(shape, t));
      }
      tx += translate2.x;
      ty += translate2.y;
      r += rotate2;
      sx += scale2.x;
      sy += scale2.y;
    }
    return shapes;
  }
  function flip(shape, axis) {
    if (axis === "none") {
      return shape;
    }
    if (shape instanceof Path || shape instanceof Group || shape instanceof Text || Array.isArray(shape) && shape.length > 0 && shape[0].x !== void 0 && shape[0].y !== void 0) {
      const x = axis === HORIZONTAL2 || axis === BOTH ? -1 : 1;
      const y = axis === VERTICAL2 || axis === BOTH ? -1 : 1;
      return scale(shape, new Point(x, y), centerPoint(shape));
    } else if (shape instanceof Img) {
      const image = shape;
      const layer = image.toLayer(false);
      if (axis === HORIZONTAL2 || axis === BOTH) {
        layer.flipHorizontal();
      }
      if (axis === VERTICAL2 || axis === BOTH) {
        layer.flipVertical();
      }
      return image.withCanvas(layer.toCanvas());
    }
  }
  function fit2(shape, position, width, height, stretch) {
    if (!shape) {
      return;
    }
    stretch = stretch !== void 0 ? stretch : false;
    let t, sx, sy, bnds = bounds(shape), bx = bnds.x, by = bnds.y, bw = bnds.width, bh = bnds.height;
    bw = bw > 1e-12 ? bw : 0;
    bh = bh > 1e-12 ? bh : 0;
    t = new Transform();
    t = t.translate(position.x, position.y);
    if (!stretch) {
      sx = bw > 0 ? width / bw : Number.MAX_VALUE;
      sy = bh > 0 ? height / bh : Number.MAX_VALUE;
      sx = sy = Math.min(sx, sy);
    } else {
      sx = bw > 0 ? width / bw : 1;
      sy = bh > 0 ? height / bh : 1;
    }
    t = t.scale(sx, sy);
    t = t.translate(-bw / 2 - bx, -bh / 2 - by);
    return transform3(shape, t);
  }
  function fitTo2(shape, bounding, stretch) {
    if (!shape) {
      return;
    }
    if (!bounding) {
      return shape;
    }
    const bnds = bounds(bounding), bx = bnds.x, by = bnds.y, bw = bnds.width, bh = bnds.height;
    return fit2(shape, { x: bx + bw / 2, y: by + bh / 2 }, bw, bh, stretch);
  }
  function hslAdjust(v, hue, saturation, lightness, alpha) {
    if (!alpha) {
      alpha = 0;
    }
    if (v instanceof Img) {
      const image = v;
      const layer = image.toLayer(false);
      layer.addFilter("hslAdjust", {
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha
      });
      return image.withCanvas(layer.toCanvas());
    }
    hue = clamp4(hue, -1, 1);
    saturation = clamp4(saturation, -1, 1);
    lightness = clamp4(lightness, -1, 1);
    alpha = clamp4(alpha, -1, 1);
    const satMul = 1 + saturation * (saturation < 0 ? 1 : 2);
    const lightMul = lightness < 0 ? 1 + lightness : 1 - lightness;
    const lightAdd = lightness < 0 ? 0 : lightness;
    let r, g2, b, vs, ms, vm, h, s, l, m, vmh, sextant;
    hue = hue * 6 % 6;
    function hslAdjust2(v1) {
      if (v1 instanceof Group) {
        const newShapes = [];
        for (let i = 0; i < v1.shapes.length; i += 1) {
          newShapes.push(hslAdjust2(v1.shapes[i]));
        }
        return new Group(newShapes);
      } else if (v1 instanceof Path) {
        const p = v1.clone();
        p.fill = hslAdjust2(p.fill);
        p.stroke = hslAdjust2(p.stroke);
        return p;
      }
      let c = v1;
      if (!(c instanceof Color)) {
        c = Color.parse(c);
      }
      r = c.r;
      g2 = c.g;
      b = c.b;
      if (hue !== 0 || saturation !== 0) {
        vs = r;
        if (g2 > vs) {
          vs = g2;
        }
        if (b > vs) {
          vs = b;
        }
        ms = r;
        if (g2 < ms) {
          ms = g2;
        }
        if (b < ms) {
          ms = b;
        }
        vm = vs - ms;
        l = (ms + vs) / 2;
        if (l > 0 && vm > 0) {
          if (l <= 0.5) {
            s = vm / (vs + ms) * satMul;
            if (s > 1) {
              s = 1;
            }
            v = l * (1 + s);
          } else {
            s = vm / (2 - vs - ms) * satMul;
            if (s > 1) {
              s = 1;
            }
            v = l + s - l * s;
          }
          if (r === vs) {
            if (g2 === ms) {
              h = 5 + (vs - b) / vm + hue;
            } else {
              h = 1 - (vs - g2) / vm + hue;
            }
          } else if (g2 === vs) {
            if (b === ms) {
              h = 1 + (vs - r) / vm + hue;
            } else {
              h = 3 - (vs - b) / vm + hue;
            }
          } else {
            if (r === ms) {
              h = 3 + (vs - g2) / vm + hue;
            } else {
              h = 5 - (vs - r) / vm + hue;
            }
          }
          if (h < 0) {
            h += 6;
          }
          if (h >= 6) {
            h -= 6;
          }
          m = l + l - v;
          sextant = h >> 0;
          vmh = (v - m) * (h - sextant);
          if (sextant === 0) {
            r = v;
            g2 = m + vmh;
            b = m;
          } else if (sextant === 1) {
            r = v - vmh;
            g2 = v;
            b = m;
          } else if (sextant === 2) {
            r = m;
            g2 = v;
            b = m + vmh;
          } else if (sextant === 3) {
            r = m;
            g2 = v - vmh;
            b = v;
          } else if (sextant === 4) {
            r = m + vmh;
            g2 = m;
            b = v;
          } else if (sextant === 5) {
            r = v;
            g2 = m;
            b = v - vmh;
          }
        }
      }
      r = r * lightMul + lightAdd;
      g2 = g2 * lightMul + lightAdd;
      b = b * lightMul + lightAdd;
      if (r < 0) {
        r = 0;
      }
      if (g2 < 0) {
        g2 = 0;
      }
      if (b < 0) {
        b = 0;
      }
      if (r > 1) {
        r = 1;
      }
      if (g2 > 1) {
        g2 = 1;
      }
      if (b > 1) {
        b = 1;
      }
      return new Color(r, g2, b, c.a + alpha);
    }
    return hslAdjust2(v);
  }
  function rgbAdjust(v, red, green, blue, alpha) {
    if (!alpha) {
      alpha = 0;
    }
    red = clamp4(red, -1, 1);
    green = clamp4(green, -1, 1);
    blue = clamp4(blue, -1, 1);
    alpha = clamp4(alpha, -1, 1);
    function rgbAdjust2(v2) {
      if (v2 instanceof Img) {
        const image = v2;
        const layer = image.toLayer(false);
        layer.addFilter("rgbAdjust", { r: red, g: green, b: blue, a: alpha });
        return image.withCanvas(layer.toCanvas());
      } else if (v2 instanceof Group) {
        const newShapes = [];
        for (let i = 0; i < v2.shapes.length; i += 1) {
          newShapes.push(rgbAdjust2(v2.shapes[i]));
        }
        return new Group(newShapes);
      } else if (v2 instanceof Path) {
        const p = v2.clone();
        p.fill = rgbAdjust2(p.fill);
        p.stroke = rgbAdjust2(p.stroke);
        return p;
      }
      let c = v2;
      if (!(c instanceof Color)) {
        c = Color.parse(c);
      }
      return new Color(c.r + red, c.g + green, c.b + blue, c.a + alpha);
    }
    return rgbAdjust2(v);
  }
  function stack(shapes, direction, margin) {
    if (!shapes) {
      return [];
    }
    if (shapes.length <= 1) {
      return shapes;
    }
    let i, shape, tx, ty, t, bounds2, firstBounds = shapes[0].bounds(), newShapes = [];
    if (direction === "e") {
      tx = firstBounds.x;
      for (i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        bounds2 = shape.bounds();
        t = new Transform().translate(tx - bounds2.x, 0);
        newShapes.push(transform3(shape, t));
        tx += bounds2.width + margin;
      }
    } else if (direction === "w") {
      tx = firstBounds.x + firstBounds.width;
      for (i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        bounds2 = shape.bounds();
        t = new Transform().translate(tx - (bounds2.x + bounds2.width), 0);
        newShapes.push(transform3(shape, t));
        tx -= bounds2.width + margin;
      }
    } else if (direction === "n") {
      ty = firstBounds.y + firstBounds.height;
      for (i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        bounds2 = shape.bounds();
        t = new Transform().translate(0, ty - (bounds2.y + bounds2.height));
        newShapes.push(transform3(shape, t));
        ty -= bounds2.height + margin;
      }
    } else if (direction === "s") {
      ty = firstBounds.y;
      for (i = 0; i < shapes.length; i += 1) {
        shape = shapes[i];
        bounds2 = shape.bounds();
        t = new Transform().translate(0, ty - bounds2.y);
        newShapes.push(transform3(shape, t));
        ty += bounds2.height + margin;
      }
    }
    return newShapes;
  }
  function angle2(point1, point2) {
    const args = arguments;
    if (args.length === 4) {
      point1 = Point.read(args[0], args[1]);
      point2 = Point.read(args[2], args[3]);
    } else {
      point1 = Point.read(point1);
      point2 = Point.read(point2);
    }
    return degrees2(Math.atan2(point2.y - point1.y, point2.x - point1.x));
  }
  function coordinates2(point2, angle3, distance4) {
    const args = arguments;
    if (args.length === 4) {
      point2 = Point.read(args[0], args[1]);
      angle3 = args[2];
      distance4 = args[3];
    } else {
      point2 = Point.read(point2);
    }
    return coordinates(point2.x, point2.y, angle3, distance4);
  }
  function distance3(point1, point2) {
    const args = arguments;
    if (args.length === 4) {
      point1 = Point.read(args[0], args[1]);
      point2 = Point.read(args[2], args[3]);
    } else {
      point1 = Point.read(point1);
      point2 = Point.read(point2);
    }
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }
  function grayColor(gray, alpha) {
    if (!alpha && alpha !== 0) {
      alpha = 1;
    }
    return Color.gray(gray, alpha, 1);
  }
  function hexColor(s) {
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (isNumeric(s)) {
      s = s.toString(16);
    } else {
      s = String(s);
    }
    if (s[0] !== "#") {
      s = "#" + s;
    }
    return Color.parse(s);
  }
  function hslColor(hue, saturation, lightness, alpha) {
    if (!alpha && alpha !== 0) {
      alpha = 1;
    }
    return Color.hsl(hue, saturation, lightness, alpha, 1);
  }
  function rgbColor(red, green, blue, alpha) {
    if (!alpha && alpha !== 0) {
      alpha = 1;
    }
    return Color.rgb(red, green, blue, alpha, 1);
  }
  function desaturate(shape, method) {
    if (!shape) {
      return null;
    }
    return shape.desaturate({ method });
  }
  function invert(shape) {
    if (!shape) {
      return null;
    }
    if (shape instanceof Img) {
      const image = shape;
      const layer = image.toLayer(false);
      layer.addFilter("invert");
      return image.withCanvas(layer.toCanvas());
    }
    return shape.invert();
  }

  // src/libraries/easing.js
  var easing_exports = {};
  __export(easing_exports, {
    easeInBack: () => easeInBack,
    easeInBounce: () => easeInBounce,
    easeInCirc: () => easeInCirc,
    easeInCubic: () => easeInCubic,
    easeInElastic: () => easeInElastic,
    easeInExpo: () => easeInExpo,
    easeInOutBack: () => easeInOutBack,
    easeInOutBounce: () => easeInOutBounce,
    easeInOutCirc: () => easeInOutCirc,
    easeInOutCubic: () => easeInOutCubic,
    easeInOutElastic: () => easeInOutElastic,
    easeInOutExpo: () => easeInOutExpo,
    easeInOutQuad: () => easeInOutQuad,
    easeInOutQuart: () => easeInOutQuart,
    easeInOutQuint: () => easeInOutQuint,
    easeInOutSine: () => easeInOutSine,
    easeInQuad: () => easeInQuad,
    easeInQuart: () => easeInQuart,
    easeInQuint: () => easeInQuint,
    easeInSine: () => easeInSine,
    easeOutBack: () => easeOutBack,
    easeOutBounce: () => easeOutBounce,
    easeOutCirc: () => easeOutCirc,
    easeOutCubic: () => easeOutCubic,
    easeOutElastic: () => easeOutElastic,
    easeOutExpo: () => easeOutExpo,
    easeOutQuad: () => easeOutQuad,
    easeOutQuart: () => easeOutQuart,
    easeOutQuint: () => easeOutQuint,
    easeOutSine: () => easeOutSine,
    easing: () => easing
  });
  function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
  }
  function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
  function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }
  function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }
  function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
  function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
  function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }
  function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }
  function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }
  function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }
  function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }
  function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }
  function easeInExpo(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }
  function easeOutExpo(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }
  function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * (t - 1)) + 2) + b;
  }
  function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }
  function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }
  function easeInOutCirc(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
  function easeInElastic(t, b, c, d) {
    let s;
    let p = 0;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  }
  function easeOutElastic(t, b, c, d) {
    let s;
    let p = 0;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  }
  function easeInOutElastic(t, b, c, d) {
    let s;
    let p = 0;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }
  function easeInBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }
  function easeOutBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
  function easeInOutBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
  function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
  }
  function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  }
  function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
      return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    }
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
  function easing(f) {
    const fn = easing_exports[f];
    const args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  }

  // src/g.js
  function importSVG(svgString) {
    return g.svg.parseString(svgString);
  }
  function importImage(image) {
    const layer = g.Layer.fromImage(image);
    return new g.Img(layer.toCanvas());
  }
  function importText(string2) {
    return string2 ? String(string2) : "";
  }
  function splitRow(s, delimiter) {
    let row = [], c, col = "", i, inString = false;
    s = s.trim();
    for (i = 0; i < s.length; i += 1) {
      c = s[i];
      if (c === '"') {
        if (s[i + 1] === '"') {
          col += '"';
          i += 1;
        } else {
          inString = !inString;
        }
      } else if (c === delimiter) {
        if (!inString) {
          row.push(col);
          col = "";
        } else {
          col += c;
        }
      } else {
        col += c;
      }
    }
    row.push(col);
    return row;
  }
  function importCSV(csvString, delimiter) {
    let csvRows, header;
    delimiter = delimiter || ",";
    if (!csvString) {
      return null;
    }
    csvRows = csvString.split(/\r\n|\r|\n/g);
    header = splitRow(csvRows[0], delimiter);
    csvRows = csvRows.slice(1);
    let row, rows = [];
    let m, sr, col, index2;
    for (let i = 0; i < csvRows.length; i += 1) {
      row = csvRows[i];
      if (row) {
        m = {};
        sr = splitRow(row, delimiter);
        for (index2 = 0; index2 < sr.length; index2 += 1) {
          col = sr[index2];
          m[header[index2]] = isNaN(col) ? col : parseFloat(col);
        }
        rows.push(m);
      }
    }
    return rows;
  }
  function merge3() {
    const args = flatten(arguments);
    if (Array.isArray(args)) {
      const objects = [];
      for (let i = 0; i < args.length; i += 1) {
        if (args[i]) {
          objects.push(args[i]);
        }
      }
      if (objects.length > 0) {
        const o = objects[0];
        if (o && (o.commands || o.shapes || o.fontFamily)) {
          return merge(objects);
        }
      }
    }
    return null;
  }
  function mix2(a, b, t) {
    t = t !== void 0 ? t : 0.5;
    if (typeof a === "number") {
      return a * (1 - t) + b * t;
    } else if (a instanceof g.Color && b instanceof g.Color) {
      return new g.Color(
        g.mix(a.r, b.r, t),
        g.mix(a.g, b.g, t),
        g.mix(a.b, b.b, t),
        g.mix(a.a, b.a, t)
      );
    } else if (typeof a === "object") {
      const result = {};
      const keys2 = Object.keys(a);
      for (let i = 0, n = keys2.length; i < n; i += 1) {
        const k = keys2[i];
        const va = a[k];
        const vb = b[k];
        if (va !== void 0 && vb !== void 0) {
          result[k] = g.mix(va, vb, t);
        }
      }
      return result;
    } else {
      return 0;
    }
  }
  var g = {
    ...vg_exports,
    ...util_exports,
    ...math_exports2,
    ...string_exports,
    ...list_exports,
    ...data_exports,
    ...graphics_exports,
    ...easing_exports,
    importSVG,
    importImage,
    importText,
    importCSV,
    merge: merge3,
    mix: mix2
  };
  var g_default = g;
  return __toCommonJS(g_exports);
})();
/*!
 * Image processing based on Pixastic library:
 *
 * Pixastic - JavaScript Image Processing
 * http://pixastic.com/
 * Copyright 2012, Jacob Seidelin
 *
 * Dual licensed under the MPL 1.1 or GPLv3 licenses.
 * http://pixastic.com/license-mpl.txt
 * http://pixastic.com/license-gpl-3.0.txt
 *
 */
g = g.default;
//# sourceMappingURL=g.js.map
