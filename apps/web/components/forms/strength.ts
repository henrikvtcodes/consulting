import zxcvbn from 'zxcvbn';

const strength = (password: string | undefined) => {
  const result = zxcvbn(password || "");
  const score = result.score;
  const feedback = result.feedback;

  return {
    score,
    feedback,
  }
}

export default strength;