import RecipeCard from './RecipeCard.jsx'
import { useGsapReveal } from '../../hooks/useGsapReveal.js'

function RecipeGrid({ recipes, bookmarks, onBookmark }) {
  const gridRef = useGsapReveal('.recipe-card', { stagger: 0.07 })
  return (
    <div className="recipe-grid" ref={gridRef}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          saved={bookmarks.some((item) => item.id === recipe.id)}
          onBookmark={onBookmark}
        />
      ))}
    </div>
  )
}

export default RecipeGrid
