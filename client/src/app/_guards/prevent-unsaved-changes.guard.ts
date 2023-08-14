import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if (component.editForm?.dirty){
    return confirm('Tem certeza que deseja sair? Os dados alterados serão perdidos!!!');
  }
  
  
  return true;
};
