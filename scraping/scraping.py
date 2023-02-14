from selenium import webdriver
from selenium.webdriver.common.by import By
from dotenv import dotenv_values
import logging
import pandas as pd
from time import sleep

class Scraping:

    def __init__(self):
        # Diretório de destino do arquivo csv gerado para posterior processamento
        self.path_file_to_process = r'C:\\Users\\gable\\OneDrive\\Área de Trabalho\\prj_gs\\file_to_process'
        self.env = dotenv_values('.env')
        # Lista para armazenar as informações das vagas
        self.jobs = []
        options = webdriver.ChromeOptions()
        self.browser = webdriver.Chrome(options=options)
    
    def run(self):
        # Define as configurações do log
        logging.basicConfig(format='%(asctime)s :: %(levelname)s :: %(message)s', filename='app.log', filemode='w', level=logging.INFO, datefmt='%d-%b-%y %H:%M:%S')

        # Extrai as informações das vagas
        logging.info('Extracting job information')
        self._jobs_page()
        
        # Fecha o browser
        self._close_browser()
        logging.info('Closed the browser')

    def _jobs_page(self):
        # Navega para a página de vagas
        self.browser.get(self.env.get('URL_JOBS'))
        sleep(1)
        
        # Recebe todas as divs com as informações da vagas
        jobs = self.browser.find_elements(By.CLASS_NAME, 'vaga-container')
        
        for job in jobs:
            tag_a_title = job.find_element(By.CLASS_NAME, 'vaga-titulo').find_element(By.TAG_NAME, 'a')
            title_job = tag_a_title.get_attribute('innerHTML')
            link_job = tag_a_title.get_attribute('href')
            date_publication = job.find_element(By.CLASS_NAME, 'vaga-local').get_attribute('innerHTML')
            self.jobs.append({
               'title_job': title_job,
               'date_publication': date_publication,
               'link_job': link_job
            })
            
        # Cria um arquivo csv com a relação de profissionais
        logging.info('Extracting job information')
        df = pd.DataFrame(data=self.jobs)
        df.to_csv(f'{self.path_file_to_process}\\jobs.csv', encoding='utf-8', index=False, sep = ';')
        
    # Método para fechar o browser
    def _close_browser(self):
        # Fecha o browser
        self.browser.close()