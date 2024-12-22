'use client'

import { useState } from 'react'
import Link from 'next/link'
import { studentList } from './data'

export default function Home() {
  const [text, setText] = useState('')

  const onChange = (e: any) => {
    const t = e.target.value;
    setText(t)
  }

  const list = studentList.filter(student => student.name.includes(text))

  return (
    <>
      <h1 className="text-3xl text-zinc-800 mb-5">코딩하는기린 학생 목록</h1>

      <div className="mb-5">
        필터
        <input
          className="border border-gray-500"
          value={text}
          onChange={onChange}
        />
      </div>

      <div className="text-md text-amber-500">
        <ul>
          {
            list.map(student => (
              <div className="mb-3" key={student.id}>
                <li>
                  {student.id}.{' '}
                  <Link href={'/students/' + student.id}>
                    <span className="text-black">{student.name}</span>
                  </Link>
                </li>
              </div>
            ))
          }
        </ul>
      </div>
    </>
  );
}
