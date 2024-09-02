import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "名前を入力してください";
    }
    if (!formData.email) {
      newErrors.email = "メールアドレスを入力してください";
    }
    if (!formData.phone) {
      newErrors.phone = "電話番号を入力してください";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("データを送信しました");
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div className="container">
      <h1 className="heading">ユーザーフォーム</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label">名前：</label>
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">メールアドレス：</label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">電話番号：</label>
          {errors.phone && <span className="error">{errors.phone}</span>}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          送信
        </button>
      </form>
    </div>
  );
}

export default App;
