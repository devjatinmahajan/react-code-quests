import { useState } from "react";
import { checkboxes } from "../../data/challenge-v-checkboxes";
import Checkbox from "./checkbox";

export default function ChallengeV() {
  const [listItems, setListItems] = useState(checkboxes);
  const handleSelectAll = (checked) => {
    const temp = listItems.map((el) => {
      return { ...el, checked };
    });
    setListItems(temp);
  };
  const handleChecked = (element, checkedValue) => {
    let temp = listItems.map((el) =>
      el.id === element.id ? { ...el, checked: checkedValue } : el
    );

    setListItems(temp);
  };
  return (
    <section>
      <div className="select-all-container">
        <Checkbox
          label={"SELECT ALL"}
          checked={
            listItems.filter((el) => el?.checked !== true).length > 0
              ? false
              : true
          }
          onChange={(checked) => handleSelectAll(checked)}
        />
      </div>
      <div className="input-checkbox">
        {listItems.map((item) => (
          <Checkbox
            label={item.label}
            key={item.id}
            checked={item.checked ?? false}
            onChange={(e) => handleChecked(item, e)}
          />
        ))}
      </div>
    </section>
  );
}
