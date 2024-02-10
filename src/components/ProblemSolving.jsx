import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { Headline } from './Headline'

const ProblemSolving = () => {
  return (
    <div className=' mr-6 mt-4'>
      <Headline title='Problem Solving' />
      <ul className=' flex flex-col justify-center items-start gap-4 mt-4'>
        <li className=' flex gap-4 text-secondary items-center'>
          <SiLeetcode className=' text-xl' />
          <a
            href='https://leetcode.com/IsbatBInHossain/'
            target='_blank'
            rel='noopener noreferrer'
            className=' text-sm font-semibold '
          >
            LeetCode
          </a>
        </li>
        <li className=' flex gap-4 text-secondary items-center'>
          <SiHackerrank className=' text-xl' />
          <a
            href='https://www.hackerrank.com/profile/isbat31416'
            target='_blank'
            rel='noopener noreferrer'
            className=' text-sm font-semibold '
          >
            HackerRank
          </a>
        </li>
      </ul>
    </div>
  )
}
export default ProblemSolving
