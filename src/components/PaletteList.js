import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import '../styles/PaletteList.css';
const styles = {
    root:{
        height: 'max-content',
        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        background:'#ffa233',
    },
    container:{
        width : '60%',
        display : 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap:'wrap',
        height : 'max-content',
        gap:'1rem',
        padding: '1rem 0rem',
    },
    nav:{
        display:'flex',
        width : '100%',
        justifyContent: 'space-between',
        color:'white',
        alignItems:'center',
        "& a":{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textDecoration:'underline',
            fontSize:'medium'
        }
    },
    palettes:{
        boxSizing:'border-box',
        width : '100%',
        display : 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',
        height: 'max-content'
    },
    
    '@media (max-width: 991.98px)':{
        container:{
            width:'80%',
        }
    },

    '@media (max-width: 767.98px)':{
        container:{
            width:'80%'
        }
    },
    '@media (max-width: 575px)':{
        nav:{
            fontSize:'small',
            "& a" : {
                fontSize: 'small',
                padding: '0.25rem 0.5rem'
            }
        },
        palettes:{
            width:'80%',
            gridTemplateColumns: ' 1fr ',
            gap: '2%',
            marginInline : 'auto',
        }
    },
}


const PaletteList = (props) => {
    const {classes,palette,deletePalette} = props;
    const navigate = useNavigate()
    const goToPalette = (id)=>{
        navigate(`palette/${id}`);
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h2>Color Palette</h2>
                    <Link to={'/palette/generate/new-palette'}>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>
                    {palette.map((pal)=>(
                        <MiniPalette {...pal} handleClick = {()=>goToPalette(pal.id)} key={pal.id} deletePalette={deletePalette}/>
                        ))}
                </div>
            </div>
            <footer className='palette-footer'>
                    <a href='https://github.com/Akash-cloud001' target='_blank'><code>Made by  Akash</code></a> 
                    <div>
                        <a href='https://www.linkedin.com/in/akash-parmar-' target='_blank'>
                            <i className="ri-linkedin-fill"></i>  
                        </a>
                        <a href='https://github.com/Akash-cloud001' target='_blank'>
                            <i className="ri-github-fill"></i>  
                        </a>
                    </div>               
            </footer>
        </div>
            
  )
}

export default withStyles(styles)(PaletteList);