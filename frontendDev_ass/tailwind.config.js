/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor: '#6B3CC9',
        SecondaryColor: "#F28D35",
        AnalogousColor1:'#6A44F2',
        AnalogousColor2:'#1CBDDD',
        TriadicColor1:'#52378C',
        DarkColor:'#78BF91',
        Textcolor:'#2F2F2F',
        TextColorLight:'#545A75',
        TextColorSubtle:'#9C9991',
        AccentColor1:'#E2F2FE',
        AccentColor2:'#FFF8E0',
        ErrorColor:'FF0335',
        SuccessColor:'#5EB30B',
        lg1:'#1CBDDD',
        lg2:'#4DCA79',
        bg:'#FAF8FF'

      },
      screens: {
        
        'xs': '375px', // Extra Small
        'sm': '768px', // Small
        'md': '1200px', // Medium
        'lg': '1440px', // Large
      },
      padding: {
        '20px': '20px',
        '40px': '40px',
        '60px': '60px',
        '80px': '80px',
      },
    },
    fontSize:{
      tx:['14px','16.94px'],
      tx2:['16px','19.2px'],
      tx3:['21px','25.41px'],
      tx4:['48px','48px'],
      tx5:['14px','14px'],
      tx6:['36px','36px'],
      tx7:['22px','28px'],
      tx8:['27px','33px'],
      tx9:['18px','30px'],
    }
  },
  plugins: [],
}

