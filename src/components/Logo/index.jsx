import {
	LogoContainer,
	LetterO,
	AnimationContainer,
	AnimationGround,
	AnimationBall
} from './styles';

export const Logo = () => {
	return (
		<LogoContainer>
      DataS
			<AnimationContainer>
				<LetterO>o</LetterO>

				<AnimationBall>
					<img src="./public/images/logo-ball.png" alt="" />
				</AnimationBall>

				<AnimationGround>
					<img src="./public/images/logo-ground.png" alt="" />
				</AnimationGround>
			</AnimationContainer>
      ccer
		</LogoContainer>
	);
};
