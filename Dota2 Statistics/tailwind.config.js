/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors : 
    {
        background : "#26262A",
        primaryText : "#fff",
        secondaryText : "#D9D9D9",
        thirdText : "#808080",
        gradientOne : "rgba(101, 247, 218, 0.5)",
        gradientTwo : "rgba(38, 38, 42, 0.8)",
        card : "#3D3D43",
        secondaryCard : "#1E1E1E",
        primaryBtn : "#65F7DA",
        secondaryBtn : "rgba(101, 247, 218, 0.3)"
    },

    fontFamily : 
    {
        heading : ["Roboto", "sans-serif"],
        paragraph : ["Inria Serif", "serif"],
        stylish : ["Itim", "sans-serif"]
    },

    boxShadow : 
    {
        primary : "0px 4px 4px 0px #3b3ba2",
        agility : "0px 1px 4px 0px #3ba25b",
        strength : "0px 1px 4px 0px #a23b3d",
        intel : "0px 1px 4px 0px #3B84A2",
        universal : "0px 1px 4px 0px #673BA2"
    },

    fontSize : 
    {
        LevelOne : "36px",
        LevelTwo : "32px",
        LevelThree : "28px",
        LevelFour : "24px",
        LevelFive : "20px",
        LevelSix : "16px",
        LevelSeven : "12px"
    }
  } },
  plugins: [],
};