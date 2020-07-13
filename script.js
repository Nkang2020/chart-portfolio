var myConfigy = {
    type: 'bar',
    title: {
      text: "The Legend of Zelda Sales Comparison",
      fontColor: "black",
      'fontFamily': 'Courier',
      fontSize: 30,
      align: 'left',
      offsetX: 10
    },
    labels: [{
      text: "Total Copies Sold: 82,750,000<br>Current as of December 2018",
      "font-weight": "bold",
      "font-color": "#808582",
      "font-size": 22,
      "font-family": "Courier",
      'text-align': "left",
      x: 190,
      y: 103
    }],
    tooltip: {
      placement: "node:top",
      'fontFamily': 'Courier',
      text: "%data-fulltext"
    },
    scaleY: {
      minValue: 0,
      maxValue: 15000000,
      step: 3000000,
      'short': true,
      item: {
        "font-family": "Courier",
        fontSize: 13
      },
      label: {
        text: "Number of Copies Sold",
        "font-family": "Courier",
        fontSize: 15
      }
    },
    scaleX: {
      maxItems: 999,
      item: {
        "font-weight": "bold",
        "font-color": "black",
        "font-size": 12,
        "font-family": "Courier"
      },
      values: ["Link's Awakening<br>6,050,000", "Majora's Mask<br>6,360,000", "The Wind Waker<br>6,710,000", "The Adventure<br>of Link<br>6,820,000", "The Legend of<br>Zelda<br>9,030,000", "Twilight Princess<br>9,960,000", "Breath of the<br>Wild<br>11,890,000", "A Link to the<br>Past<br>12,710,000", "Ocarina of Time<br>13,220,000"]
    },
    plotarea: {
      marginLeft: 90
    },
    "plot": {},
    series: [{
      values: [6050000, 6360000, 6710000, 6820000, 9030000, 9960000, 11890000, 12710000, 13220000],
      "data-fulltext": [
        "The original release of Link's Awakening for the Game<br>Boy has sold approximately 3.83 million units worldwide,<br>including 2.24 million in the Americas. In addition,<br>Link's Awakening DX has sold 2.22 million worldwide,<br>making the total over 6 million for both games. About<br>540,000 were sold in Japan.",
        "Majora's Mask sold approximately 314,000 copies<br>in its first week of sales in Japan and has sold<br>3.36 million copies worldwide. About 601,539 were<br>sold in Japan. Majora's Mask is the direct sequel<br>to the best selling title, Ocarina of Time in the<br>Zelda franchise. Factors, including its significant<br>difference in comparison to the rest of the series,<br>it's release near the end of the N64's lifetime<br>and because it's requirement of the Expansion Pak,<br>caused sales to be lower than other Zelda titles.",
        "As of July 2006, it's the fifth best-selling GameCube<br>title in Japan, with 742,000 units.",
        "Despite being the dark horse of the franchise, The<br>Adventure of Link sold very well on the NES since<br>its debut in 1987 (JPN) and 1988 (USA). Over 4.38<br>million copies of Zelda II have been sold<br>worldwide. About 1,610,000 were sold in Japan.",
        "Appearing in 1986 (JPN) and 1987 (USA), the Legend<br>of Zelda was a bestseller for Nintendo, selling over<br>6.5 million copies. About 1,690,000 were sold in Japan.",
        "The Wii version of Twilight Princess sold over one<br>million copies in the Americas, 14,068 during its<br>first two days in Japan, and 240,000 during its first<br>weekend in Europe. During its first week, the game<br>was sold with three of every four Wii purchases and<br>passing one million Wii units sold in North America<br>within three months. In its first month of availability,<br>the GameCube version sold 32,900 units, and briefly<br>outsold the Wii version. The game has sold 5.23 million<br>copies on the Wii as of March 1, 2008, and 1.59 million<br>on the GameCube as of March 31, 2007.",
        "Breath of the Wild sold 130,000 units (96,000 on the<br>Nintendo Switch and 34,000 on the Wii U) opening day<br>in France. In Japan the game sold 190,060 in the first<br>72 hours.",
        "A Link to the Past is one of the best-selling SNES<br>games, with 4.61 million units sold worldwide. It<br>was re-released as a Player's Choice title in North<br>America, indicating that it has sold a minimum of<br>one million copies there. About 1,160,000 were sold<br>in Japan.",
        "Ocarina of Time sold 2 million copies during the<br>first 39 days it was available in 1998, and<br>became the best-selling game of that year. During<br>its lifetime, it sold 7.6 million copies worldwide,<br>excluding ports and re-releases, making it the<br>highest selling game on a single platform."
      ],
      "styles": [{
          "background-image": "https://i.imgur.com/JYHGfXx.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/67hnFG6.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/o1cesb1.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/1AXK999.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/tokXwCg.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/r99QEUW.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/hLuWB91.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/9WrcCqS.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
        {
          "background-image": "https://i.imgur.com/uEZJpzL.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none",
        },
   
   
      ]
    }]
  };
   
  zingchart.render({
    id: 'myCharty',
    data: myConfigy,
    height: '500px',
    width: '1400px'
  });


  var myConfig2 = {
    "type": "bar",
    "background-image": "https://i.imgur.com/EM2YFh3.png",
    "background-repeat": false,
    "background-fit": 'xy',
    title: {
      text: "McGregor\'s Earnings per Fight",
      fontColor: "black",
      fontFamily: 'Open Sans',
      fontSize: 30,
      align: 'left',
      offsetX: 10
    },
    "plot": {
      "hover-state": {
        "visible": false
      }
    },
    "tooltip": {
      "visible": true,
      "text": "%data-fullname",
      "text-wrap": true,
      "width": 300,
      "backgroundColor": "white",
      "borderColor": "#000",
      "borderWidth": 2,
      "borderRadius": "5px",
      "bold": true,
      "fontSize": "12px",
      "fontColor": "#2f2f2f",
      "textAlign": "left",
      "padding": "15px",
      "shadow": true,
      "shadowAlpha": 0.2,
      "shadowBlur": 5,
      "shadowDistance": 4,
      "shadowColor": "#a1a1a1"
    },
    "plotarea": {
      marginBottom: 110,
      marginLeft: 100,
      marginRight: 100
    },
    "labels": [{
        "background-image": "https://i.imgur.com/lduGAEL.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=0',
   
      },
      {
        "background-image": "https://i.imgur.com/qXi58JP.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=1',
   
      },
      {
        "background-image": "https://i.imgur.com/mhwkF2O.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=2',
   
      },
      {
        "background-image": "https://i.imgur.com/Bb5OBlE.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=3',
   
      },
      {
        "background-image": "https://i.imgur.com/JceOzg3.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=4',
   
      },
      {
        "background-image": "https://i.imgur.com/JurFKM1.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=5',
   
      },
      {
        "background-image": "https://i.imgur.com/S822FJu.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=6',
   
      },
      {
        "background-image": "https://i.imgur.com/YZyRAzR.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=7',
   
      },
      {
        "background-image": "https://i.imgur.com/YZyRAzR.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=8',
   
      },
      {
        "background-image": "https://i.imgur.com/8mBhUUV.png",
        "background-fit": "xy",
        "offset-y": 60,
        "height": "70",
        "width": "80",
        'hook': 'scale:name=scale-x,index=9',
   
      },
      {
        "background-image": "https://i.imgur.com/gO0x24r.png",
        "background-repeat": "no-repeat",
        "background-position": "0 50%",
        "width": "300px",
        "height": "100px",
        "x": "1100px",
        "y": "25px",
        "text": " = $618,000"
      }
    ],
    "scale-x": {
      "line-color": "#000",
      "guide": {
        "visible": "false"
      },
      "values": [
        "Brimage",
        "Holloway",
        "Brandao",
        "Poirier",
        "Siver",
        "Mendes",
        "Aldo",
        "Diaz",
        "Diaz",
        "Alvarez"
      ],
      "item": {
        fontSize: 12,
        fontColor: "black"
      },
      "tick": {
        "line-color": "#000"
      }
    },
    "scale-y": {
      "line-color": "#000",
      short: true,
      "label": {
        "-item": {
          "offset-y": "10px"
        },
        "text": "USD",
        "font-size": "10px",
        "font-weight": "bold",
        "font-color": "#000"
      },
      "guide": {
        "visible": "false"
      },
      "item": {
        "font-color": "#000"
      },
      "tick": {
        "line-color": "#000"
      }
    },
    "series": [{
      "values": [
        76000,
        24000,
        82000,
        200000,
        220000,
        580000,
        590000,
        1090000,
        3090000,
        3090000
      ],
      "data-fullname": [
        "Apr 6/13 – W (Brimage) – $76,000 ($8,000 to<br>show, $8,000 win bonus, $60,000 Knockout<br>of the Night bonus)",
        "Aug 17/13 – W (Holloway) – $24,000<br>($12,000 to show, $12,000 win bonus)",
        "Jul 19/14 – W (Brandao) – $82,000<br>($16,000 to show, $16,000 win bonus,<br>$50,000 Performance of the Night bonus)*",
        " Sept 27/14 – W (Poirier) – $200,000<br>($75,000 to show, $75,000 win bonus,<br>$50,000 Performance of the Night bonus)",
        "Jan 18/15 – W (Siver) – $220,000 ($85,000<br>to show, $85,000 win bonus, $50,000<br>Performance of the Night bonus)",
        "Jul 11/15 – W (Mendes) – $580,000<br>($500,000 to show, $50,000 Performance<br>of the Night bonus, $30,000 Reebok<br>sponsorship)",
        "Dec 12/15 – W (Aldo) – $590,000 ($500,000<br>to show, $50,000 Performance of the Night<br>bonus, $40,000 Reebok sponsorship)",
        "Mar 5/16 – L (Na. Diaz) – $1,090,000<br>($1,000,000 to show, $50,000 Fight of the<br>Night bonus, $40,000 Reebok sponsorship)",
        "Aug 20/16 – W (Na. Diaz) – $3,090,000<br>($3,000,000 to show, $50,000 Fight of the<br>Night bonus, $40,000 Reebok sponsorship)",
        "Nov 12/16 – W (Alvarez) – $3,090,000<br>($3,000,000 to show, $50,000 Performance<br>of the Night bonus, $40,000 Reebok<br>sponsorship)"
      ],
      "styles": [{
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/gO0x24r.png",
          "background-repeat": "repeat-y",
          "background-fit": "x",
          "background-color": "none"
        },
   
      ]
    }]
  };
   
  zingchart.render({
    id: 'myChart2',
    data: myConfig2,
    height: '700px',
    width: '1400px'
  });


  // Popultion as of July 2017
var populationObj = {
    "NH": 1342795,
    "CA": 39536653,
    "AK": 739795,
    "AL": 4874747,
    "AZ": 7016270,
    "AR": 3004279,
    "CO": 5607154,
    "CT": 3588184,
    "DE": 961939,
    "DC": 693972,
    "FL": 20984400,
    "GA": 10429379,
    "HI": 1427538,
    "ID": 1716943,
    "IL": 12802023,
    "IN": 6666818,
    "IA": 3145711,
    "KS": 2913123,
    "KY": 4454189,
    "LA": 4684333,
    "ME": 1335907,
    "MD": 6052177,
    "MA": 6859819,
    "MI": 9962311,
    "MN": 5576606,
    "MS": 2984100,
    "MO": 6113532,
    "MT": 1050493,
    "NE": 1920076,
    "NV": 2998039,
    "NJ": 9005644,
    "NM": 2088070,
    "NY": 19849399,
    "NC": 10273419,
    "ND": 755393,
    "OH": 11658609,
    "OK": 3930864,
    "OR": 4142776,
    "PA": 12805537,
    "RI": 1059639,
    "SC": 5024369,
    "SD": 869666,
    "TN": 6715984,
    "TX": 28304596,
    "UT": 3101833,
    "VT": 623657,
    "VA": 8470020,
    "WA": 7405743,
    "WV": 1815857,
    "WI": 5795483,
    "WY": 579315
  }
   
  var IDS = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
  var data = {};
  for (var i = 0; i < IDS.length; i++) {
    var p = ZC._i_(ZC._r_(10, 90));
    data[IDS[i]] = {
      value: 0,
      dataDem: p,
      dataRep: (100 - p),
      gradientStops: [0.001, p / 100 - 0.01, p / 100 + 0.01, 0.999].join(' '),
    };
  }
   
   
   
   
  var cdata = {
    "type": "tilemap",
    title: {
        text: "Political Split",
        fontColor: "black",
        fontFamily: 'Open Sans',
        fontSize: 30,
        align: 'left',
        offsetX: 10,
        marginBottom:120,
      },
    "options": {
      "map": "USA",
      "type": "hex",
      "-size-factor": 1.1,
      "tile": {
        "fill-angle": 0,
        "gradient-colors": '#00f #00f #f00 #f00',
        "shadow": 1,
        "border-width": 1,
        "border-color": '#666',
        "shadow-distance": 4,
        "shadow-alpha": 0.75,
        "shadow-color": '#999'
      },
      "data": data
    },
    "tooltip": {
      "text": "<span style='font-size:21px;font-weight:bold'>%name</span><br><br><span style='color:#00f;font-size:17px'>Democrats:</span> %data-dem%<br><span style='color:#f00;font-size:17px'>Republicans:</span> %data-rep%",
      "html-mode": true,
      "padding": 10,
      "align": "left",
      "font-size": 17,
      "border-width": 1,
      "border-color": "#333",
      "font-weight": "600"
    },
    "plotarea": {
      "margin": "40 10 40 10"
    }
  };
   
   
  zingchart.render({
    id: 'zc',
    width: 640,
    height: 480,
    output: 'svg',
    data: cdata
  });



  zingchart.loadModules('maps, maps-usa', function(e) {
    zingchart.render({ 
        id: 'myChart', 
        data: {
       //   title: {
       //   text:"Rent Price Differences across America",
       //   fontFamily:"Roboto"
       // },
          shapes: [
            {
              title: {
                text:"Chloropleth map of Rent prices"
              },
              type: 'zingchart.maps',
              options: {
                name: 'usa',
                zooming: false,
                panning: false,
                scrolling: false,

                ignore: ['AK','HI'],
                style: {
                    controls: {
                        visible: false
                      },
                  items: {
                    CA: {
                      backgroundColor:"#D36A67"
                    },
                    OR: {
                      backgroundColor:"#F9BC7F"
                    },
                    WA: {
                      backgroundColor:"#E5896C"
                    },
                    NV: {
                      backgroundColor:"#E5896C"
                    },
                    NH: {
                      backgroundColor:"#E5896C"
                    },
                    ID: {
                      backgroundColor:"#389B96"
                    },
                    MT: {
                      backgroundColor:"#389B96"
                    },
                    UT: {
                      backgroundColor:"#F9BC7F"
                    },
                    RI: {
                      backgroundColor:"#F9BC7F"
                    },
                    DE: {
                      backgroundColor:"#F9BC7F"
                    },
                    AZ: {
                      backgroundColor:"#F9BC7F"
                    },
                    WY: {
                      backgroundColor:"#91BAA0"
                    },
                    CO: {
                      backgroundColor:"#E5896C"
                    },
                    NM: {
                      backgroundColor:"#389B96"
                    },
                    ND: {
                      backgroundColor:"#389B96"
                    },
                    ME: {
                      backgroundColor:"#389B96"
                    },
                    SD: {
                      backgroundColor:"#425B5E"
                    },
                    NE: {
                      backgroundColor:"#389B96"
                    },
                    KS: {
                      backgroundColor:"#389B96"
                    },
                    OK: {
                      backgroundColor:"#389B96"
                    },
                    TX: {
                      backgroundColor:"#E5896C"
                    },
                    MN: {
                      backgroundColor:"#E5896C"
                    },
                    IA: {
                      backgroundColor:"#389B96"
                    },
                    MO: {
                      backgroundColor:"#389B96"
                    },
                    AR: {
                      backgroundColor:"#425B5E"
                    },
                    LA: {
                      backgroundColor:"#91BAA0"
                    },
                    WI: {
                      backgroundColor:"#389B96"
                    },
                    MI: {
                      backgroundColor:"#389B96"
                    },
                    IL: {
                      backgroundColor:"#E5896C"
                    },
                    VT: {
                      backgroundColor:"#E5896C"
                    },
                    IN: {
                      backgroundColor:"#425B5E"
                    },
                    KY: {
                      backgroundColor:"#425B5E"
                    },
                    TN: {
                      backgroundColor:"#91BAA0"
                    },
                    MS: {
                      backgroundColor:"#389B96"
                    },
                    AL: {
                      backgroundColor:"#389B96"
                    },
                    GA: {
                      backgroundColor:"#E5896C"
                    },
                    FL: {
                      backgroundColor:"#F9BC7F"
                    },
                    NC: {
                      backgroundColor:"#91BAA0"
                    },
                    SC: {
                      backgroundColor:"#91BAA0"
                    },
                    VA: {
                      backgroundColor:"#D36A67"
                    },
                    NY: {
                      backgroundColor:"#D36A67"
                    },
                    NJ: {
                      backgroundColor:"#D36A67"
                    },
                    MD: {
                      backgroundColor:"#D36A67"
                    },
                    MA: {
                      backgroundColor:"#D36A67"
                    },
                    CT: {
                      backgroundColor:"#D36A67"
                    },
                    WV: {
                      backgroundColor:"#425B5E"
                    },
                    OH: {
                      backgroundColor:"#389B96"
                    },
                    PA: {
                      backgroundColor:"#E5896C"
                    },
                  }
                }
              }
            }
          ]
        },
        height: 450, 
        width: 750
    });
  });
  
  var testArr = []
  
  var myConfig2 = {
         noData:{
         text:"Click on a state",
         backgroundColor: "#20b2db",
         fontSize:18,
         textAlpha:.9,
         alpha:.6,
         bold:true
       },
       'scale-y': {
         visible:false
       },
       type: 'bar', 
      series: [
          {
              values: testArr
          }
      ]
  };
  
  
  zingchart.render({ 
      id: 'myChart2', 
      data: myConfig2, 
      height: 350, 
      width: 500 
  });
  
  zingchart.render({ 
      id: 'myChart4', 
      data: myConfig2, 
      height: 245, 
      width: 300
  });
  
  
  
  var myConfig3 = {
         noData:{
         text:"Click on a state",
         backgroundColor: "#20b2db",
         fontSize:18,
         textAlpha:.9,
         alpha:.6,
         bold:true
       },
       'scale-y': {
         visible:false
       },
       type: 'bar', 
      series: [
          {
              values: testArr
          }
      ]
  };
  
  zingchart.render({ 
      id: 'myChart3', 
      data: myConfig3, 
      height: 350, 
      width: 500 
  });
  var white;
  var black;
  var asian;
  var hispanic;
  var other1;
  var other;
  
  zingchart.click = function(p) {
    console.log(p.targetid)
    
    if (p.targetid === "myChart-graph-id0-shape-CA-gshape-area") {
      zingchart.loadModules('maps, maps-usa_ca', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ca',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [37];
      black = [5];
      hispanic = [39];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'California'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,358"},
        { "Statistic": "Median Household Income", "Value": "$67,169"},
        { "Statistic": "Per capital income yearly", "Value": "$33,128"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "28.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
    else if (p.targetid === "myChart-graph-id0-shape-OR-gshape-area") {
       zingchart.loadModules('maps, maps-usa_or', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_or',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [76];
      black = [2];
      hispanic = [13];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Oregon'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$988"},
        { "Statistic": "Median Household Income", "Value": "$56,119"},
        { "Statistic": "Per capital income yearly", "Value": "$30,410"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.2"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.5"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-WA-gshape-area") {
         zingchart.loadModules('maps, maps-usa_wa', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_wa',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [69];
      black = [3];
      hispanic = [13];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Washington'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,120"},
        { "Statistic": "Median Household Income", "Value": "$66,174"},
        { "Statistic": "Per capital income yearly", "Value": "$34,869"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "27.1"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-NV-gshape-area") {
           zingchart.loadModules('maps, maps-usa_nv', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nv',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [49];
      black = [9];
      hispanic = [29];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Nevada'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,017"},
        { "Statistic": "Median Household Income", "Value": "$55,434"},
        { "Statistic": "Per capital income yearly", "Value": "$28,450"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-ID-gshape-area") {
           zingchart.loadModules('maps, maps-usa_id', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_id',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [82];
      black = [1];
      hispanic = [12];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Idaho'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$792"},
        { "Statistic": "Median Household Income", "Value": "$50,985"},
        { "Statistic": "Per capital income yearly", "Value": "$25,471"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "12.8"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "20.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-UT-gshape-area") {
           zingchart.loadModules('maps, maps-usa_ut', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ut',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [79];
      black = [1];
      hispanic = [14];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Utah'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$948"},
        { "Statistic": "Median Household Income", "Value": "$65,325"},
        { "Statistic": "Per capital income yearly", "Value": "$26,907"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "9.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "21.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-AZ-gshape-area") {
           zingchart.loadModules('maps, maps-usa_az', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_az',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [55];
      black = [4];
      hispanic = [31];
      asian = [4];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Arizona'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$972"},
        { "Statistic": "Median Household Income", "Value": "$53,510"},
        { "Statistic": "Per capital income yearly", "Value": "$27,964"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.9"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "25.1"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-MT-gshape-area") {
           zingchart.loadModules('maps, maps-usa_mt', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_mt',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [87];
      black = [1];
      hispanic = [4];
      asian = [6];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Montana'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$751"},
        { "Statistic": "Median Household Income", "Value": "$50,801"},
        { "Statistic": "Per capital income yearly", "Value": "$28,706"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "12.5"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "17.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
          else if (p.targetid === "myChart-graph-id0-shape-WY-gshape-area") {
             zingchart.loadModules('maps, maps-usa_wy', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_wy',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [84];
      black = [1];
      hispanic = [10];
      asian = [2];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Wyoming'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$828"},
        { "Statistic": "Median Household Income", "Value": "$60,938"},
        { "Statistic": "Per capital income yearly", "Value": "$31,214"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "18"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-CO-gshape-area") {
               zingchart.loadModules('maps, maps-usa_co', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_co',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [68];
      black = [4];
      hispanic = [22];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Colorado'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,125"},
        { "Statistic": "Median Household Income", "Value": "$65,458"},
        { "Statistic": "Per capital income yearly", "Value": "$34,845"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "25.2"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-NM-gshape-area") {
               zingchart.loadModules('maps, maps-usa_nm', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nm',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [37];
      black = [2];
      hispanic = [49];
      asian = [9];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'New Mexico'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$809"},
        { "Statistic": "Median Household Income", "Value": "$46,718"},
        { "Statistic": "Per capital income yearly", "Value": "$25,257"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "19.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "21.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-ND-gshape-area") {
               zingchart.loadModules('maps, maps-usa_nd', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nd',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [85];
      black = [3];
      hispanic = [3];
      asian = [6];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'North Dakota'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$775"},
        { "Statistic": "Median Household Income", "Value": "$61,285"},
        { "Statistic": "Per capital income yearly", "Value": "$34,256"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "17.1"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-SD-gshape-area") {
               zingchart.loadModules('maps, maps-usa_sd', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_sd',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [83];
      black = [2];
      hispanic = [4];
      asian = [8];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'South Dakota'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$696"},
        { "Statistic": "Median Household Income", "Value": "$54,126"},
        { "Statistic": "Per capital income yearly", "Value": "$28,761"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "17"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-NE-gshape-area") {
               zingchart.loadModules('maps, maps-usa_ne', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ne',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [79];
      black = [4];
      hispanic = [11];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Nebraska'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$773"},
        { "Statistic": "Median Household Income", "Value": "$56,675"},
        { "Statistic": "Per capital income yearly", "Value": "$29,866"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.8"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "18.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-KS-gshape-area") {
               zingchart.loadModules('maps, maps-usa_ks', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ks',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [76];
      black = [5];
      hispanic = [12];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Kansas'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$801"},
        { "Statistic": "Median Household Income", "Value": "$55,477"},
        { "Statistic": "Per capital income yearly", "Value": "$29,600"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.9"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "19.2"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-OK-gshape-area") {
               zingchart.loadModules('maps, maps-usa_ok', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ok',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [66];
      black = [7];
      hispanic = [11];
      asian = [7];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Oklahoma'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$766"},
        { "Statistic": "Median Household Income", "Value": "$49,767"},
        { "Statistic": "Per capital income yearly", "Value": "$26,461"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "15.8"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "21.5"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
            else if (p.targetid === "myChart-graph-id0-shape-TX-gshape-area") {
               zingchart.loadModules('maps, maps-usa_tx', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_tx',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [42];
      black = [12];
      hispanic = [40];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Texas'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$952"},
        { "Statistic": "Median Household Income", "Value": "$57,051"},
        { "Statistic": "Per capital income yearly", "Value": "$28,985"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "26.1"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-MN-gshape-area") {
         zingchart.loadModules('maps, maps-usa_mn', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_mn',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [80];
      black = [6];
      hispanic = [5];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Minnesota'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$906"},
        { "Statistic": "Median Household Income", "Value": "$65,699"},
        { "Statistic": "Per capital income yearly", "Value": "$34,712"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "9.5"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-IA-gshape-area") {
         zingchart.loadModules('maps, maps-usa_ia', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ia',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [83];
      black = [6];
      hispanic = [3];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Iowa'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$740"},
        { "Statistic": "Median Household Income", "Value": "$56,570"},
        { "Statistic": "Per capital income yearly", "Value": "$30,063"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "19"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-MO-gshape-area") {
         zingchart.loadModules('maps, maps-usa_mo', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_mo',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [80];
      black = [11];
      hispanic = [4];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Missouri'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$784"},
        { "Statistic": "Median Household Income", "Value": "$51,542"},
        { "Statistic": "Per capital income yearly", "Value": "$28,282"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.4"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-AR-gshape-area") {
         zingchart.loadModules('maps, maps-usa_ar', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ar',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [73];
      black = [15];
      hispanic = [8];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Arkansas'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$709"},
        { "Statistic": "Median Household Income", "Value": "$43,813"},
        { "Statistic": "Per capital income yearly", "Value": "$24,426"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "16.4"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "21.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-LA-gshape-area") {
         zingchart.loadModules('maps, maps-usa_la', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_la',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [59];
      black = [32];
      hispanic = [5];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Louisiana'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$825"},
        { "Statistic": "Median Household Income", "Value": "$46,710"},
        { "Statistic": "Per capital income yearly", "Value": "$26,205"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "19.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "25.2"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-MI-gshape-area--5") {
         zingchart.loadModules('maps, maps-usa_mi', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_mi',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [75];
      black = [14];
      hispanic = [5];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Michigan'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$824"},
        { "Statistic": "Median Household Income", "Value": "$52,668"},
        { "Statistic": "Per capital income yearly", "Value": "$28,938"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.2"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.3"},
      ];
     
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-WI-gshape-area") {
         zingchart.loadModules('maps, maps-usa_wi', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_wi',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [82];
      black = [6];
      hispanic = [7];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Wisconsin'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$813"},
        { "Statistic": "Median Household Income", "Value": "$56,759"},
        { "Statistic": "Per capital income yearly", "Value": "$30,557"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "22"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
      else if (p.targetid === "myChart-graph-id0-shape-IL-gshape-area") {
         zingchart.loadModules('maps, maps-usa_il', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_il',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [61];
      black = [14];
      hispanic = [17];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Illinois'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$952"},
        { "Statistic": "Median Household Income", "Value": "$61,229"},
        { "Statistic": "Per capital income yearly", "Value": "$32,924"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "12.6"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "28.7"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
        else if (p.targetid === "myChart-graph-id0-shape-IN-gshape-area") {
           zingchart.loadModules('maps, maps-usa_in', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_in',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [79];
      black = [9];
      hispanic = [7];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Indiana'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$782"},
        { "Statistic": "Median Household Income", "Value": "$52,182"},
        { "Statistic": "Per capital income yearly", "Value": "$27,305"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.5"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-KY-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ky', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ky',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [85];
      black = [8];
      hispanic = [3];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Kentucky'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$713"},
        { "Statistic": "Median Household Income", "Value": "$46,535"},
        { "Statistic": "Per capital income yearly", "Value": "$25,888"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "17.2"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.1"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-TN-gshape-area") {
        zingchart.loadModules('maps, maps-usa_tn', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_tn',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [74];
      black = [16];
      hispanic = [5];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Tennessee'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$808"},
        { "Statistic": "Median Household Income", "Value": "$48,708"},
        { "Statistic": "Per capital income yearly", "Value": "$27,277"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "15.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-MS-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ms', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ms',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [57];
      black = [38];
      hispanic = [3];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Mississippi'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$740"},
        { "Statistic": "Median Household Income", "Value": "$42,009"},
        { "Statistic": "Per capital income yearly", "Value": "$22,500"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "19.8"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-AL-gshape-area") {
        zingchart.loadModules('maps, maps-usa_al', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_al',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [66];
      black = [27];
      hispanic = [4];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Alabama'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$747"},
        { "Statistic": "Median Household Income", "Value": "$46,472"},
        { "Statistic": "Per capital income yearly", "Value": "$25,476"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "16.9"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-OH-gshape-area") {
        zingchart.loadModules('maps, maps-usa_oh', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_oh',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [79];
      black = [12];
      hispanic = [4];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Ohio'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$764"},
        { "Statistic": "Median Household Income", "Value": "$52,407"},
        { "Statistic": "Per capital income yearly", "Value": "$29,011"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.4"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-GA-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ga', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ga',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [53];
      black = [31];
      hispanic = [10];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Georgia'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$927"},
        { "Statistic": "Median Household Income", "Value": "$52,977"},
        { "Statistic": "Per capital income yearly", "Value": "$28,015"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.9"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "28"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-FL-gshape-area") {
        zingchart.loadModules('maps, maps-usa_fl', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_fl',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [54];
      black = [15];
      hispanic = [26];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Florida'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,077"},
        { "Statistic": "Median Household Income", "Value": "$50,833"},
        { "Statistic": "Per capital income yearly", "Value": "$28,774"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "27"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-PA-gshape-area") {
        zingchart.loadModules('maps, maps-usa_pa', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_pa',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [77];
      black = [11];
      hispanic = [7];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Pennsylvania'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$885"},
        { "Statistic": "Median Household Income", "Value": "$56,951"},
        { "Statistic": "Per capital income yearly", "Value": "$31,476"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "12.5"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "26.7"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-WV-gshape-area") {
        zingchart.loadModules('maps, maps-usa_wv', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_wv',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [93];
      black = [4];
      hispanic = [1];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'West Virginia'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$681"},
        { "Statistic": "Median Household Income", "Value": "$4,061"},
        { "Statistic": "Per capital income yearly", "Value": "$24,771"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "19.1"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "25.7"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-VA-gshape-area") {
        zingchart.loadModules('maps, maps-usa_va', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_va',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [62];
      black = [19];
      hispanic = [9];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Virginia'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,166"},
        { "Statistic": "Median Household Income", "Value": "$68,766"},
        { "Statistic": "Per capital income yearly", "Value": "$36,268"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.6"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "28.2"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-NC-gshape-area") {
        zingchart.loadModules('maps, maps-usa_nc', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nc',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [63];
      black = [21];
      hispanic = [9];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'North Carolina'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$844"},
        { "Statistic": "Median Household Income", "Value": "$50,320"},
        { "Statistic": "Per capital income yearly", "Value": "$28,123"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.3"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-SC-gshape-area") {
        zingchart.loadModules('maps, maps-usa_sc', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_sc',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [64];
      black = [27];
      hispanic = [6];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'South Carolina'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$836"},
        { "Statistic": "Median Household Income", "Value": "$48,781"},
        { "Statistic": "Per capital income yearly", "Value": "$26,654"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "15.4"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.3"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-MD-gshape-area") {
        zingchart.loadModules('maps, maps-usa_md', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_md',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [51];
      black = [29];
      hispanic = [10];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Maryland'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,311"},
        { "Statistic": "Median Household Income", "Value": "$78,916"},
        { "Statistic": "Per capital income yearly", "Value": "$39,070"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "9.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "32.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-DE-gshape-area") {
        zingchart.loadModules('maps, maps-usa_de', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_de',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [63];
      black = [21];
      hispanic = [9];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Delaware'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,076"},
        { "Statistic": "Median Household Income", "Value": "$63,036"},
        { "Statistic": "Per capital income yearly", "Value": "$32,625"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "13.6"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "25.7"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-NJ-gshape-area") {
        zingchart.loadModules('maps, maps-usa_nj', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nj',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [55];
      black = [13];
      hispanic = [21];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'New Jersey'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,249"},
        { "Statistic": "Median Household Income", "Value": "$76,475"},
        { "Statistic": "Per capital income yearly", "Value": "$39,069"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.0"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "31.5"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-NY-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ny', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ny',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [55];
      black = [14];
      hispanic = [19];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'New York'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,194"},
        { "Statistic": "Median Household Income", "Value": "$62,765"},
        { "Statistic": "Per capital income yearly", "Value": "$35,725"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "14.1"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "33"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-CT-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ct', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ct',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [67];
      black = [10];
      hispanic = [16];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Connecticut'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,123"},
        { "Statistic": "Median Household Income", "Value": "$73,781"},
        { "Statistic": "Per capital income yearly", "Value": "$41,365"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "9.6"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "26"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-RI-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ri', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ri',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [72];
      black = [5];
      hispanic = [16];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Rhode Island'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$957"},
        { "Statistic": "Median Household Income", "Value": "$61,043"},
        { "Statistic": "Per capital income yearly", "Value": "$33,315"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.6"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "24.6"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-MA-gshape-area") {
        zingchart.loadModules('maps, maps-usa_ma', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_ma',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [72];
      black = [7];
      hispanic = [12];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Massachusetts'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,173"},
        { "Statistic": "Median Household Income", "Value": "$74,176"},
        { "Statistic": "Per capital income yearly", "Value": "$39,913"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "10.5"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "29.3"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-VT-gshape-area") {
        zingchart.loadModules('maps, maps-usa_vt', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_vt',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [93];
      black = [1];
      hispanic = [2];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Vermont'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$945"},
        { "Statistic": "Median Household Income", "Value": "$57,808"},
        { "Statistic": "Per capital income yearly", "Value": "$31,917"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.3"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "22.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-NH-gshape-area") {
        zingchart.loadModules('maps, maps-usa_nh', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_nh',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [91];
      black = [1];
      hispanic = [4];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'New Hampshire'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$1,052"},
        { "Statistic": "Median Household Income", "Value": "$71,305"},
        { "Statistic": "Per capital income yearly", "Value": "$36,914"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "7.7"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "27.2"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
     else if (p.targetid === "myChart-graph-id0-shape-ME-gshape-area") {
        zingchart.loadModules('maps, maps-usa_me', function(e) {
    zingchart.render({
        id: 'myChart4',
        data: {
          shapes: [
            {
              type: 'zingchart.maps',
              options: {
                name: 'usa_me',
                style: {
                  label: {
                    visible: false
                  }},
                scale: false
              }
            }
          ]
        },
        height: 245, 
        width: 300
    });
  });
      white = [94];
      black = [1];
      hispanic = [2];
      asian = [1];
      other1 = 100 - white[0] - black[0] - hispanic[0] - asian[0]
      other = [other1];
      
  zingchart.exec('myChart3', 'setdata', {
      data : {
       type: 'ring',
       tooltip:{
         visible:false
       },
       plot: {
         slice:'50%',
         valueBox: [
           {
             type: 'all',
             text: '%t - %node-percent-value%',
             decimals:0,
             placement: 'out',
             fontFamily: 'Roboto',
           }
         ]
       },
       title: {
         text: "Demographics",
         fontFamily: 'Roboto',
         fontSize: 20,
         fontColor : "black",
         paddingTop:20
       },
      series: [
          {
              values: white,
              text: "White",
              backgroundColor:"#E75C58"
          },
          {
              values: black,
              text:"Black",
              backgroundColor:"#845199"
          },
          {
              values: hispanic,
              text:"Hispanic",
              backgroundColor:"#37A0D9"
          },
          {
              values: asian,
              text:"Asian",
              backgroundColor:"#FACD56"
          },
          {
              values: other,
              text:"Other",
              backgroundColor:"#42AE86"
          },
      ]
  }
  });
      
  var zgCap = 'Maine'
  var zgRef = document.querySelector('zing-grid');
  var data = [
        { "Statistic": "Median Gross Rent", "Value": "$808"},
        { "Statistic": "Median Household Income", "Value": "$53,024"},
        { "Statistic": "Per capital income yearly", "Value": "$29,886"},
        { "Statistic": "Persons in Poverty (percent)", "Value": "11.1"},
        { "Statistic": "Mean Travel Time for Work (Minutes)", "Value": "23.8"},
      ];
  zgRef.setData(data);
  zgRef.setCaption(zgCap);
    }
    
  }
  
  
  
  
  

  
  

  var myConfigbones = {
    type: 'ring',
    plot: {
      refAngle: 270,
      "slice": "60%",
      valueBox: {
        "placement": "center",
        fontColor: "black",
        fontFamily: "Open Sans Condensed",
        fontWeight: 'bold',
        fontSize: 60,
        decimals: 0
      }
    },
    series: [{
        values: [1175],
        backgroundColor: '#D3111A'
      },
      {
        values: [928],
        visible: false,
      }
    ]
  };
   
  var myConfig2bones = {
    type: 'ring',
    plot: {
      refAngle: 270,
      "slice": "60%",
      valueBox: {
        "placement": "center",
        fontColor: "black",
        fontFamily: "Open Sans Condensed",
        fontWeight: 'bold',
        fontSize: 60,
        decimals: 0
      }
    },
    series: [{
        values: [36],
        backgroundColor: '#D3111A'
      },
      {
        values: [41],
        visible: false,
      }
    ]
  };
   
   
  zingchart.render({
    id: 'myChartbones',
    data: myConfigbones,
    height: '270px',
    width: '400px'
  });
   
  zingchart.render({
    id: 'myChart1bones',
    data: myConfig2bones,
    height: '270px',
    width: '400px'
  });



  var cfg = [{
    type: 'node',
    id: 'n1',
    cls: 'fam',
    text: ' ',
    dataFullName: ''
  },
  {
    type: 'node',
    id: 'Ned Stark',
    text: 'Ned',
    dataFullName: 'Ned Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/OFrvsvv.png"
    }
  },
  {
    type: 'node',
    id: 'Brandon Stark',
    text: 'Brandon',
    dataFullName: 'Brandon Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/u9hoEJg.png"
    }
  },
  {
    type: 'node',
    id: 'Benjen Stark',
    text: 'Benjen',
    dataFullName: 'Benjen Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/nIYFwTa.png"
    }
  },
  {
    type: 'node',
    id: 'Lyanna Stark',
    text: 'Lyanna',
    dataFullName: 'Lyanna Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: 'https://i.imgur.com/x51Mx4U.png'
    }
  },
  {
    type: 'node',
    id: 'Catelyn Stark',
    text: 'Catelyn',
    dataFullName: 'Catelyn Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/4zN7Y24.png"
    }
  },
  {
    type: 'node',
    id: 'Bran Stark',
    text: 'Bran',
    dataFullName: 'Bran Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/2XEVyxr.png"
    }
  },
  {
    type: 'node',
    id: 'Rickon Stark',
    text: 'Rickon',
    dataFullName: 'Rickon Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/WYgOq7v.png"
    }
  },
  {
    type: 'node',
    id: 'Robb Stark',
    text: 'Robb',
    dataFullName: 'Robb Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/mfavdJs.png"
    }
  },
  {
    type: 'node',
    id: 'Sansa Stark',
    text: 'Sansa',
    dataFullName: 'Sansa Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/MsIjHMU.png"
    }
  },
  {
    type: 'node',
    id: 'Arya Stark',
    text: 'Arya',
    dataFullName: 'Arya Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/ae7VysW.png"
    }
  },
 
  {
    type: 'node',
    id: 'n2',
    cls: 'fam',
    text: ' ',
    dataFullName: ''
  },
  {
    type: 'node',
    id: 'Lyarra Stark',
    text: 'Lyarra',
    dataFullName: 'Lyarra Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/u9hoEJg.png"
    }
  },
  {
    type: 'node',
    id: 'Rickard Stark',
    text: 'Rickard',
    dataFullName: 'Rickard Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/fnDOYLn.png"
    }
  },
 
  // {type : 'node', id : 'n3', cls : 'fam', text : ' ', dataFullName : ''},
  // {type : 'node', id : 'patty', text : 'Patty', dataFullName : 'Patty Bouvier', style : { backgroundImage : SIMPSONS.patty }},
  // {type : 'node', id : 'clancy', text : 'Clancy', dataFullName : 'Clancy Bouvier', style : { backgroundImage : SIMPSONS.clancy }},
  // {type : 'node', id : 'jaqueline', text : 'Jaqueline', dataFullName : 'Jaqueline Bouvier', style : { backgroundImage : SIMPSONS.jaqueline }},
  // {type : 'node', id : 'selma', text : 'Selma', dataFullName : 'Selma Bouvier', style : { backgroundImage : SIMPSONS.selma }},
 
  {
    type: 'node',
    id: 'n3',
    cls: 'fam',
    text: ' ',
    dataFullName: ''
  },
  {
    type: 'node',
    id: 'Rhaegar Targaryen',
    text: 'Rhaegar Targaryen',
    dataFullName: 'Rhaegar Targaryen',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/xUNu69z.png"
    }
  },
  {
    type: 'node',
    id: 'Jon Snow',
    text: 'Jon Snow',
    dataFullName: 'Jon Snow',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/ePIDAeF.png"
    }
  },
 
  {
    type: 'node',
    id: 'n4',
    cls: 'fam',
    text: ' ',
    dataFullName: ''
  },
  {
    type: 'node',
    id: 'Talisa Stark',
    text: 'Talisa',
    dataFullName: 'Talisa Stark',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/G8UYTPZ.png"
    }
  },
 
  {
    type: 'node',
    id: 'n5',
    cls: 'fam',
    text: ' ',
    dataFullName: ''
  },
  {
    type: 'node',
    id: 'Ramsay Bolton',
    text: 'Ramsay Bolton',
    dataFullName: 'Ramsay Bolton',
    style: {
      "background-fit": "xy",
      backgroundImage: "https://i.imgur.com/W0zBrVu.png"
    }
  },
 
 
  {
    type: 'link',
    source: 'n1',
    target: 'Ned Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Catelyn Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Robb Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Bran Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Rickon Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Sansa Stark'
  },
  {
    type: 'link',
    source: 'n1',
    target: 'Arya Stark'
  },
 
  {
    type: 'link',
    source: 'n2',
    target: 'Ned Stark'
  },
  {
    type: 'link',
    source: 'n2',
    target: 'Brandon Stark'
  },
  {
    type: 'link',
    source: 'n2',
    target: 'Benjen Stark'
  },
  {
    type: 'link',
    source: 'n2',
    target: 'Lyanna Stark'
  },
  {
    type: 'link',
    source: 'n2',
    target: 'Lyarra Stark'
  },
  {
    type: 'link',
    source: 'n2',
    target: 'Rickard Stark'
  },
 

  {
    type: 'link',
    source: 'n3',
    target: 'Lyanna Stark'
  },
  {
    type: 'link',
    source: 'n3',
    target: 'Rhaegar Targaryen'
  },
  {
    type: 'link',
    source: 'n3',
    target: 'Jon Snow'
  },
 
  {
    type: 'link',
    source: 'n4',
    target: 'Robb Stark'
  },
  {
    type: 'link',
    source: 'n4',
    target: 'Talisa Stark'
  },
 
  {
    type: 'link',
    source: 'n5',
    target: 'Sansa Stark'
  },
  {
    type: 'link',
    source: 'n5',
    target: 'Ramsay Bolton'
  },
 
]
 
var cdatagot = {
  type: 'tree',
  plot: {
 
  },
  plotarea: {
    margin: 40,
    backgroundImage: "https://i.imgur.com/tvrJh89.jpg",
    "background-fit": "xy",
    "background-repeat": false,
  },
  options: {
    aspect: 'graph',
    springLength: 75,
    attractionConstant: 0.8,
    repulsionConstant: 4000,
    repulsionDistanceFactor: 20,
    node: {
      size: 24,
      borderWidth: 3,
      borderColor: 'white',
      backgroundColor: '#fff',
      backgroundRepeat: 'no-repeat',
      backgroundScale: 0.75,
      label: {
        color: 'white',
        fontWeight: 'bold',
        offsetY: 35
      },
      tooltip: {
        // text : '%data-full-name' 
        visible: false,
      }
    },
    'node[cls-fam]': {
      size: 12,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: 'white',
      label: {
        visible: false
      }
    },
    link: {
      lineWidth: 3,
      lineColor: 'white'
    }
  },
  series: cfg
};
 
zingchart.render({
  id: 'zc-got',
  width: 900,
  height: 600,
  output: 'canvas',
  data: cdatagot
});


var myConfigmario = {
    globals: {
      fontFamily: 'Roboto',
    },
    "type": "bar",
    crosshairX: {
      alpha: 0.3,
      lineWidth: 6,
      zIndex: 0,
      lineColor: "red",
      plotLabel: {
        text: "%data-new",
        borderRadius: 3,
        backgroundColor: "#FFD987",
        borderWidth: 1,
        borderColor: "black",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        marginRight: 30,
        width: 500,
        wrapText: true
      }
   
    },
    plotarea: {
      margin: '100 70 100 70'
    },
    labels: [{
        "background-image": "https://i.imgur.com/LMsvh4p.png",
        "background-fit": "xy",
        height: 80,
        width: 450,
        x: 110,
        y: 110
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=1',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=2',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=3',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=4',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=5',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=6',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=7',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=8',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=9',
      },
      {
        "background-image": "https://i.imgur.com/XN5EyPA.png",
        "background-fit": "xy",
        "offsetY": 15,
        "height": "30",
        "width": "80",
        'hook': 'node:index=10',
      },
      {
        "background-image": "https://i.imgur.com/m8r0pyj.png",
        "background-fit": "xy",
        "offsetY": -35,
        "height": "70",
        "width": "80",
        'hook': 'node:index=1',
      },
      {
        "background-image": "https://i.imgur.com/cOZin4d.png",
        "background-fit": "xy",
        "offsetY": -35,
        "height": "70",
        "width": "80",
        'hook': 'node:index=2',
      },
      {
        "background-image": "https://i.imgur.com/gkkAiIT.png",
        "background-fit": "xy",
        "offsetY": -35,
        "height": "70",
        "width": "80",
        'hook': 'node:index=3',
      },
      {
        "background-image": "https://i.imgur.com/KzpKdWX.png",
        "background-fit": "xy",
        "offsetY": -35,
        "height": "70",
        "width": "80",
        'hook': 'node:index=4',
      },
      {
        "background-image": "https://i.imgur.com/Fx1fngL.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "50",
        'hook': 'node:index=5',
      },
      {
        "background-image": "https://i.imgur.com/KiXWCnI.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "95",
        'hook': 'node:index=6',
      },
      {
        "background-image": "https://i.imgur.com/jzIOohv.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "65",
        'hook': 'node:index=7',
      },
      {
        "background-image": "https://i.imgur.com/Z2B8Gil.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "80",
        'hook': 'node:index=8',
      },
      {
        "background-image": "https://i.imgur.com/LBGRHpS.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "80",
        'hook': 'node:index=9',
      },
      {
        "background-image": "https://i.imgur.com/41xCfVA.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "80",
        'hook': 'node:index=10',
      },
      {
        "background-image": "https://i.imgur.com/41xCfVA.png",
        "background-fit": "xy",
        "offsetY": -35,
        "background-repeat": "no-repeat",
        "height": "70",
        "width": "80",
        'hook': 'node:index=10',
      },
      {
        "background-image": "https://i.imgur.com/9MKbscs.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "50",
        "width": "70",
        'hook': 'scale:name=scale-x,index=1',
      },
      {
        "background-image": "https://i.imgur.com/0GOIOrm.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "40",
        "width": "60",
        'hook': 'scale:name=scale-x,index=2',
      },
      {
        "background-image": "https://i.imgur.com/upxiJ9Q.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "40",
        "width": "70",
        'hook': 'scale:name=scale-x,index=3',
      },
      {
        "background-image": "https://i.imgur.com/LsRUlb3.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "40",
        "width": "70",
        'hook': 'scale:name=scale-x,index=4',
      },
      {
        "background-image": "https://i.imgur.com/5ubprGe.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "55",
        "width": "85",
        'hook': 'scale:name=scale-x,index=5',
      },
      {
        "background-image": "https://i.imgur.com/3CXzGEu.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "50",
        "width": "80",
        'hook': 'scale:name=scale-x,index=6',
      },
      {
        "background-image": " https://i.imgur.com/Tssnjfs.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "50",
        "width": "80",
        'hook': 'scale:name=scale-x,index=7',
      },
      {
        "background-image": "https://i.imgur.com/Vy8iTOw.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 45,
        "height": "60",
        "width": "80",
        'hook': 'scale:name=scale-x,index=8',
      },
      {
        "background-image": "https://i.imgur.com/FPu1WR8.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "40",
        "width": "80",
        'hook': 'scale:name=scale-x,index=9',
      },
      {
        "background-image": "https://i.imgur.com/mgszzGY.png",
        "background-fit": "xy",
        "background-repeat": "no-repeat",
        offsetY: 40,
        "height": "120",
        "width": "80",
        'hook': 'scale:name=scale-x,index=10',
      },
   
    ],
    plot: {
      lineWidth: 5,
      barWidth: 60,
      lineColor: '#53b948',
      valueBox: {
        placement: "top",
        offsetY: -70,
        fontColor: "black",
        fontSize: 14
      },
      'hover-state': {
        visible: false
      },
      tooltip: {
        visible: false
      },
    },
    scaleX: {
      lineWidth: 4,
      lineColor: "black",
      tick: {
        visible: false
      },
      labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    scaleY: {
      "label": {
        "text": "Sales per Million",
        fontSize: 25,
        fontColor: "black",
        offsetX: 30
      },
      maxItems: 2,
      lineWidth: 4,
      lineColor: "black",
      tick: {
        visible: false
      },
      item: {
        fontSize: 20,
        fontColor: "black"
      },
      guide: {
        visible: false
      }
    },
    "series": [{
      "values": [
        null,
        15.02,
        17.28,
        18.11,
        18.14,
        20.61,
        23.60,
        30.22,
        30.80,
        37.14,
        40.24,
        null
      ],
      "data-new": ["1",
        "Mario Kart 8 is a kart racing video game and the eighth major installment in the Mario Kart series, developed and published by Nintendo for their Wii U home video game console. The game was announced at E3 2013 and released worldwide in May 2014. Like in other games in the series, in Mario Kart 8, players control characters from the Mario franchise and participate in kart racing on various race tracks, using a variety of items to hinder opponents or gain advantages in the race.",
        "Super Mario Bros. 3 is a platform video game developed and published by Nintendo for the Nintendo Entertainment System (NES). It was released in Japan on October 23, 1988, and in North America on February 12, 1990. It was developed by Nintendo Entertainment Analysis and Development, led by Shigeru Miyamoto and Takashi Tezuka.",
        "Mario Kart 7 is a kart racing game developed by Nintendo EAD in cooperation with Retro Studios and published by Nintendo. As with previous games in the Mario Kart series, players participate in racing on various Mario-themed tracks, playing as one of seventeen different Mario characters. While racing, the players make use of power-up items that either assist their character or hinder opposing characters. New additions to the game include hang-gliding attachments for karts, the ability to drive underwater, the ability to drive in first-person, and the ability to fully customize the vehicles' builds. The game supports both local and online multiplayer for up to eight players. The game was released worldwide in December 2011.",
        "Super Mario Land is a 1989 side-scrolling platform video game developed and published by Nintendo as a launch title for their Game Boy handheld game console. It is the first Mario platform game ever to be released for a handheld console. In gameplay similar to that of the 1985 Super Mario Bros., but resized for the smaller device's screen, the player advances Mario to the end of 12 levels by moving to the right and jumping across platforms to avoid enemies and pitfalls. Unlike other Mario games, Super Mario Land is set in Sarasaland, a new environment depicted in line art, and Mario pursues Princess Daisy (who makes her debut in this game). The game also includes two Gradius-style shooter levels.",
        "Super Mario World is a 1990 side-scrolling platform game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). The story follows Mario's quest to save Princess Toadstool and Dinosaur Land from the series antagonist Bowser and his children, the Koopalings. The gameplay is similar to that of earlier Super Mario games: Players control Mario or his brother Luigi through a series of levels in which the goal is to reach the flagpole at the end. Super Mario World introduced Yoshi, a dinosaur who can eat enemies and gain abilities by eating the shells of Koopa Troopas.",
        "Mario Kart DS is a go-kart racing game developed and published by Nintendo. It was released for the Nintendo DS handheld game console on November 14, 2005 in North America, on November 17, 2005 in Australia, on November 25, 2005 in Europe, on December 8, 2005 in Japan, and on April 5, 2007 in South Korea. The game is the fifth installment in the Mario Kart series of video games, and the first to be playable via the Nintendo Wi-Fi Connection online service; the service has since been terminated, along with other games playable via the service. Like other games in the series, Mario Kart DS features characters from the Mario series, and pits them against each other as they race in karts on tracks based on locations in the Mario series.",
        "New Super Mario Bros. Wii is a 2.5D side-scrolling platform game developed and published by Nintendo for the Wii. The sequel to 2006's New Super Mario Bros., it was first released in Australia, North America, and Europe in November 2009, followed by Japan a month later. Like other side-scrolling Super Mario games, the player controls Mario as he travels eight worlds and fights Bowser's henchmen to rescue Princess Peach. Up to four people can play in cooperative and competitive multiplayer modes, taking control of Mario as well as Luigi and one of two multicolored Toads. The game also introduces 'Super Guide', which allows the player to watch a computer-controlled character complete a level.",
        "New Super Mario Bros. is a 2D side-scrolling platform game developed and published by Nintendo for the Nintendo DS. It was first released in May 2006 in North America and Japan, and in Australia and Europe the following month, and is a part of the New Super Mario Bros. subseries of the Super Mario franchise. Similar to other side-scrolling Mario games, New Super Mario Bros. follows Mario as he fights his way through Bowser's henchmen to rescue Princess Peach. Mario has access to several power-ups that help him complete his quest, including the Super Mushroom, the Fire Flower, and the Starman, each giving him unique abilities. While traveling through eight worlds with a total of 80 levels, Mario must defeat Bowser Jr. and Bowser before finally saving Princess Peach.",
        "Mario Kart Wii is a racing video game developed and published by Nintendo for the Wii. It is the sixth installment in the Mario Kart series, and was released worldwide on April 27, 2008. Like its previous installments of games, Mario Kart Wii incorporates playable characters from the Mario series, who participate in kart races on 32 different race tracks using specialized items to hinder opponents or gain advantages. It sold 37.20 million copies, making it the 10th best selling game of all time, the best selling game of the Mario Kart series, and the 2nd best selling game on the Wii, only behind Wii Sports. The game features multiple single-player and multiplayer game modes including a four-person split screen. Online multiplayer via Nintendo Wi-Fi Connection was available at launch, but was discontinued in May 2014, along with other Wii and Nintendo DS games that supported online play.",
        "Super Mario Bros is a platform video game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., it was released in Japan in 1985 for the Famicom, and in North America and Europe for the Nintendo Entertainment System (NES) in 1985 and 1987 respectively. Players control Mario, or his brother Luigi in the multiplayer mode, as they travel the Mushroom Kingdom to rescue Princess Toadstool from the antagonist, Bowser. They must traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower and Starman."
      ],
      "styles": [{
          "background-image": "",
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-repeat": "repeat-y",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        },
        {
          "background-image": "https://i.imgur.com/0Ujr7Ks.png",
          "background-fit": "xy",
          "background-color": "none"
        }
      ]
    }]
  };
  zingchart.render({
    id: 'myChartmario',
    data: myConfigmario,
    height: "700",
    width: "1200"
  });

  var myConfiggot2 = {
    type: "hbar",
    legend: {
      header: {
        text: "Season",
      },
      layout: "horizontal",
      "x": 50,
      "y": 45
    },
    tooltip: {
      text: "%vv miles traveled in Season %t."
    },
    labels: [{
        "background-image": "https://i.imgur.com/ztd0ZaZ.png",
        "background-fit": "xy",
        "hook": "node:index=7",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "THEON",
        "hook": "node:index=7",
        offsetX: 95,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      {
        "background-image": "https://i.imgur.com/DFmvNdH.png",
        "background-fit": "xy",
        "hook": "node:index=6",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "DAENERYS",
        "hook": "node:index=6",
        offsetX: 110,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //tyrion
      {
        "background-image": "https://i.imgur.com/tB1T8Xf.png",
        "background-fit": "xy",
        "hook": "node:index=5",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "TYRION",
        "hook": "node:index=5",
        offsetX: 95,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //davos
      {
        "background-image": "https://i.imgur.com/RvXpM2y.png",
        "background-fit": "xy",
        "hook": "node:index=4",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "DAVOS",
        "hook": "node:index=4",
        offsetX: 95,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //jon
      {
        "background-image": "https://i.imgur.com/ePIDAeF.png",
        "background-fit": "xy",
        "hook": "node:index=3",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "JON",
        "hook": "node:index=3",
        offsetX: 85,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //brienne
      {
        "background-image": "https://i.imgur.com/NpCv0Rt.png",
        "background-fit": "xy",
        "hook": "node:index=2",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "BRIENNE",
        "hook": "node:index=2",
        offsetX: 105,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //petyr
      {
        "background-image": "https://i.imgur.com/TIRutOc.png",
        "background-fit": "xy",
        "hook": "node:index=1",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "PETYR",
        "hook": "node:index=1",
        offsetX: 95,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
      //jaime
      {
        "background-image": "https://i.imgur.com/dViqMYW.png",
        "background-fit": "xy",
        "hook": "node:index=0",
        height: 50,
        width: 50,
        offsetX: 30
      },
      {
        "text": "JAIME",
        "hook": "node:index=0",
        offsetX: 95,
        fontFamily: "Open Sans Condensed",
        fontSize: 30
      },
    ],
    title: {
      text: "The Most Travelled Game of Thrones Characters",
      textAlign: "left",
      fontFamily: "Open Sans Condensed",
      fontSize: 30,
      offsetX: 45
    },
    plotarea: {
      marginTop: 105
    },
    scaleX: {
      tick: {
        visible: false
      },
      item: {
        visible: false
      }
    },
    scaleY: {
      guide: {
        visible: false
      },
      minValue: 0,
      maxValue: 25000,
      step: 5000,
      "thousands-separator": ",",
      item: {
        // fontFamily: "Open Sans Condensed",
   
      },
      label: {
        text: "DISTANCE TRAVELED (MILES)",
        fontFamily: "Open Sans Condensed",
        fontSize: 20
      }
    },
    plot: {
      stacked: true,
      stackType: "normal"
    },
    series: [{
        values: [4045, 0, 0, 681, 0, 4842, 2838, 1132],
        backgroundColor: "#000966",
        text: "1"
      },
      {
        values: [832, 646, 2975, 492, 4931, 416, 1514, 2189],
        backgroundColor: "#32B0B1",
        text: "2"
      },
      {
        values: [643, 1102, 678, 492, 493, 0, 3708, 378],
        backgroundColor: "#F7B223",
        text: "3"
      },
      {
        values: [0, 1975, 678, 303, 2086, 0, 189, 756],
        backgroundColor: "#DC6222",
        text: "4"
      },
      {
        values: [1247, 2697, 1544, 870, 797, 3783, 454, 378],
        backgroundColor: "#AD0016",
        text: "5"
      },
      {
        values: [0, 4217, 2560, 2270, 2048, 1135, 2308, 10269],
        backgroundColor: "#56010B",
        text: "6"
      },
      {
        values: [2760, 0, 2749, 6697, 4930, 5675, 8816, 5248],
        backgroundColor: "#000000",
        text: "7"
      }
    ]
  };
   
  zingchart.render({
    id: 'myChartgot2',
    data: myConfiggot2,
    height: "650",
    width: "1000"
  });


  var myConfigwow = {
    type: 'bar',
    "-background-image": "https://i.imgur.com/s6hl0wy.jpg",
    "-background-repeat": false,
    "background-fit": 'xy',
    title: {
      text: "Distribution of World of Warcraft characters in U.S. by Class"
    },
    subtitle: {
      text: "As of February 2019"
    },
    scaleX: {
      item: {
        visible: false
      }
    },
    scaleY: {
      visible: false
    },
    plotarea: {
      marginBottom: 150
    },
    plot: {
      borderColor: "#2B313B",
      borderWidth: 5,
      backgroundColor: "#b8e89d",
      barWidth: 60,
      "hover-state": {
        "visible": false,
      },
      tooltip: {
        visible: false
      },
      "value-box": {
        "text": "%v%",
        fontColor: "black",
        "shadow": false,
        "rules": []
      }
    },
    labels: [{
        "background-image": "https://i.imgur.com/YgcFtC1.png", //warrior
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=1",
        height: 70,
        width: 70,
        offsetY: 35
      },
      {
        "background-image": "https://i.imgur.com/z0HSZXa.png", //hunter
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=0",
        height: 70,
        width: 66,
        offsetY: 35
      },
      {
        "background-image": "https://i.imgur.com/IHoXAhN.png", //druid
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=2",
        height: 70,
        width: 60,
        offsetY: 35
      },
      {
        "background-image": "https://i.imgur.com/mssnyGF.png", //paladin
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=3",
        height: 72,
        width: 66,
        offsetY: 36
      },
      {
        "background-image": "https://i.imgur.com/zzQFvnU.png", //mage
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=4",
        height: 69,
        width: 59,
        offsetY: 36
      },
      {
        "background-image": "https://i.imgur.com/eU7IHsJ.png", //dknght
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=5",
        height: 72,
        width: 120,
        offsetY: 36
      },
      {
        "background-image": "https://i.imgur.com/3jzNhKl.png", //priest
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=6",
        height: 70,
        width: 60,
        offsetY: 35
      },
      {
        "background-image": "https://i.imgur.com/UKh8sxJ.png", //rogue
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=7",
        height: 68,
        width: 60,
        offsetY: 34
      },
      {
        "background-image": "https://i.imgur.com/3oEwatC.png", //warlock
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=8",
        height: 65,
        width: 78,
        offsetY: 32
      },
      {
        "background-image": "https://i.imgur.com/oHDfuan.png", //shaman
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=9",
        height: 65,
        width: 78,
        offsetY: 32
      },
      {
        "background-image": "https://i.imgur.com/HaDy5Aa.png", //monk
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=10",
        height: 62,
        width: 58,
        offsetY: 33
      },
      {
        "background-image": "https://i.imgur.com/NWsFSwk.png", //demonhunter
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=11",
        height: 66,
        width: 130,
        offsetY: 31,
        offsetX: 6
      },
      {
        "background-image": "https://i.imgur.com/3S79Zg9.png", //hunter
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=0",
        height: 90,
        width: 80,
        offsetY: -47,
        offsetX: -8
      },
      {
        "background-image": "https://i.imgur.com/w0NXLGl.png", //warriorava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=1",
        height: 115,
        width: 80,
        offsetY: -62,
      },
      {
        "background-image": "https://i.imgur.com/qsybbsR.png", //dknightava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=5",
        height: 130,
        width: 105,
        offsetY: -65,
        offsetX: -15
      },
      {
        "background-image": "https://i.imgur.com/hvf6FKc.png", //druidava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=2",
        height: 160,
        width: 100,
        offsetY: -78,
        offsetX: 12
      },
      {
        "background-image": "https://i.imgur.com/2y67bq0.png", //paladinava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=3",
        height: 130,
        width: 100,
        offsetY: -65,
        offsetX: -20
      },
      {
        "background-image": "https://i.imgur.com/4j62TXA.png", //mageava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=4",
        height: 70,
        width: 80,
        offsetY: -40
      },
      {
        "background-image": "https://i.imgur.com/mpp0rbP.png", //priestava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=6",
        height: 120,
        width: 95,
        offsetY: -60
      },
      {
        "background-image": "https://i.imgur.com/lLAxMhL.png", //rogueava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=7",
        height: 105,
        width: 90,
        offsetY: -55,
        offsetX: -5
      },
      {
        "background-image": "https://i.imgur.com/uNlDFEM.png", //warlockava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=8",
        height: 90,
        width: 80,
        offsetY: -50,
        offsetX: -5
      },
      {
        "background-image": "https://i.imgur.com/tyTofIk.png", //shamanava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=9",
        height: 140,
        width: 110,
        offsetY: -72,
        offsetX: 0
      },
      {
        "background-image": "https://i.imgur.com/waM1ia9.png", //monkava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=10",
        height: 120,
        width: 120,
        offsetY: -58,
        offsetX: -15
      },
      {
        "background-image": "https://i.imgur.com/faRqiHB.png", //dhunterava
        "background-fit": "xy",
        "background-repeat": false,
        "hook": "scale:name=scale-x,index=11",
        height: 130,
        width: 70,
        offsetY: -65,
        offsetX: 0
      },
   
    ],
    series: [{
      values: [11.3, 9.7, 9.5, 9.4, 8.8, 8.7, 8.5, 8.0, 7.8, 7.2, 6.4, 4.8]
    }]
  };
   
  zingchart.render({
    id: 'myChartwow',
    data: myConfigwow,
    height: '750',
    width: '1200'
  });


  var myConfigig = {
    type: 'hbar',
    tooltip: {
      visible: false
    },
    title: {
      text: "Instagram's Biggest Sports Stars",
      textAlign: "left",
      paddingLeft: 150
    },
    subtitle: {
      text: "Instagram accounts of sports stars with the most followers",
      textAlign: "left",
      fontSize: 15,
      fontColor: "#757575",
      paddingLeft: 150
    },
    labels: [{
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=0",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=1",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=2",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=3",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=4",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/OArp4ib.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=5",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=6",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=7",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=8",
        height: 33,
        width: 33
      },
      {
        "background-image": "https://i.imgur.com/dvPULhu.png",
        "background-fit": "xy",
        "hook": "scale:name=scale-x,index=9",
        height: 33,
        width: 33
      },
      {
        text: "Instagram name",
        "hook": "scale:name=scale-x,index=9",
        offsetX: -67,
        offsetY: -20,
        fontColor: "#757575",
      }
    ],
    plot: {
      "hover-state": {
        "visible": false,
        "background-color": "blue"
      },
      borderRadiusBottomRight: 20,
      borderRadiusTopRight: 20,
      "gradient-colors": "#F9963A #E23641 #AE0993",
      "gradient-stops": "0.1 0.4 0.9",
      "value-box": {
        fontSize: 20,
        thousandsSeparator: ",",
        fontColor: "#505050",
        fontFamily: "Open Sans Condensed",
        fontWeight: 'bold',
      }
    },
    plotarea: {
      marginLeft: 375,
      marginTop: 80
    },
    scaleY: {
      visible: false
    },
    scaleX: {
      alpha: 0,
      tick: {
        visible: false
      },
      item: {
        paddingRight: 20,
        fontColor: "#505050"
      },
      labels: ["Luis Alberto Suarez-----------luissuarez9", "Zlatan Ibrahimovic--iamzlatanibrahimovic", "Gareth Frank Bale---------garethbale11", "James David Rodriguez Rubio-----jamesrodriguez10", "Ronaldo de Assis Moreira-----------ronaldinho", "LeBron Raymone James------------kingjames", "David Beckham--------davidbeckham", "Lionel Andres Messi-------------leomessi", "Neymar da Silva Santos Junior-------------neymarjr", "Cristiano Ronaldo-------------cristiano"]
    },
    series: [{
      values: [31707150, 36102926, 38354835, 41091594, 41559758, 46736964, 53780885, 107943651, 110466153, 150320811]
    }]
  };
   
  zingchart.render({
    id: 'myChartig',
    data: myConfigig,
    height: '500',
    width: '1000'
  });

  var myConfiggot3 = {
    "type": "bubble",
    title: {
      '-text': "Game of Thrones",
    },
    plotarea: {
      marginTop: 100,
      marginLeft: 150,
      marginBottom: 150
    },
    tooltip: {
      "font-color": "black",
      "font-family": "Arial",
      "font-size": "15px",
      "border-radius": "6px",
      "shadow": false,
      "padding": "5px 10px",
      "background-color": "white",
      text: "%data-insta"
    },
    labels: [{
        "background-image": "https://i.imgur.com/52JeLly.png",
        "background-fit": "xy",
        "background-repeat": false,
        height: 100,
        width: 210,
        x: 205,
        y: 5
      },
      {
        "background-image": "https://i.imgur.com/BCl4WaZ.png",
        "background-fit": "xy",
        "background-repeat": false,
        height: 25,
        width: 330,
        x: 430,
        y: 43
      },
      {
        "background-image": "https://i.imgur.com/mbcVRBX.png",
        "background-fit": "xy",
        "background-repeat": false,
        height: 35,
        width: 200,
        x: 430,
        y: 560
      },
      {
        "background-image": "https://i.imgur.com/IzMdPMV.png",
        "background-fit": "xy",
        "background-repeat": false,
        height: 35,
        width: 200,
        angle: 270,
        x: -15,
        y: 265
      },
   
    ],
    "arrows": [{
        "from": {
          "x": 120,
          "y": 470
        },
        "to": {
          "x": 120,
          "y": 120
        }
      },
      {
        "from": {
          "x": 180,
          "y": 533
        },
        "to": {
          "x": 930,
          "y": 533
        }
      }
    ],
    scaleX: {
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tick: {
        visible: false
      },
      guide: {
        visible: false
      },
      item: {
        visible: false
      }
    },
    scaleY: {
      tick: {
        visible: false
      },
      guide: {
        visible: false
      },
      item: {
        visible: false
      }
    },
    "series": [{
        "values": [
          [8, 9, 50],
        ],
        "data-insta": "Tyrion Lannister",
        marker: {
          backgroundImage: "https://i.imgur.com/tB1T8Xf.png", //lil
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
        }
      },
   
      {
        "values": [
          [6, 5, 50],
        ],
        "data-insta": "Sir Davos",
        marker: {
          backgroundImage: "https://i.imgur.com/RvXpM2y.png", //sirdavos
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [8, 7.5, 50],
        ],
        "data-insta": "Ned Stark",
        marker: {
          backgroundImage: "https://i.imgur.com/OFrvsvv.png", //nedstark
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [7.5, 4, 50],
        ],
        "data-insta": "Tommen Baratheon",
        marker: {
          backgroundImage: "https://i.imgur.com/BVt5ljJ.png", //Tommen
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [2, 1, 50],
        ],
        "data-insta": "Joffrey Baratheon",
        marker: {
          backgroundImage: "https://i.imgur.com/DvTJyTF.png", //Joffrey
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [3, 1.5, 50],
        ],
        "data-insta": "Balon Greyjoy",
        marker: {
          backgroundImage: "https://i.imgur.com/edWzERY.png", //balon
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [6, 4, 50],
        ],
        "data-insta": "Robert Baratheon",
        marker: {
          backgroundImage: "https://i.imgur.com/rfTlVzy.png", //Robert Baratheon
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [9.5, 3, 50],
        ],
        "data-insta": "The High Sparrow",
        marker: {
          backgroundImage: "https://i.imgur.com/Ppa2Y1a.png", //High sparrow
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [2.5, 5.5, 50],
        ],
        "data-insta": "The Mountain",
        marker: {
          backgroundImage: "https://i.imgur.com/Lg2S9Eg.png", //mountain
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [7, 6, 50],
        ],
        "data-insta": "Hodor",
        marker: {
          backgroundImage: "https://i.imgur.com/zyMYXrR.png", //Hodor
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
   
      {
        "values": [
          [6, 7, 50],
        ],
        "data-insta": "Jaime Lannister",
        marker: {
          backgroundImage: "https://i.imgur.com/dViqMYW.png", //Jaime
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [4, 5, 50],
        ],
        "data-insta": "Theon Greyjoy",
        marker: {
          backgroundImage: "https://i.imgur.com/ztd0ZaZ.png", //Theon
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
   
      {
        "values": [
          [9, 8, 50],
        ],
        "data-insta": "Daenarys",
        marker: {
          backgroundImage: "https://i.imgur.com/DFmvNdH.png", //Daenarys
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [7, 9.5, 50],
        ],
        "data-insta": "Lady Brienne",
        marker: {
          backgroundImage: "https://i.imgur.com/NpCv0Rt.png", //brienne
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [10, 10, 50],
        ],
        "data-insta": "Jon Snow",
        marker: {
          backgroundImage: "https://i.imgur.com/ePIDAeF.png", //jonsnow
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      },
      {
        "values": [
          [1, 1, 50],
        ],
        "data-insta": "Little Finger",
        marker: {
          backgroundImage: "https://i.imgur.com/TIRutOc.png", //finger
          "background-repeat": false,
          backgroundColor: "none",
          "background-fit": 'xy',
   
        }
      }
    ]
  };
   
  zingchart.render({
    id: 'myChartgot3',
    data: myConfiggot3,
    height: "650",
    width: "1000"
  });


  var myConfigdrunk = {
    "graphset": [
        {
            "type": "hbar",
            "background-color": "#E4DACB",
            "plotarea": {
                "margin": "80,80,120,150",
              marginRight:120
            },
          labels: [
                  {  
               text:"JINRO",
               'hook':'scale:name=scale-x,index=0',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:40
            },
            {  
               text:"OFFICER'S CHOICE",
               'hook':'scale:name=scale-x,index=1',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:102
            },
            {  
               text:"EMPERADOR",
               'hook':'scale:name=scale-x,index=2',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:72
            },
            {  
               text:"SMIRNOFF",
               'hook':'scale:name=scale-x,index=3',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:60
            },
            {  
               text:"MCDOWELL'S NO. 1",
               'hook':'scale:name=scale-x,index=4',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:106
            },
            {  
               text:"IMPERIAL BLUE",
               'hook':'scale:name=scale-x,index=5',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:84
            },
            {  
               text:"ROYAL STAG",
               'hook':'scale:name=scale-x,index=6',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:74
            },
            {  
               text:"JOHNNIE WALKER",
               'hook':'scale:name=scale-x,index=7',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:98
            },
            {  
               text:"BACARDI",
               'hook':'scale:name=scale-x,index=8',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:52
            },
            {  
               text:"TANDURAY",
               'hook':'scale:name=scale-x,index=9',
               placement:"bottom",
               fontWeight:"bold",
               fontSize:20,
               offsetX:65
            },
          {  
         "background-image":"https://i.imgur.com/m2YY7H0.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=8',
      },
            {  
         "background-image":"https://i.imgur.com/6bm0eFt.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=9',
      },
            {  
         "background-image":"https://i.imgur.com/QN7U2wR.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=7',
      },
            {  
         "background-image":"https://i.imgur.com/YjUeh7q.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=6',
      },
            {  
         "background-image":"https://i.imgur.com/YjUeh7q.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=6',
      },
            {  
         "background-image":"https://i.imgur.com/ssjY1gH.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=5',
      },
            {  
         "background-image":"https://i.imgur.com/9s3Hhf5.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"55",
         'hook':'scale:name=scale-x,index=4',
      },
            {  
         "background-image":"https://i.imgur.com/5G5expf.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=3',
      },
            {  
         "background-image":"https://i.imgur.com/l5EmQfr.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=2',
      },
            {  
         "background-image":"https://i.imgur.com/FUsBM77.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=1',
      },
            {  
         "background-image":"https://i.imgur.com/sCZfLYT.png",
         "background-fit":"xy",
          angle:90,
      "offsetX":-70,
         "height":"120",
         "width":"35",
         'hook':'scale:name=scale-x,index=0',
      },
          ], 
          shapes: [
            {
            "type":"line",
        "line-width":5,
        "line-color":"Black",
        "points":[[147.5,80],
        [1400,80]]
            }
          ],
          title: {
          	text:"9-LITER CASES SOLD (MILLIONS)",
            marginTop:35,
            fontWeight:'bold'
          },
            "plot": {   
              valueBox: {
              	fontWeight:"bold",
                fontColor:"black",
                fontSize:13
              },
              "border-radius-top-right":3,
              "border-radius-bottom-right":3,
              	"backgroundColor":"#DF4944",
                "-bars-space-left":0.15,
                "-bars-space-right":0.15,
            },
            "scale-y": {
              values:"0:75:15",
              guide: {
                lineWidth:3,
                lineColor:"#A69D91",
                lineStyle:"dashed"
              },
              lineWidth:0,
              	tick: {
                	visible:false
                },
              item: {
                fontSize:20,
                fontColor:"black",
                fontWeight:'bold'
                },
            },
            "scaleX":{
              lineWidth:5,
              lineColor:"black",
                tick: {
                	visible:false
                },
              item: {
               visible:false 
              }
            },
            "tooltip": {
              "visible": false
            },
            "series": [
                {
                    "values": [
                        71.97,
                        32.85,
                        28,
                        25.5,
                      	25.5,
                      	18.01,
                      	17.99,
                      	17.4,
                      	17.23,
                      	16.6
                    ],
                },
                
            ]
        }
    ]
};

zingchart.render({ 
	id : 'myChartdrunk', 
	data : myConfigdrunk, 
	height: '800', 
	width: '1200' 
});


var myConfigapex = {
    "graphset": [{
      "type": "bar",
      "background-color": "white",
      "-title": {
        "text": "Apex Legend's Weapon Damage",
        "-font-color": "#7E7E7E",
        "backgroundColor": "none",
        "font-size": "22px",
        "alpha": 1,
        "adjust-layout": true,
      },
      "plotarea": {
        marginBottom: 130,
        marginLeft: 90
      },
      labels: [{
          "background-image": "https://i.imgur.com/lQtPvuG.png", //logo
          "background-fit": "xy",
          "background-repeat": false,
          height: 160,
          width: 210,
          offsetY: 40,
          offsetX: 75
        },
        {
          "background-image": "https://i.imgur.com/LxbsqUn.png", //re45
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=0",
          height: 60,
          width: 70,
          offsetY: 40,
          offsetX: 0
        },
        {
          "background-image": "https://i.imgur.com/bL8KfTH.png", //p2020
          "background-fit": "xy",
          angle: 83,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=0",
          height: 60,
          width: 70,
          offsetY: 40,
          offsetX: -75
        },
        {
          "background-image": "https://i.imgur.com/vMZZ2So.png", //revolver
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=0",
          height: 50,
          width: 75,
          offsetY: 40,
          offsetX: 75
        },
        {
          "background-image": "https://i.imgur.com/hj1QhNL.png", //mastiff
          "background-fit": "xy",
          angle: 86,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=1",
          height: 45,
          width: 125,
          offsetY: 65,
          offsetX: 75
        },
        {
          "background-image": "https://i.imgur.com/y8vhe9G.png", //peacekeeper
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=1",
          height: 70,
          width: 110,
          offsetY: 60,
          offsetX: -60
        },
        {
          "background-image": "https://i.imgur.com/F9gPS36.png", //eva8auto
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=1",
          height: 50,
          width: 120,
          offsetY: 60,
          offsetX: -10
        },
        {
          "background-image": "https://i.imgur.com/ce3h3Dq.png", //vk47
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=2",
          height: 50,
          width: 120,
          offsetY: 60,
          offsetX: 75
        },
        {
          "background-image": "https://i.imgur.com/WX6ECnl.png", //r301
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=2",
          height: 50,
          width: 120,
          offsetY: 60,
          offsetX: 0
        },
        {
          "background-image": "https://i.imgur.com/WX6ECnl.png", //r301
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=2",
          height: 50,
          width: 120,
          offsetY: 65,
          offsetX: 0
        },
        {
          "background-image": "https://i.imgur.com/ehq9XQT.png", //hemlock
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=2",
          height: 50,
          width: 120,
          offsetY: 45,
          offsetX: -75
        },
        {
          "background-image": "https://i.imgur.com/ldM7UeB.png", //longbow
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=3",
          height: 50,
          width: 120,
          offsetY: 63,
          offsetX: -75
        },
        {
          "background-image": "https://i.imgur.com/PHaNxL5.png", //tripletake
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=3",
          height: 50,
          width: 120,
          offsetY: 63,
          offsetX: 0
        },
        {
          "background-image": "https://i.imgur.com/T4IWYdZ.png", //kraber
          "background-fit": "xy",
          angle: 90,
          "background-repeat": false,
          "hook": "scale:name=scale-x,index=3",
          height: 50,
          width: 120,
          offsetY: 63,
          offsetX: 75
        },
   
      ],
      "plot": {
        borderRadiusTopLeft: 10,
        borderRadiusTopRight: 10,
        "rules": [{
            "rule": "%i === 0",
            "background-color": "#5A4E4D",
            text: "ji"
          },
          {
            "rule": "%i === 1",
            "background-color": "#8593AE"
          },
          {
            "rule": "%i === 2",
            "background-color": "#7E675E"
          },
          {
            "rule": "%i === 3",
            "background-color": "#DDA228"
          }
   
        ],
        "bars-space-left": 0.15,
        "bars-space-right": 0.15,
      },
      "scale-y": {
        maxItems: 5,
        "line-color": "#7E7E7E",
        "item": {
          "font-color": "#7e7e7e"
        },
        "guide": {
          "visible": true
        },
        "label": {
          "text": "Damage Per Second",
          "font-family": "arial",
          "bold": true,
          "font-size": "14px",
          "font-color": "#7E7E7E",
        },
      },
      "scaleX": {
        "values": [
          "Pistols",
          "Shotguns",
          "Assault Rifle",
          "Sniper Rifle"
        ],
        "placement": "default",
        "tick": {
          "size": 58,
          "placement": "cross"
        },
        "itemsOverlap": true,
        "item": {
          "-offsetY": -55,
          visible: false
        }
      },
      "tooltip": {
        "visible": false
      },
      "crosshair-x": {
        "line-width": "100%",
        "alpha": 0.18,
        "plot-label": {
          "header-text": "%kv DPS"
        }
      },
      "series": [{
          "values": [
            36,
            110,
            54,
            55
          ],
          "text": "gun1",
        },
        {
          "values": [
            55,
            126,
            56,
            69
          ],
          "text": "gun2"
        },
        {
          "values": [
            90,
            188,
            80,
            125
          ],
          "text": "gun3"
        },
      ]
    }]
  };
   
  zingchart.render({
    id: 'myChartapex',
    data: myConfigapex,
    height: '650',
    width: '1200'
  });

  var myConfigworks = {
    "globals":{
        "font-family": "Roboto",
      fontColor:"white"
      },
    backgroundImage:"https://i.imgur.com/99Y1Dbs.png",
    backgroundFit:"xy",
    plotarea: {
          margin:'dynamic'
    },
    scaleX: {
        labels:['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    scaleY:{
      'label': {
        fontSize:16,
          text:"Number of fireworks-related hospital visits",
      },
      'values':"0:16000:16000",
      short:true,
        guide: {
          visible:false
      }
    },
      'type':'bar',
    labels:[
      {
                  "background-image":"https://i.imgur.com/k07sK55.png",
                  "background-fit":"xy",
                  "height":"680",
                  "width":"310",
                            "offsetY":"-250",
                  "hook":"scale:name=scale-x,index=6"
                  },
    ],
      'plot':{
        "border-radius-top-left":5,
         "border-radius-top-right":5,
        'barWidth':80,
        rules: [
          {
          "rule":"%i == 0 || %i == 3 || %i == 7 || %i == 10",
            backgroundColor:'#D6141C'
              },
          {
          "rule":"%i == 1 || %i == 4 || %i == 8 || %i == 11",
            backgroundColor:'white'
              },
          {
          "rule":"%i == 2 || %i == 5 || %i == 9",
            backgroundColor:'#122B6C'
              }
        ],
      },
      'series':[
          {
              'values':[1515,243,223,309,504,1890,15554,701,378,350,381,776],
            "styles":[{
                          },
                     {
                          },
                     {
                          },
                     {
                          },
                     {
    
                          },
                     {
                          },
                     {
                          
                          "background-color":"none",
                       
                          },],
          },
        
      ]
  };
  zingchart.render({ 
      id : 'myChartworks', 
      data : myConfigworks, 
      height: 600, 
      width: '1200' 
  });
  

  var myConfiggames = {
    type: 'ring',
    title: {
      text: "America's Favorite Video Game Genres",
      align: "left",
      paddingLeft: 30,
      fontSize: 30
    },
    labels: [{
      "background-image": "https://i.imgur.com/g5KXIMR.png",
      "background-fit": "xy",
      height: 150,
      width: 200,
      x: 600,
      y: 270
    }, ],
   
    subtitle: {
      text: "Distribution of U.S. video game sales by genre in 2017",
      align: "left",
      paddingLeft: 30,
      fontSize: 18,
      paddingTop: 9
    },
    legend: {
      marginTop: 65,
      align: "left",
      border: "none",
      layout: "10x2",
      item: {
        fontSize: 16,
        paddingLeft: -10
      },
      marker: {
        width: 5,
        height: 35,
      }
    },
    plotarea: {
      width: 500,
      marginLeft: 450
    },
    plot: {
      slice: 155,
      border: "none",
      borderWidth: 0,
      valueBox: {
        visible: false
      }
    },
    series: [{
        values: [28.2],
        text: "Action<br>28.5%"
      },
      {
        values: [21.7],
        text: "Shooter<br>21.7%"
      },
      {
        values: [13.3],
        text: "Sporting games<br>13.3%"
      },
      {
        values: [9.5],
        text: "Role-playing<br>9.5%"
      },
      {
        values: [6.0],
        text: "Adventure<br>6.0%"
      },
      {
        values: [6.0],
        text: "Fighting<br>6.0%"
      },
      {
        values: [5.2],
        text: "Racing<br>5.2%"
      },
      {
        values: [4.1],
        text: "Strategy<br>4.1%"
      },
      {
        values: [3.3],
        text: "Family entertainment<br>3.3%"
      },
      {
        values: [1.3],
        text: "Casual<br>1.3%"
      },
      {
        values: [1.1],
        text: "Other/compilations <br>1.1%"
      },
      {
        values: [0.1],
        text: "Children's entertainment<br>0.1%"
      },
      {
        values: [0.1],
        text: "Arcade<br>0.1%"
      },
      {
        values: [0.1],
        text: "Flight<br>0.1%"
      }
    ]
  };
   
  zingchart.render({
    id: 'myChartgames',
    data: myConfiggames,
    height: '650',
    width: '1000'
  });