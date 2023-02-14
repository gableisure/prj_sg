from scraping import Scraping
from time import time
import logging

if __name__ == '__main__':
    start_time = time()

    print('Running the scraping')

    scraping = Scraping()
    scraping.run()

    print('Finished scraping')

    print('\nScraping completed in %.3f seconds' %(time() - start_time))
    
    logging.info('Scraping completed in %.3f seconds' %(time() - start_time))