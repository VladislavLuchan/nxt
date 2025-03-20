import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface StartupCardProps {
  post: any
}

const StartupCard = ({ post }: StartupCardProps) => {
  const { _id, _createdAt, author: { _id: authorId, name }, views, title, description, category, image } = post;
  
  return (
    <li className='startup-card group'>

      <div className="flex-between">
        <p className='startup-card_date'>{formatDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
            <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image src={image} alt={title} width={100} height={100} className='rounded-full h-[48px] w-[48px]'/>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>{description}</p>

        <img src={image} className="startup-card_img" alt="placeholder" />
      </Link>

      <div className='flex-between mt-5 gap-3'>
        <Link href={`/?query=${category.toLowerCase()}`} className='text-16-medium'>{category}</Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Read More</Link>
        </Button>
      </div>

    </li>
  )
}

export default StartupCard;
