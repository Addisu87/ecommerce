'use client'

import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  // Add null check for media before accessing its properties
  const backgroundImageStyle = media ? { backgroundImage: `url(${media.url})` } : {}

  return (
    <Link
      href="/products"
      className={classes.card}
      style={backgroundImageStyle}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
