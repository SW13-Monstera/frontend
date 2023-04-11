import { useState } from 'react';
import { CHECKED_TAGS } from '../constants/localStorage';
import { ITagState } from '../types/tag';
import { resetCheckboxes } from '../utils/resetSearchProblemInputs';

interface IUseCheckedTags {
  resetPage: () => void;
}

export const useCheckedTags = ({ resetPage }: IUseCheckedTags) => {
  const [checkedTags, setCheckedTags] = useState<ITagState[]>(
    sessionStorage.getItem(CHECKED_TAGS) ? JSON.parse(sessionStorage.getItem(CHECKED_TAGS)!) : [],
  );

  const setCheckedTagsSync = (newCheckedTags: ITagState[]) => {
    setCheckedTags(newCheckedTags);
    sessionStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
    resetPage();
  };

  const handleCheckedTags = (id: string, name: string, isChecked: boolean) => {
    setCheckedTagsSync(
      checkedTags.map((tag: { id: string }) => tag.id).includes(id)
        ? checkedTags.map((tag) => (tag.id === id ? { id, isChecked, name } : tag))
        : [...checkedTags, { id, isChecked, name }],
    );
  };

  const resetCheckedTags = () => {
    resetCheckboxes();
    setCheckedTagsSync([]);
    resetPage();
  };

  const onDeleteButtonClick = (id: string) => {
    const newCheckedTags = checkedTags.filter((e) => e.id !== id);
    setCheckedTags(newCheckedTags);
    sessionStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
    resetPage();
  };

  return { checkedTags, handleCheckedTags, resetCheckedTags, onDeleteButtonClick };
};
