import { CHECKED_TAGS } from '../constants/localStorage';
import { ITagState } from '../types/tag';
import { resetCheckboxes } from '../utils/resetSearchProblemInputs';
import { useCheckedTagStore } from './useStore';

export const useCheckedTags = () => {
  const { checkedTags, setCheckedTags } = useCheckedTagStore();

  const setCheckedTagsSync = (newCheckedTags: ITagState[]) => {
    setCheckedTags(newCheckedTags);
    sessionStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
  };

  const handleCheckedTags = (id: string, name: string, isChecked: boolean) => {
    setCheckedTagsSync(
      checkedTags.map((tag: { id: string }) => tag.id).includes(id)
        ? checkedTags.map((tag) => (tag.id === id ? { id, isChecked, name } : tag))
        : [...checkedTags, { id, isChecked, name }],
    );
  };

  const deleteCheckedTag = (id: string) => {
    const newCheckedTags = checkedTags.filter((e) => e.id !== id);
    setCheckedTags(newCheckedTags);
    sessionStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
  };

  const resetCheckedTags = () => {
    resetCheckboxes();
    setCheckedTagsSync([]);
  };

  return { checkedTags, handleCheckedTags, resetCheckedTags, deleteCheckedTag };
};
