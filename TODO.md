
# 12 players
as 1  = top player
as 12 = lower player

weekplayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
team1: [1, 12, 3, 10, 5, 8]
team2: [2, 11, 4, 9, 6, 7]


# algorithm
until weekplayers = 0

team1 = weekplayers[first]
remove.weekplayers[first]
invert(weekplayers)
team1 += weekplayers[first]
remove.weekplayers[first]

team2 = weekplayers[first]
remove.weekplayers[first]
invert(weekplayers)
team2 += weekplayers[first]
remove.weekplayers[first]

# escrever uma funcao que recebe os times como argumento e executa esse algoritmo?