import React from "react";

function ReminderCardItem(props) {
  var emoticon = "꒰ (･‿･) ꒱";
  var color = "#F7CB58";
  var width = 300;
  var length = 323;
  var topRight = 120;
  var bottomRight = 80;
  var topLeft = 90;
  var bottomLeft = 110;
  // logic here urgency level and color of the card and the size of the box

  if (props.item.urgency === "2") {
    emoticon = "乁(ツ)ㄏ ";
    color = "#A5BF58";
    topRight = 100;
    bottomRight = 140;
    topLeft = 130;
    bottomLeft = 120;
    length = 363;
  }
  if (props.item.urgency === "3") {
    emoticon = "╰(⸝⸝⸝´꒳`⸝⸝⸝)╯";
    color = "#7FA7F8";
    length = 398;
    topRight = 110;
    bottomRight = 130;
    topLeft = 120;
    bottomLeft = 100;
  }
  if (props.item.urgency === "4") {
    emoticon = "(ー_ーゞ";
    color = "#8677D8";
    length = 438;
    topRight = 130;
    bottomRight = 120;
    topLeft = 180;
    bottomLeft = 110;
  }
  if (props.item.urgency === "5") {
    emoticon = "໒( ⇀ ‸ ↼ )७";
    color = "#EC6139";
    length = 500;
    topRight = 130;
    bottomRight = 120;
    topLeft = 130;
    bottomLeft = 110;
  }
  console.log(props.item);
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: width,
          height: length,
          borderTopRightRadius: topRight,
          borderBottomRightRadius: bottomRight,
          borderTopLeftRadius: topLeft,
          borderBottomLeftRadius: bottomLeft,

          display: "flex", // add this line to enable flexbox layout
          justifyContent: "center", // add this line to center align the content,
        }}
      >
        <div
          className=""
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="icon"
            style={{
              display: "table",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {emoticon}
          </div>
          <div className="reminderText">{props.item.text}</div>
        </div>
      </div>
    </>
  );
}

export default ReminderCardItem;
