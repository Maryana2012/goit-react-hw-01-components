import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
// let color = getRandomHexColor();
// const style = {
// backgroundColor: {color}
// }


export default function Statistics(props){
  const { title, stats } = props;

  return <section className={css.statistics}>

    {title && <h2 className={ css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(stat =>
        <li className={css.item} style={ {backgroundColor: getRandomHexColor()} } key={stat.id}>
           <span className={css.label}>{stat.label}</span>
           <span className={css.percentage}>{stat.percentage}%</span>
         </li> )}
    </ul>
</section>
} 
Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape)
}
  