
import chroma, { hex, lab } from 'chroma-js';

// these are the levels which will help to get the shades of the colors from the scale of 100 to 900
// here scale 50 is going to help us to create the shades from 
// < white -- color -- darken version of that color >
const levels = [50,100,200,300,400,500,600,700,800,900];

function generatePalette(starterPalette){


    let newPalette = {
        paletteName : starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

// we want colors of new palette to be like colors = { 50:[], 100:[],...,900:[]}
    for(let level of levels){
        newPalette.colors[level] = [];
    }

// AND each array should contain a series of shades in that respective color
    for(let color of starterPalette.colors){
        let scale = getScale(color.color, 10).reverse();
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex:scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                        .css()
                        .replace("rgb", "rgba")
                        .replace(")", ", 1.0)")
            })
        }
    }
    return newPalette;
}

function getRange(hexColor){
    const end = "#fff";
    // color.darken(1.4) -- color -- white generating shade
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ];
}

function getScale(hexColor, numOfColors){
    return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numOfColors);
}


export {generatePalette};