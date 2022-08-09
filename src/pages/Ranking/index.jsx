import { FilterLeague } from '../components/FilterLeague';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { RankingContainer, Club, RankingPageContainer } from './styles';
import { nanoid } from 'nanoid';

export const Ranking = () => {
	const teamsData = []; //simbolizando os dados recebidos da api

	const fillTable = (size) => {
		//dados ilustrativos - este trecho sera excluido
		for (let i = 1; i <= size; i++) {
			teamsData.push({
				position: 1,
				club: 'Tottenham',
				shield: 'https://cdn.footystats.org/img/teams/england-tottenham-hotspur-fc.png',
				points: 67,
				matches: 38,
				victories: 23,
				draws: 0,
				defeats: 15,
				goalsInFavor: 89,
				goalsAgainst: 56,
				goalDifference: 33,
				yellowCards: 45,
				redCards: 5,
			});
		}

		const teamDataContainers = teamsData.map((team) => {
			const {
				position,
				club,
				shield,
				points,
				matches,
				victories,
				draws,
				defeats,
				goalsInFavor,
				goalsAgainst,
				goalDifference,
				yellowCards,
				redCards
			} = team;

			return (
				<Club key={nanoid()}>
					<td className="position" key={nanoid()}>{position}º</td>
					<td className="soccer-team" key={nanoid()}>
						<div>
							<img src={shield} alt="Logo do clube"/>
							<span>{club}</span>
						</div>
					</td>
					<td className="points" key={nanoid()}>{points}</td>
					<td key={nanoid()}>{matches}</td>
					<td key={nanoid()}>{victories}</td>
					<td key={nanoid()}>{draws}</td>
					<td key={nanoid()}>{defeats}</td>
					<td key={nanoid()}>{goalsInFavor}</td>
					<td key={nanoid()}>{goalsAgainst}</td>
					<td key={nanoid()}>{goalDifference}</td>
					<td key={nanoid()}>{yellowCards}</td>
					<td key={nanoid()}>{redCards}</td>
				</Club>
			);
		});

		return teamDataContainers;
	};

	const query = [
		{
			label: 'Teste Query',
			code: `SELECT Time.nome, COUNT(*) AS "Quantas vezes ganhou"
      FROM Time
      INNER JOIN Disputa
      ON Disputa.clube_id_mandante = Time.id_clube
      WHERE Disputa.gols_mandante > Disputa.gols_visitante
      AND Time.nome like 'Arsenal FC'
      GROUP BY Time.nome;`
		}
	];

	return (
		<ContentContainer>
			<RankingPageContainer>
				<FilterLeague label="Classificação" modalCodes={query} />
				<RankingContainer>
					<table>
						<thead>
							<tr>
								<th>Posição</th>
								<th className="soccer-team">Clube</th>
								<th title="Pontos">PTS</th>
								<th title="Jogos">J</th>
								<th title="Vitórias">V</th>
								<th title="Empates">E</th>
								<th title="Derrotas">D</th>
								<th title="Gols Pró">GP</th>
								<th title="Gols Contra">GC</th>
								<th title="Saldo de Gols">SG</th>
								<th title="Cartões Amarelos">CA</th>
								<th title="Cartões Vermelhos">CV</th>
							</tr>
						</thead>
						<tbody>
							{fillTable(20) /* -> seria teamsData.length*/ }
						</tbody>
					</table>
				</RankingContainer>
				<Footer />
			</RankingPageContainer>
		</ContentContainer>
	);
};
