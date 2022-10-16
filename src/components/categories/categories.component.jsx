import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';


const Categories = (categories) => {
    return (
        <div className='categories-container'>
            {categories.categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Categories;