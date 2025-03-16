import styles from './index.module.css'
export default function InvoicesPage() {
    return (
        <div>
            <div id={styles.invoicesPage} className='d-flex flex-column'>
                <h3>Invoices</h3>
                <table className='table table-dark table-bordered'>

                </table>
            </div>
        </div>
    )
}
