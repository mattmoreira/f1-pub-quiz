import styles from './quiz_leaderboard.module.css'

import QuizHeader from '../shared/QuizHeader'

import React from 'react'

function QuizLeaderboardItem({ teamName, points }) {
  return (
    <li className={styles.list_item}>
      <div className={styles.list_item_content}>
        <h3 className={styles.list_item_team_name}>{teamName}</h3>
        <p className={styles.list_item_points}>{points} points</p>
      </div>
    </li>
  )
}

export default function QuizLeaderboardContainer(props) {
  return (
    <div className={styles.container}>
      <QuizHeader />
      <h2 className={styles.subtitle}>Leaderboard</h2>
      <ol className={styles.list}>
        <QuizLeaderboardItem teamName="Scuderia Ferrari" points={3} />
        <QuizLeaderboardItem teamName="Scuderia Toro Rosso" points={18} />
        <QuizLeaderboardItem teamName="Renault F1 Team" points={10} />
      </ol>
    </div>
  )
}
