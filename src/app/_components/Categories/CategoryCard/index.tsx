import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

interface categoryCardProps {
  category: Category
}

const CategoryCard = ({ category }: categoryCardProps) => {
  const media = category.media as Media

  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.tittle}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
