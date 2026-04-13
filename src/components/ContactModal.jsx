"use client";
import { useModal } from '../context/ModalContext';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const { isContactOpen, toggleContact } = useModal();

  if (!isContactOpen) return null;

  return (
    <div className={styles.overlay}>
      <button onClick={toggleContact} className={styles.closeBtn}>
        ×
      </button>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Info */}
          <div className={styles.infoCol}>
            <h2 className={styles.heading}>Start a Project</h2>
            <p className={styles.subtext}>
              We are currently accepting new commissions for 2024-2025. 
              Let's discuss how we can shape your vision.
            </p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Email</span>
                <a href="mailto:hello@arch.studio">hello@arch.studio</a>
              </div>
              <div className={styles.detailItem}>
                <span>Studio</span>
                <p>1284 Blueprint Ave,<br/>Berlin, Germany</p>
              </div>
              <div className={styles.detailItem}>
                <span>Social</span>
                <p>Instagram / LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formCol}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" placeholder="Emma Smith" />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="emma@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label>Project Details</label>
                <textarea rows="4" placeholder="Tell us about the space..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Proposal <span className={styles.arrow}>→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}