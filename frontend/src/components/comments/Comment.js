import React, {useState, useEffect, memo, useCallback} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
//import db from ' THIS ONE TOO


function Comment(props) {
  const [userName, setUserName] = useState('')

  const fetchData = useCallback(async () => {
    const user = axios.authors[props.data.authorId]

    setUserName(user.firstName + ' ' + user.lastName)
  }, [props.data.authorId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Link to={`/Profile/${props.data.authorId}`}>
      <li className="media p-4">
        <div>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{userName}.</h5>
            <label className="font-italic font-weight-bold">Comment:</label>
            <span className="ml-3">{props.data.text}</span>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default memo(Comment)