import { StoreSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state:StoreSchema) => state.addComment?.comment ?? '';
