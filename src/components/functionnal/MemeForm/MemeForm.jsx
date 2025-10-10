import React, { useEffect, useState } from "react";
import style from "./MemeForm.module.css";
import Button from "../../ui/Button/Button";

const MemeForm = ({ meme, images, onMemeChange, onMemeSave }) => {
  const [currentMeme, setCurrentMeme] = useState(meme);

  // Changement d'un champ entier -
  // Warn: besoin que le nom de l'attribut soit identique au nom de l'input
  const onNumberInputChange = (evt) => {
    const newState = { ...currentMeme };
    newState[evt.target.name] = parseInt(evt.target.value);
    setCurrentMeme(newState);
  };

  const onStringInputChange = (evt) => {
    const newState = { ...currentMeme };
    newState[evt.target.name] = evt.target.value;
    setCurrentMeme(newState);
  };

  const onCheckInputChange = (evt) => {
    const newState = { ...currentMeme };
    newState[evt.target.name] = evt.target.checked;
    setCurrentMeme(newState);
  };

  useEffect(() => {
    onMemeChange(currentMeme);
  }, [currentMeme]);

  return (
    <div className={style.MemeForm}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          // onMemeChange(currentMeme);
          onMemeSave(currentMeme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={currentMeme.titre}
          onChange={onStringInputChange}
        />
        <hr />
        <label htmlFor="imageId">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="imageId"
          id="imageId"
          value={currentMeme.imageId}
          onChange={onNumberInputChange}
        >
          <option value="-1">No image</option>
          {images.map((img, i) => (
            <option key={"option" + i} value={img.id}>
              {img.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          defaultValue={currentMeme.text}
          onChange={onStringInputChange}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="x"
          id="x"
          type="number"
          defaultValue={currentMeme.x}
          onChange={onNumberInputChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="y"
          id="y"
          type="number"
          defaultValue={currentMeme.y}
          onChange={onNumberInputChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={currentMeme.color}
          onChange={onStringInputChange}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          defaultValue={currentMeme.fontSize}
          onChange={onNumberInputChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          defaultValue={currentMeme.fontWeight}
          onChange={onNumberInputChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={currentMeme.underline}
          onChange={onCheckInputChange}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={currentMeme.italic}
          onChange={onCheckInputChange}
        />
        <hr />
        <br />
        <Button type="reset" bgcolor="tomato">
          Reset
        </Button>
        <Button type="submit" bgcolor="skyblue">
          save
        </Button>
      </form>
    </div>
  );
};

export default MemeForm;
