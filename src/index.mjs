import { element } from "prop-types";
import { useState } from "react";

const React = require("react");
const ReactDOM = require("react-dom");

ReactDOM.render(document.getElementById("root"), <Index />);

export default function Index() {
  const [elementSelected, setElementSelected] = useState(null);
  const [style, setStyle] = useState({
    backgroundColor: "",
    border: "",
    position: "",
    width: "",
    heigth: "",

    margin: "",
    marginLeft: "",
    marginTop: "",
    marginRight: "",
    marginBottom: "",

    padding: "",
    paddingLeft: "",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",

    left: "",
    top: "",
    right: "",
    bottom: "",
  });

  // MOUSE SELECT

  const handleSelect = useCallback(
    (e) => {
      let element = e.target;
      setElementSelected(() => element);
    },
    [elementSelected]
  );

  useEffect(() => {
    window.addEventListener("click", handleSelect);
    return () => {
      window.removeEventListener("click", handleSelect);
    };
  }, [handleSelect]);

  const handleChangeValue = (e) => {
    if (!elementSelected) throw new Error("select element before setValue");
    let element = elementSelected;
    let { name, value } = e.target;
    // check and clean
    if (element.style[name]) element.style[name] = "";
    
    // add
    element.style += Cssproperty(name, value);
    // or
    setStyle((currentStyle) => {
      return { ...currentStyle, [name]: Cssproperty(name, value) };
    });
  };

  const Cssproperty = (key, value) => {
    let property = null;
    switch (key) {
      case "backgroudColor":
        property = `background-color: ${value};`;
        return property;
        break;
      case "position":
        property = `position: ${value}`;
        return property;
        break;
      case "display":
        property = `display: ${value}`;
        return property;
        break;
      case "width":
        property = `width: ${value}`;
        return property;
        break;
      case "height":
        property = `height: ${value}`;
        return property;

        break;
      case "margin":
        property = `margin: ${value}`;
        return property;
        break;
      case "marginLeft":
        property = `margin-left: ${value}`;
        return property;
        break;
      case "marginTop":
        property = `margin-top: ${value}`;
        return property;
        break;
      case "marginRight":
        property = `margin-right: ${value}`;
        return property;
        break;
      case "marginBottom":
        property = `margin-bottom: ${value}`;
        return property;
        break;
      case "padding":
        property = `padding: ${value}`;

        break;
      case "paddingLeft":
        property = `padding-left: ${value}`;
        return property;
        break;
      case "paddingTop":
        property = `padding-top: ${value}`;
        return property;
        break;
      case "paddingRight":
        property = `paddingRight: ${value}`;
        return property;
        break;
      case "paddingBottom":
        property = `paddingBottom: ${value}`;
        return property;
        break;
      case "top":
        property = `top: ${value}`;
        return property;
        break;
      case "left":
        property = `left: ${value}`;
        return property;
        break;
      case "bottom":
        property = `bottom: ${value}`;
        return property;
        break;
      case "right":
        property = `right: ${value}`;
        return property;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="controlPanel">
        <div className="controlPanel-comportement">
          <input
            className="inputPanel-position"
            name="position"
            value={style.position}
          ></input>
          <input
            className="inputPanel-display"
            name="display"
            value={style.display}
          ></input>
        </div>
        <div className="controlPanel-size"></div>
        <input
          className="inputPanel-width"
          name="width"
          value={style.width}
        ></input>
        <input
          className="inputPanel-height"
          name="height"
          value={style.height}
        ></input>

        <div className="controlPanel-position">
          <label for="left">left</label>
          <input
            className="inputPanel-left"
            name="left"
            value={style.left}
          ></input>
          <label for="top">top</label>
          <input
            className="inputPanel-top"
            name="top"
            value={style.top}
          ></input>
          <label for="right">right</label>
          <input
            className="inputPanel-right"
            name="right"
            value={style.right}
          ></input>
          <label for="bottom">bottom</label>
          <input
            className="inputPanel-bottom"
            name="bottom"
            value={style.bottom}
          ></input>
        </div>
        <div className="controlPanel-margin">
          <label for="margin">margin</label>
          <input
            className="inputPanel-margin"
            name="margin"
            value={style.margin}
          ></input>
          <label for="marginLeft">margin-left</label>
          <input
            className="inputPanel-margin-left"
            name="marginLeft"
            value={style.margiLeft}
          ></input>
          <label for="marginTop">margint-top</label>
          <input
            className="inputPanel-margin-top"
            name="marginTop"
            value={style.marginTop}
          ></input>
          <label for="marginRight">margin-right</label>
          <input
            className="inputPanel-margin-right"
            name="marginRight"
            value={style.marginRight}
          ></input>
          <label for="marginBottom">margin-bottom</label>
          <input
            className="inputPanel-margin-bottom"
            name="marginBottom"
            value={style.marginBottom}
          ></input>
        </div>
        <div className="controlPanel-padding">
          <label for="padding">padding</label>
          <input
            className="inputPanel-padding"
            name="padding"
            value={style.padding}
          ></input>
          <label for="padding-left">padding-left</label>
          <input
            className="inputPanel-padding-left"
            name="padding-left"
            value={style.paddingLeft}
          ></input>
          <label for="paddingTop">paddingt-top</label>
          <input
            className="inputPanel-padding-top"
            name="paddingTop"
            value={style.paddingTop}
          ></input>
          <label for="paddingRight">padding-right</label>
          <input
            className="inputPanel-padding-right"
            name="paddingRight"
            value={style.paddingRight}
          ></input>
          <label for="paddingBottom">padding-bottom</label>
          <input
            className="inputPanel-padding-bottom"
            name="paddingBottom"
            value={style.paddingBottom}
          ></input>
        </div>
      </div>
    </>
  );
}
