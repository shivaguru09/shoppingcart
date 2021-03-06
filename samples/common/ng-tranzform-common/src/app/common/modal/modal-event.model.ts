import { Observable } from 'rxjs/Observable';

/**
 * Event passed from tzf-modal-content on (submit) and (action).
 */
export interface ModalEvent {
  /**
   * The ID of the action clicked. Undefined for (submit).
   */
  actionId?: any;

  /**
   * Set an observable here to have the modal close automatically when it succeeds.
   */
  observe?: Observable<any>;
}
