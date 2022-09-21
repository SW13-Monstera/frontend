import { keywordIncludedStyle } from './style.css';

interface IKeywordBox {
  name: string;
  isIncluded: boolean;
}

function KeywordBox({ name, isIncluded }: IKeywordBox) {
  return <li className={keywordIncludedStyle[isIncluded ? 'true' : 'false']}>{name}</li>;
}

export default KeywordBox;
