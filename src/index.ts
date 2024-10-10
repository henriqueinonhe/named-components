import { ReactHTML, createElement, forwardRef } from "react";

const makePrimitiveComponentFactory =
  <ElementName extends keyof ReactHTML>(elementName: ElementName) =>
  (baseClassName?: string) => {
    const Component = forwardRef<
      HTMLElement,
      JSX.IntrinsicElements[ElementName]
    >((props, ref) => {
      // The `undefined` is to prevent the `className` prop from being passed
      // if no classes are specified.
      const className =
        [baseClassName, props.className].filter(Boolean).join(" ") || undefined;

      return createElement(elementName, { ...props, className, ref });
    });

    Component.displayName = elementName;

    return Component;
  };

export const makeA = makePrimitiveComponentFactory("a");
export const makeAbbr = makePrimitiveComponentFactory("abbr");
export const makeAddress = makePrimitiveComponentFactory("address");
export const makeArea = makePrimitiveComponentFactory("area");
export const makeArticle = makePrimitiveComponentFactory("article");
export const makeAside = makePrimitiveComponentFactory("aside");
export const makeAudio = makePrimitiveComponentFactory("audio");
export const makeB = makePrimitiveComponentFactory("b");
export const makeBase = makePrimitiveComponentFactory("base");
export const makeBdi = makePrimitiveComponentFactory("bdi");
export const makeBdo = makePrimitiveComponentFactory("bdo");
export const makeBig = makePrimitiveComponentFactory("big");
export const makeBlockquote = makePrimitiveComponentFactory("blockquote");
export const makeBody = makePrimitiveComponentFactory("body");
export const makeBr = makePrimitiveComponentFactory("br");
export const makeButton = makePrimitiveComponentFactory("button");
export const makeCanvas = makePrimitiveComponentFactory("canvas");
export const makeCaption = makePrimitiveComponentFactory("caption");
export const makeCenter = makePrimitiveComponentFactory("center");
export const makeCite = makePrimitiveComponentFactory("cite");
export const makeCode = makePrimitiveComponentFactory("code");
export const makeCol = makePrimitiveComponentFactory("col");
export const makeColgroup = makePrimitiveComponentFactory("colgroup");
export const makeData = makePrimitiveComponentFactory("data");
export const makeDatalist = makePrimitiveComponentFactory("datalist");
export const makeDd = makePrimitiveComponentFactory("dd");
export const makeDel = makePrimitiveComponentFactory("del");
export const makeDetails = makePrimitiveComponentFactory("details");
export const makeDfn = makePrimitiveComponentFactory("dfn");
export const makeDialog = makePrimitiveComponentFactory("dialog");
export const makeDiv = makePrimitiveComponentFactory("div");
export const makeDl = makePrimitiveComponentFactory("dl");
export const makeDt = makePrimitiveComponentFactory("dt");
export const makeEm = makePrimitiveComponentFactory("em");
export const makeEmbed = makePrimitiveComponentFactory("embed");
export const makeFieldset = makePrimitiveComponentFactory("fieldset");
export const makeFigcaption = makePrimitiveComponentFactory("figcaption");
export const makeFigure = makePrimitiveComponentFactory("figure");
export const makeFooter = makePrimitiveComponentFactory("footer");
export const makeForm = makePrimitiveComponentFactory("form");
export const makeH1 = makePrimitiveComponentFactory("h1");
export const makeH2 = makePrimitiveComponentFactory("h2");
export const makeH3 = makePrimitiveComponentFactory("h3");
export const makeH4 = makePrimitiveComponentFactory("h4");
export const makeH5 = makePrimitiveComponentFactory("h5");
export const makeH6 = makePrimitiveComponentFactory("h6");
export const makeHead = makePrimitiveComponentFactory("head");
export const makeHeader = makePrimitiveComponentFactory("header");
export const makeHgroup = makePrimitiveComponentFactory("hgroup");
export const makeHr = makePrimitiveComponentFactory("hr");
export const makeHtml = makePrimitiveComponentFactory("html");
export const makeI = makePrimitiveComponentFactory("i");
export const makeIframe = makePrimitiveComponentFactory("iframe");
export const makeImg = makePrimitiveComponentFactory("img");
export const makeInput = makePrimitiveComponentFactory("input");
export const makeIns = makePrimitiveComponentFactory("ins");
export const makeKbd = makePrimitiveComponentFactory("kbd");
export const makeLabel = makePrimitiveComponentFactory("label");
export const makeLegend = makePrimitiveComponentFactory("legend");
export const makeLi = makePrimitiveComponentFactory("li");
export const makeLink = makePrimitiveComponentFactory("link");
export const makeMain = makePrimitiveComponentFactory("main");
export const makeMap = makePrimitiveComponentFactory("map");
export const makeMark = makePrimitiveComponentFactory("mark");
export const makeMenu = makePrimitiveComponentFactory("menu");
export const makeMeta = makePrimitiveComponentFactory("meta");
export const makeMeter = makePrimitiveComponentFactory("meter");
export const makeNav = makePrimitiveComponentFactory("nav");
export const makeNoscript = makePrimitiveComponentFactory("noscript");
export const makeObject = makePrimitiveComponentFactory("object");
export const makeOl = makePrimitiveComponentFactory("ol");
export const makeOptgroup = makePrimitiveComponentFactory("optgroup");
export const makeOption = makePrimitiveComponentFactory("option");
export const makeOutput = makePrimitiveComponentFactory("output");
export const makeP = makePrimitiveComponentFactory("p");
export const makeParam = makePrimitiveComponentFactory("param");
export const makePicture = makePrimitiveComponentFactory("picture");
export const makePre = makePrimitiveComponentFactory("pre");
export const makeProgress = makePrimitiveComponentFactory("progress");
export const makeQ = makePrimitiveComponentFactory("q");
export const makeRp = makePrimitiveComponentFactory("rp");
export const makeRt = makePrimitiveComponentFactory("rt");
export const makeRuby = makePrimitiveComponentFactory("ruby");
export const makeS = makePrimitiveComponentFactory("s");
export const makeSamp = makePrimitiveComponentFactory("samp");
export const makeScript = makePrimitiveComponentFactory("script");
export const makeSearch = makePrimitiveComponentFactory("search");
export const makeSection = makePrimitiveComponentFactory("section");
export const makeSelect = makePrimitiveComponentFactory("select");
export const makeSlot = makePrimitiveComponentFactory("slot");
export const makeSmall = makePrimitiveComponentFactory("small");
export const makeSource = makePrimitiveComponentFactory("source");
export const makeSpan = makePrimitiveComponentFactory("span");
export const makeStrong = makePrimitiveComponentFactory("strong");
export const makeStyle = makePrimitiveComponentFactory("style");
export const makeSub = makePrimitiveComponentFactory("sub");
export const makeSummary = makePrimitiveComponentFactory("summary");
export const makeSup = makePrimitiveComponentFactory("sup");
export const makeTable = makePrimitiveComponentFactory("table");
export const makeTbody = makePrimitiveComponentFactory("tbody");
export const makeTd = makePrimitiveComponentFactory("td");
export const makeTemplate = makePrimitiveComponentFactory("template");
export const makeTextarea = makePrimitiveComponentFactory("textarea");
export const makeTfoot = makePrimitiveComponentFactory("tfoot");
export const makeTh = makePrimitiveComponentFactory("th");
export const makeThead = makePrimitiveComponentFactory("thead");
export const makeTime = makePrimitiveComponentFactory("time");
export const makeTitle = makePrimitiveComponentFactory("title");
export const makeTr = makePrimitiveComponentFactory("tr");
export const makeTrack = makePrimitiveComponentFactory("track");
export const makeU = makePrimitiveComponentFactory("u");
export const makeUl = makePrimitiveComponentFactory("ul");
export const makeVar = makePrimitiveComponentFactory("var");
export const makeVideo = makePrimitiveComponentFactory("video");
export const makeWbr = makePrimitiveComponentFactory("wbr");
