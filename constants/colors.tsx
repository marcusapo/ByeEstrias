const primary = '#00DCA8'

const blue = '#4B65F9'
const blueLight = '#DCEDFD'
const red = '#F40F0F'
const green = '#06BC91'
const orange = '#E45809'
const purple = '#AD1AA7'

const white = '#FFF'
const grey = '#BFBFBF'
const greyLight = '#F7F1FF'
const black = '#333333'

const transparent = 'transparent'

export type ColorType = 'primary'

                    | 'blue'
                    | 'blueLight'
                    | 'red'
                    | 'green'
                    | 'orange'
                    | 'purple'

                    | 'white'
                    | 'grey'
                    | 'greyLight'
                    | 'black'

                    | 'transparent'

const findColor = (color: ColorType) => {
    switch (color) {
        case 'primary':
            return primary;
        case 'blue':
            return blue;
        case 'blueLight':
            return blueLight;
        case 'red':
            return red;
        case 'green':
            return green;
        case 'orange':
            return orange;
        case 'purple':
            return purple;
        case 'white':
            return white;
        case 'greyLight':
            return greyLight;
        case 'grey':
            return grey;
        case 'black':
            return black;
        case 'transparent':
            return transparent
    }
}

export {
    primary,

    blue,
    blueLight,
    red,
    green,
    orange,
    purple,

    white,
    grey,
    greyLight,
    black,

    transparent,

    findColor
}